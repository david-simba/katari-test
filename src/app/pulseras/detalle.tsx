import { useLocalSearchParams } from 'expo-router';

import { DetallePulseraScreen } from '@/features/cedula/presentation/pages/DetallePulseraScreen';

export default function DetallePulsera() {
  const { pulsera } = useLocalSearchParams<{
    pulsera: string;
  }>();

  if (!pulsera) {
    return null;
  }

  try {
    const datos = JSON.parse(pulsera);

    return <DetallePulseraScreen pulsera={datos} />;
  } catch {
    return null;
  }
}