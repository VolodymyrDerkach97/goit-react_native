import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';

import avatarImg from '../../image/avatar.jpg';
import { useEffect, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { AuthRegistrationButton } from '../../components';

const RegistrationScreen = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [login, setLogin] = useState('');
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

  const onRegistration = () => {
    console.log('login:', login);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={
          isKeyboardVisible ? styles.containerKeyboardVisible : styles.container
        }
      >
        <View style={styles.wrapperImg}>
          {!isKeyboardVisible ? (
            <View
              style={{
                backgroundColor: '#F6F6F6',
                width: 120,
                height: 120,
                borderRadius: 16,
              }}
            ></View>
          ) : (
            <Image source={avatarImg} style={styles.profileImg} />
          )}
          <View style={styles.wrapperIcon}>
            {!isKeyboardVisible ? (
              <AntDesign
                style={styles.addIcon}
                name="pluscircleo"
                size={24}
                color="black"
              />
            ) : (
              <AntDesign
                style={styles.addIcon}
                name="closecircleo"
                size={24}
                color="#E8E8E8"
              />
            )}
          </View>
        </View>
        <Text style={styles.registerText}>Реєстрація</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <View
            style={
              isKeyboardVisible
                ? styles.inputWrapperOpenKeyBord
                : styles.inputWraper
            }
          >
            <TextInput
              style={styles.input}
              multiline
              value={login}
              inputMode="text"
              placeholder="Логін"
              onChange={setLogin}
            />
            <TextInput
              style={styles.input}
              multiline
              value={email}
              inputMode="email"
              placeholder="Адреса електронної пошти"
              onChangeText={setEmail}
            />
            <View style={styles.wrapperPasword}>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={password}
                placeholder="Пароль"
                onChangeText={setPassword}
              />
              <Text style={styles.textPasword}>Показати</Text>
            </View>
          </View>
        </KeyboardAvoidingView>

        <>
          <AuthRegistrationButton
            textButton="Зареєструватись"
            onClick={onRegistration}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </>
      </View>
    </TouchableWithoutFeedback>
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
    display: 'flex',

    minWidth: 343,
    marginTop: 'auto',
    marginBottom: 30,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,

    backgroundColor: '#ffffff',
  },

  profileImg: {
    borderRadius: 16,
    backgroundColor: 'red',
  },
  wrapperImg: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginTop: -60,
  },
  wrapperIcon: {
    position: 'relative',
  },
  addIcon: {
    position: 'absolute',
    right: -73,
    bottom: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
  },
  registerText: {
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
  inputWrapperOpenKeyBord: {
    display: 'flex',
    gap: 16,
    marginBottom: 32,
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
  wrapperPasword: {
    position: 'relative',
  },
  textPasword: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
});
export default RegistrationScreen;
