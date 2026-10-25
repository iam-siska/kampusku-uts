import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type InfoCardProps = {
  title: string;
  status: 'selesai' | 'proses';
  onPress: () => void;
};

export default function InfoCard({ title, status, onPress }: InfoCardProps) {
  const warnaStatus = status === 'selesai' ? '#2E9E4F' : '#F59E0B';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={[styles.badge, { backgroundColor: warnaStatus }]}>
        <Text style={styles.badgeText}>{status}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 12,
  },
  badgeText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  button: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontWeight: '600' },
});