import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useCedula } from '../hooks/useCedula';

export const RegistroScreen = () => {
  const router = useRouter();
  const {
    cedula,
    error,
    isValid,
    onChangeCedula,
  } = useCedula();

  const handleContinuar = () => {
    if (!isValid) return;

    router.push({
      pathname: '/pulseras',
      params: {
        cedula,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Número de cédula</Text>

      <TextInput
        style={styles.input}
        value={cedula}
        onChangeText={onChangeCedula}
        placeholder="Ingresa tu cédula"
        keyboardType="number-pad"
        maxLength={10}
      />

      {error !== '' && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}

      <TouchableOpacity
        style={[
          styles.button,
          !isValid && styles.buttonDisabled,
        ]}
        disabled={!isValid}
        onPress={handleContinuar}
      >
        <Text style={styles.buttonText}>
          Continuar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});