import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';

const RegisterScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [imagemPerfil, setImagemPerfil] = useState(null);
  const [formValid, setFormValid] = useState(false);

  const handleImagePick = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });
    if (result.assets && result.assets.length > 0) {
      setImagemPerfil(result.assets[0].uri);
    }
  };

  const handleCadastro = async () => {
    if (!nome || !dataNascimento || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, senha);
      const user = userCredential.user;

      let imageUrl = null;
      if (imagemPerfil) {
        const imageRef = storage().ref(`/profileImages/${user.uid}.jpg`);
        await imageRef.putFile(imagemPerfil);
        imageUrl = await imageRef.getDownloadURL();
      }

      await firestore().collection('users').doc(user.uid).set({
        nome,
        dataNascimento,
        email,
        imageUrl,
        criadoEm: firestore.FieldValue.serverTimestamp(),
      });

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Algo deu errado ao cadastrar, tente novamente!');
    }
  };

  useEffect(() => {
    setFormValid(nome && dataNascimento && email && senha && confirmarSenha && senha === confirmarSenha);
  }, [nome, dataNascimento, email, senha, confirmarSenha]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BEM-VINDO!</Text>
      <Text style={styles.subtitle}>CADASTRE-SE PARA CONTINUAR</Text>

      <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
        {imagemPerfil ? (
          <Image source={{ uri: imagemPerfil }} style={styles.profileImage} />
        ) : (
          <Ionicons name="camera" size={50} color="#ccc" />
        )}
      </TouchableOpacity>
      <Text style={styles.imageText}>Adicionar foto de perfil</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#999"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de nascimento</Text>
        <TextInput
          style={styles.input}
          placeholder="00/00/0000"
          placeholderTextColor="#999"
          value={dataNascimento}
          onChangeText={setDataNascimento}
          maxLength={10}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="seuemail@gmail.com"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirme sua senha</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: formValid ? '#71c8b6' : '#a3d9d4' }]}
        onPress={handleCadastro}
        disabled={!formValid}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  imagePicker: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 100,
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageText: {
    textAlign: 'center',
    color: '#666',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default RegisterScreen;
