import { useLocalSearchParams } from 'expo-router';
import { PulserasScreen } from '@/features/cedula/presentation/pages/PulserasScreen';

export default function Pulseras() {
  const { cedula } = useLocalSearchParams<{
    cedula: string;
  }>();

  return <PulserasScreen cedula={cedula} />;
}