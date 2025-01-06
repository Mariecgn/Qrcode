# Génération de QR Code

Ce projet est une application React Native permettant de générer un QR Code à partir d'un nom et prénom. Une fois saisi, l'utilisateur peut scanner le QR Code pour obtenir les informations qu'il a entrées.

## **Fonctionnalités**

- Saisie du nom et prénom de l'utilisateur.
- Génération d'un QR Code contenant les informations saisies.
- Navigation entre deux écrans : formulaire et QR Code.
- Gestion globale de l'état avec Redux.

---
## **Instruction d'utilisation**
1. Lancez l'application avec les commandes mentionnées ci-dessus.
2. Sur l'écran principal:
    - Saisissez votre nom et prénom
    - Cliquer sur "générer le QRcode"
3. Vous serez redirigé vers l'écran de QR Code où votre QR Code sera affiché.
4. Scannez le QR Code avec une application tierce pour voir les informations saisies.


---

## **Prérequis**

- Node.js (version 14 ou supérieure)
- npm ou yarn
- React Native CLI
- Android Studio ou Xcode (pour le développement mobile)

---

## **Installation des modules**
- Création du projet:
```bash
expo init QRCodeApp
```
- Installation de Expo :
```bash
npm install Expo
```

- Installation de tous les modules supplémentaires:
```bash
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
```

- Module de Expo-CLI :
```bash
npm install -g expo-cli
```

- Navigation (stack & native):
```bash
npm install @react-navigation/stack
npm install @react-navigation/native
```

- Module pour le QRCode :
```bash
npm install react-native-qrcode-svg
``` 

- Installation de Reduxjs Toolkit:
```bash
npm install @reduxjs/toolkit react-redux
```
## Bibliothèques principales utilisées
- **React Navigator** : Gestion de la navigation
- **React Redux** : Gestion globale de l'état
- **react-native-qrcode-svg** : Génération du QRCode
- **TypeScript** : Typage statique pour JS

## Structure du Code
**Écrans** :
>MainScreen.tsx : Permet de saisir le nom et le prénom de l'utilisateur et de naviguer vers l'écran de QR Code.

>QRCodeScreen.tsx : Affiche le QR Code généré à partir des informations saisies.

**Store Redux**:  
>store.ts : Contient la configuration du store Redux pour gérer l'état global.

**Types**
>navigation.ts : Définit les types pour la navigation entre les écrans.