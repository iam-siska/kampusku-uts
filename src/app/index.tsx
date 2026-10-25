import React from 'react';
import { Text, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InfoCard from '../components/InfoCard';
import MahasiswaScreen from '../components/MahasiswaScreen';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Daftar Tugas</Text>

      <InfoCard
        title="Tugas Jobsheet 04 - FlatList"
        status="selesai"
        onPress={() => Alert.alert('Detail', 'Tugas Jobsheet 04 sudah selesai')}
      />
      <InfoCard
        title="Tugas Jobsheet 05 - Props"
        status="proses"
        onPress={() => Alert.alert('Detail', 'Tugas Jobsheet 05 masih diproses')}
      />

      <MahasiswaScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 16,
  },
  heading: { fontSize: 22, fontWeight: 'bold', marginVertical: 12 },
});