import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

type Mahasiswa = {
  id: string;
  nama: string;
  prodi: string;
};

const DAFTAR_MAHASISWA: Mahasiswa[] = [
  { id: '1', nama: 'Christella', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Naila Ramadhani', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Angelina', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Sausan Rafa', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Siska Amelia', prodi: 'Sistem Informasi' },
];

export default function MahasiswaScreen() {
  const [keyword, setKeyword] = useState('');

  const hasilFilter = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Direktori Mahasiswa</Text>

      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <FlatList
        data={hasilFilter}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.prodi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Data tidak ditemukan!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  nama: { fontSize: 16, fontWeight: '600' },
  prodi: { color: '#64748B', marginTop: 2 },
  empty: { textAlign: 'center', color: '#EF4444', marginTop: 20 },
});