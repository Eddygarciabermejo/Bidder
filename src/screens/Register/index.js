import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {InputTextField, Logo, SocialNetWork} from '../../components';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export const Register = () => {
const navigation = useNavigation();
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
handleSignUp = () => {
  auth()
  .createUserWithEmailAndPassword(email, password)
  .then(()=>{navigation.navigate('Login')})
  .catch(error =>{
    if(error.code === 'auth/email-already-in-use'){
      console.log('Email registrado previamente');
    }
    if (error.code === 'auth/invalid-email'){
      console.log('Correo invalido');
    }
    console.error(error);
  })
}


  return (
    <ScrollView style={styles.container}>
      <View>
        <Logo appName="Bidder" />
        <TextInput label="Nombre"></TextInput>
        <TextInput style={styles.input} label="Correo"
        onChangeText={email => setEmail(email)}
        value={email}
        />
        <InputTextField style={styles.input} title="Teléfono" />
        <TextInput style={styles.input} label="Contraseña" isSecure={true} 
        onChangeText={password => setPassword(password)}
        value={password}
        />
        <Button
          style={styles.btnLogin}
          labelStyle={styles.txtLogin}
          mode="contained"
          onPress={this.handleSignUp}>
          Registrate
        </Button>
        <Text style={styles.socialMediaRegister}>Registrate con redes sociales</Text>

        <Text style={styles.register}>
          ¿Ya tienes una cuenta? <Text style={styles.now} onPress={() => navigation.navigate('Login')}>Inicia Sesión</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  input: {
    marginTop: 32,
    marginBottom: 8,
    paddingVertical: 12,
    color: '#1D2029',
    fontSize: 14,
  },
  inputTitle: {
    color: '#ABB4BD',
    fontSize: 14,
  },
  register: {
    fontSize: 14,
    color: '#ABB4BD',
    textAlign: 'center',
    marginTop: 24,
  },
  now: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 24,
    color: '#59709F',
    fontWeight: '500',
  },
  socialMediaRegister: {
    color: '#59709F',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 24
  },
  socialNetworksContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnLogin: {
    backgroundColor: '#59709F',
    borderRadius: 4,
    marginTop: 32,
    shadowColor: 'rgba(18, 189, 164, 0.24)',
    shadowOffset: {width: 0, height: 9},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  txtLogin: {
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
  },
});
