import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {InputTextField, Logo, SocialNetWork} from '../../components';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth'

export const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
handleSignIn = () => {
  auth()
  .signInWithEmailAndPassword(email, password)
  .then(()=>{navigation.navigate('App')})
  .catch(error =>{
    if(error.code === 'auth/invalid-email'){
      console.log('Email invalido');
    }
    if (error.code === 'auth/user-disabled'){
      console.log('Tú usuario ha sido deshabiblitado');
    }
    if (error.code === 'auth/user-not-found'){
      console.log('Correo incorrecto');
    }
    if (error.code === 'auth/wrong-password'){
      console.log('Contraseña incorrecta');
    }
    console.error(error);
  })
}

  return (
    <ScrollView style={styles.container}>
      <View>
        <Logo appName="Bidder" />
        <TextInput style={styles.input} label="Correo"
        onChangeText={email => setEmail(email)}
        value={email}
        />
        <TextInput style={styles.input} label="Contraseña" isSecure={true} 
        onChangeText={password => setPassword(password)}
        value={password}
        />
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        <Button
          style={styles.btnLogin}
          labelStyle={styles.txtLogin}
          mode="contained"
          onPress={this.handleSignIn}>
          Iniciar Sesión
        </Button>
        <View style={styles.socialNetworksContainer}>
          <SocialNetWork
            icon={require('../../assets/images/facebook.png')}
            label={'Facebook'}
          />
          <SocialNetWork
            icon={require('../../assets/images/google.png')}
            label={'Google'}
          />
        </View>
        <Text style={styles.register}>
          ¿Todavía no tienes una cuenta? <Text style={styles.now} onPress={() => navigation.navigate('Register')}>Registrate</Text>
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
  forgotPassword: {
    color: '#59709F',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'right',
  },
  socialNetworksContainer: {
    marginTop: 48,
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
