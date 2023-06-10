import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AuthRegistrationButton } from '../../components';

const LoginScreen = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const onLogin = () => {
    console.log('email:', email, 'password:', password);
  };

  return (
    <View
      style={
        isKeyboardVisible ? styles.containerKeyboardVisible : styles.container
      }
    >
      <Text style={styles.loginText}>Увійти</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.inputWraper}>
          <TextInput
            style={styles.input}
            multiline
            inputMode="email"
            keyboardType="email-address"
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Пароль"
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.textPasword}>Показати</Text>
        </View>
      </KeyboardAvoidingView>
      <AuthRegistrationButton textButton="Увійти" onClick={onLogin} />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.text}>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    minWidth: 343,
    marginTop: 'auto',
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,

    backgroundColor: '#ffffff',
  },
  containerKeyboardVisible: {
    position: 'relative',
    display: 'flex',

    minWidth: 343,
    marginTop: 'auto',
    marginBottom: 55,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,

    backgroundColor: '#ffffff',
  },
  loginText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 30,
    marginTop: 32,
    marginBottom: 33,
  },
  inputWraper: {
    display: 'flex',
    gap: 16,
  },
  input: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    height: 50,
  },

  button: {
    backgroundColor: '#FF6C00',
    padding: 16,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 16,
    fontWeight: 400,
  },
  text: {
    textAlign: 'center',
    marginBottom: 78,
    color: '#1B4371',
  },

  textPasword: {
    position: 'absolute',
    right: 16,
    bottom: 32,
  },
});
export default LoginScreen;
