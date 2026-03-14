import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  Button

} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";

type Operacao = "+" | "-" | "*" | "/";

export default function App() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [operacao, setOperacao] = useState<Operacao>("+");
  const [resultado, setResultado] = useState("");

  function limpar() {
    setValor1("");
    setValor2("");
    setOperacao("+");
    setResultado("");
  }

  function calcular() {
    const n1 = Number(valor1.replace(",", "."));
    const n2 = Number(valor2.replace(",", "."));

    if (!Number.isFinite(n1) || !Number.isFinite(n2)) {
      Alert.alert("Atenção, digite dois números válido");
      return;
    }

    if (operacao === "/" && n2 === 0) {
      Alert.alert("Divisão por zero não é possível");
      return;
    }

    let r = 0;

    if (operacao === "+") r = n1 + n2;
    if (operacao === "-") r = n1 - n2;
    if (operacao === "*") r = n1 * n2;
    if (operacao === "/") r = n1 / n2;

    setResultado(String(r));
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Calculadora</Text>

      <Text>Primeiro Número</Text>

      <TextInput onChangeText={setValor1}
        style={styles.input}
        value={valor1}
        keyboardType="numeric"
        placeholder="Ex: 10" />

      <Text>Segundo Número</Text>
      <TextInput
        style={styles.input}
        value={valor2}
        keyboardType="numeric"
        placeholder="Ex: 2"
        onChangeText={setValor2}

      />
      <Text>Operação</Text>
      <View style={styles.box}>
        <Picker selectedValue={operacao} onValueChange={(v) => setOperacao(v)}>
          <Picker.Item label="Somar (+)" value="+" />
          <Picker.Item label="Subtrair (-)" value="-" />
          <Picker.Item label="Multiplicar (*)" value="*" />
          <Picker.Item label="Dividir (/)" value="/" />
        </Picker>
      </View>

      <Button title="Calcular" onPress={calcular} />

      <Button title="limpar" onPress={limpar} />

      <Text style={styles.resultado}>Resultado: {resultado}</Text>



    </View>
  );
}