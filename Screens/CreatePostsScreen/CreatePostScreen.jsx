import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  Keyboard,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonApp } from '../../components';

const CreatePostScreen = () => {
  const navigation = useNavigation();

  const onLogin = () => {};
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.wrapperPostImg}>
          <ImageBackground style={styles.postImg}>
            <View style={styles.wrapperIcon}>
              <MaterialIcons
                name="photo-camera"
                size={24}
                color="black"
                style={styles.iconImg}
              />
            </View>
          </ImageBackground>
        </View>
        <Text style={styles.text}>Завантажте фото</Text>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            placeholder="Назва..."
            placeholderTextColor="#BDBDBD"
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Місцевість..."
            placeholderTextColor="#BDBDBD"
            multiline
          />
        </View>
        <ButtonApp textButton="Опублікувати" onClick={onLogin} />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },

  wrapperPostImg: {
    position: 'relative',

    marginTop: 32,
    width: '100%',
    height: 240,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  postImg: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },
  iconImg: {
    zIndex: 2,
    color: '#BDBDBD',
  },
  text: {
    marginTop: 8,
    color: '#BDBDBD',
  },
  wrapperInput: {
    display: 'flex',
    gap: 16,
    marginTop: 32,
  },
  input: {
    // backgroundColor: 'red',
    height: 50,

    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
});
