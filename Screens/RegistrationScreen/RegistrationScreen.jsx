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
} from 'react-native';

import avatarImg from '../../image/avatar.jpg';
import { useEffect, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { AuthRegistrationButton } from '../../components';

const RegistrationScreen = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

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

  return (
    <View style={styles.container}>
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
          inputMode="text"
          placeholder="Логін"
        />
        <TextInput
          style={styles.input}
          multiline
          inputMode="email"
          placeholder="Адреса електронної пошти"
        />
        <View style={styles.wrapperPasword}>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Пароль"
          />
          <Text style={styles.textPasword}>Показати</Text>
        </View>
      </View>
      {!isKeyboardVisible && (
        <>
          <AuthRegistrationButton textButton="Зареєструватись" />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </>
      )}
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
