import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg'; // Assurez-vous que l'importation est correcte
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const QRCodeScreen = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user.firstName} {user.lastName}</Text>
      <QRCode value={`${user.firstName} ${user.lastName}`} size={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default QRCodeScreen;
