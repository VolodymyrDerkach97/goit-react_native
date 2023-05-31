import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen.jsx";
import LoginScreen from "./Screens/LoginScreen/LoginScreen.jsx";
import imageBg from "./image/PhotoBG.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBg}
        resizeMode="stretch"
        style={styles.image}
      >
        {/* <LoginScreen /> */}
        <RegistrationScreen />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
