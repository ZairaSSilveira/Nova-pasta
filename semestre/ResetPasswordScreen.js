import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { auth } from './firebase';

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
      Alert.alert('E-mail de redefinição enviado!');
    } catch (error) {
      Alert.alert('Erro ao enviar e-mail:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button title="Redefinir Senha" onPress={handlePasswordReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { borderBottomWidth: 1, marginBottom: 12, padding: 8 },
});
