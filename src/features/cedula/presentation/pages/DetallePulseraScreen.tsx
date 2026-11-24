import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

interface Producto {
  cantidad: number;
  producto: string;
  precio: number;
}

interface Pulsera {
  id: string;
  estado: string;
  local: string;
  total: number;
  items: Producto[];
}

interface Props {
  pulsera: Pulsera;
}

export const DetallePulseraScreen = ({ pulsera }: Props) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Detalle de pulsera
      </Text>

      <View style={styles.card}>

        <Text style={styles.id}>
          Pulsera #{pulsera.id}
        </Text>

        <Text style={styles.local}>
          {pulsera.local}
        </Text>

        <Text style={styles.estado}>
          Estado: {pulsera.estado}
        </Text>

      </View>

      <Text style={styles.subtitle}>
        Productos consumidos
      </Text>

      <View style={styles.tableHeader}>
        <Text style={[styles.column, { flex: 2 }]}>
          Producto
        </Text>

        <Text style={styles.column}>
          Cant.
        </Text>

        <Text style={styles.column}>
          Precio
        </Text>

        <Text style={styles.column}>
          Subtotal
        </Text>
      </View>

      <FlatList
        data={pulsera.items}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          const subtotal = item.cantidad * item.precio;

          return (
            <View style={styles.productRow}>

              <Text style={[styles.productName, { flex: 2 }]}>
                {item.producto}
              </Text>

              <Text style={styles.column}>
                {item.cantidad}
              </Text>

              <Text style={styles.column}>
                ${item.precio.toFixed(2)}
              </Text>

              <Text style={styles.column}>
                ${subtotal.toFixed(2)}
              </Text>

            </View>
          );
        }}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>
          Total de la pulsera
        </Text>

        <Text style={styles.total}>
          ${pulsera.total.toFixed(2)}
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
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
    marginBottom: 25,
  },
  id: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  local: {
    marginTop: 8,
    color: '#666',
  },
  estado: {
    marginTop: 8,
    color: '#15803D',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#E5E7EB',
    padding: 10,
    borderRadius: 6,
  },
  column: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  productName: {
    fontSize: 13,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    marginTop: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#15803D',
  },
});