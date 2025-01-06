import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/store';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';  // Importer le type de navigation
import { RootStackParamList } from '../types/navigation/navigation';  // Importer le type de navigation

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();
  
  // Utiliser le type de navigation pour que TypeScript sache quel type de navigation on utilise
  const navigation = useNavigation<MainScreenNavigationProp>();

  const handleGenerateQRCode = () => {
    if (!firstName || !lastName) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }
    dispatch(setUser({ firstName, lastName }));
    navigation.navigate('QRCode');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Entrez votre nom"
      />
      <Text style={styles.label}>Prénom :</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Entrez votre prénom"
      />
      <Button title="Générer le QR Code" onPress={handleGenerateQRCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default MainScreen;
