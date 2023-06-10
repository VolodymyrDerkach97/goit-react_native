import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const ButtonApp = ({ textButton, onClick }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onClick()}>
      <Text style={styles.buttonText}>{textButton}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});
