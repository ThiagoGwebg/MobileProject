import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet } from 'react-native';
import ConsultaCnpjScreen from '../screens/ConsultaCnpjScreen';
import ConsultaCepScreen from '../screens/ConsultaCep';

const Stack = createNativeStackNavigator();

function ConsultaMenu({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta</Text>
      <View style={styles.btn}>
        <Button title="CNPJ" onPress={() => navigation.navigate('CNPJ')} />
      </View>
      <View style={styles.btn}>
        <Button title="CEP" onPress={() => navigation.navigate('CEP')} />
      </View>
    </View>
  );
}

export default function ConsultaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={ConsultaMenu} options={{ title: 'Consulta' }} />
      <Stack.Screen name="CNPJ" component={ConsultaCnpjScreen} options={{ title: 'Consulta CNPJ' }} />
      <Stack.Screen name="CEP" component={ConsultaCepScreen} options={{ title: 'Consulta CEP' }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  btn: { marginVertical: 8 }
});
