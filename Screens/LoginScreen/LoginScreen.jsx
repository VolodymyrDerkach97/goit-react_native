import { StyleSheet, View, TextInput, Text, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

const RegisterButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>Увійти</Text>
    </TouchableOpacity>
  );
};

const LoginScreen = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
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
      <Text style={styles.loginText}>Увійти</Text>
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
          inputMode="email"
          keyboardType="email-address"
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
          <RegisterButton />
          <Text style={styles.text} onPress={() => {}}>
            Вже є акаунт? Увійти
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "relative",
    display: "flex",

    minWidth: 343,
    marginTop: "auto",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,

    backgroundColor: "#ffffff",
  },
  loginText: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 30,
    marginTop: 32,
    marginBottom: 33,
  },
  inputWraper: {
    display: "flex",
    gap: 16,
  },
  inputWrapperOpenKeyBord: {
    display: "flex",
    gap: 16,
    marginBottom: 32,
  },
  input: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    height: 50,
  },

  button: {
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
    fontWeight: 400,
  },
  text: {
    textAlign: "center",
    marginBottom: 78,
    color: "#1B4371",
  },

  wrapperPasword: {
    position: "relative",
  },
  textPasword: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});
export default LoginScreen;
