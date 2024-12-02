import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { auth, signInWithEmailAndPassword, sendPasswordResetEmail } from './firebase'; // Importa Firebase

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // Função de login com Firebase
  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate('HomeScreen'); // Substitua pela tela desejada após login
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Erro', 'Usuário não encontrado!');
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert('Erro', 'Senha incorreta!');
      } else {
        Alert.alert('Erro', 'Ocorreu um erro ao fazer login, tente novamente.');
      }
    }
  };

  // Função de recuperação de senha
  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira um e-mail para redefinir a senha.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Sucesso', 'Verifique sua caixa de entrada para redefinir a senha.');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível enviar o e-mail para redefinição.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BEM-VINDO!</Text>
      <Text style={styles.subtitle}>ENTRE PARA CONTINUAR</Text>

      {/* Campo de E-mail */}
      <TextInput
        style={[styles.input, erroEmail && styles.inputError]}
        placeholder="seuemail@gmail.com"
        placeholderTextColor="#a9a9a9"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setErroEmail(false); // Reseta o erro de e-mail ao digitar
        }}
      />

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        placeholder="********"
        placeholderTextColor="#a9a9a9"
        secureTextEntry={!mostrarSenha}
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={() => setMostrarSenha(!mostrarSenha)}
      >
        {/* Ícone para mostrar/esconder senha (pode adicionar imagem aqui) */}
      </TouchableOpacity>

      {/* Botão de Login */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>ENTRAR</Text>
      </TouchableOpacity>

      {/* Botão de Esqueci a Senha */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>ESQUECI A SENHA</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>OU</Text>
        <View style={styles.line} />
      </View>

      {/* Botão para Criar Conta */}
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.googleButtonText}>CRIAR CONTA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef6f1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3064d1',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#a9a9a9',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1a41aa',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#aaa',
    fontSize: 14,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  googleButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default LoginScreen;
