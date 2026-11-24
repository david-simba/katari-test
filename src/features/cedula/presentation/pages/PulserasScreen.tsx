import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import { useRouter } from 'expo-router';
import { usePulseras } from '../hooks/usePulseras';

interface Props {
  cedula: string;
}

export const PulserasScreen = ({ cedula }: Props) => {
  const router = useRouter();

  const {
    pulseras,
    loading,
    error,
    retry,
  } = usePulseras(cedula);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.message}>
          Consultando tus pulseras...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>

        <TouchableOpacity style={styles.button} onPress={retry}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (pulseras.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>
          No se encontraron pulseras asociadas a esta cédula.
        </Text>

        <TouchableOpacity style={styles.button} onPress={retry}>
          <Text style={styles.buttonText}>Volver a consultar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis pulseras</Text>

      <FlatList
        data={pulseras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            onPress={() =>
              router.push({
                pathname: '/pulseras/detalle',
                params: {
                  pulsera: JSON.stringify(item),
                },
              })
            }
          >
            <View style={styles.row}>
              <Text style={styles.id}>
                Pulsera #{item.id}
              </Text>

              <Text
                style={[
                  styles.estado,
                  item.estado === 'ACTIVA'
                    ? styles.activa
                    : styles.pagada,
                ]}
              >
                {item.estado}
              </Text>
            </View>

            <Text style={styles.local}>
              {item.local}
            </Text>

            <Text style={styles.total}>
              Total: ${item.total.toFixed(2)}
            </Text>

            <Text style={styles.verDetalle}>
              Ver productos →
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  id: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  estado: {
    fontSize: 12,
    fontWeight: 'bold',
    padding: 6,
    borderRadius: 6,
    overflow: 'hidden',
  },
  activa: {
    color: '#15803D',
    backgroundColor: '#DCFCE7',
  },
  pagada: {
    color: '#1D4ED8',
    backgroundColor: '#DBEAFE',
  },
  local: {
    marginTop: 8,
    color: '#666',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
  verDetalle: {
    color: '#007AFF',
    fontWeight: 'bold',
    marginTop: 15,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
  error: {
    color: '#DC2626',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});