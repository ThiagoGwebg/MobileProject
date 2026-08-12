import { useState } from 'react';
import {
  View, Text, TextInput, Button, ActivityIndicator,
  Alert, ScrollView, StyleSheet
} from 'react-native';
import { buscarCep } from '../api';
import { Endereco } from '../cep';

export default function ConsultaCepScreen() {
  const [cep, setCep] = useState<string>('');
  const [dados, setDados] = useState<Endereco | null>(null);
  const [carregando, setCarregando] = useState<boolean>(false);

  async function consultar(): Promise<void> {
    const limpo = cep.replace(/\D/g, '');
    if (limpo.length !== 8) {
      Alert.alert('Atenção', 'Digite um CEP com 8 dígitos.');
      return;
    }
    try {
      setCarregando(true);
      setDados(await buscarCep(limpo));
    } catch {
      Alert.alert('Erro', 'Não foi possível consultar o CEP.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Consulta CEP</Text>

      <TextInput
        placeholder="00000-000"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
        maxLength={9}
        style={styles.input}
      />

      <Button
        title={carregando ? 'Consultando...' : 'Consultar'}
        onPress={consultar}
        disabled={carregando}
      />

      {carregando && <ActivityIndicator style={styles.loading} size="large" />}

      {dados && (
        <View style={styles.card}>
          <Text style={styles.nome}>CEP: {dados.cep}</Text>
          <Text>Logradouro: {dados.logradouro}</Text>
          {!!dados.complemento && <Text>Complemento: {dados.complemento}</Text>}
          <Text>Bairro: {dados.bairro}</Text>
          <Text>Cidade/UF: {dados.localidade}/{dados.uf}</Text>
          {!!dados.estado && <Text>Estado: {dados.estado}</Text>}
          {!!dados.regiao && <Text>Região: {dados.regiao}</Text>}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  titulo: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 12, marginBottom: 12, fontSize: 16
  },
  loading: {marginTop: 24},
  card: {
    backgroundColor: '#f5f5f5', borderRadius: 8,
    padding: 16, marginTop: 16
  },
  nome: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
});