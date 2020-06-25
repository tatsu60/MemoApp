import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import ENV from './env.json';

const firebaseConfig = {
  apiKey:             ENV.FIREBASE_API_KEY,
  authDomain:         ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:        ENV.FIREBASE_DB_URL,
  projectId:          ENV.FIREBASE_PRJ_ID,
  storageBucket:      ENV.FIREBASE_STORAGE,
  messagingSenderId:  ENV.FIREBASE_SENDER_ID,
  appId:              ENV.FIREBASE_APP_ID,
  measurementId:      ENV.FIREBASE_MEASUREMENT_ID,
};

// FirebaseError処理追加 Firebase App named '[DEFAULT]' already exists
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = createStackNavigator({
  Login:      { screen: LoginScreen },
  Signup:     { screen: SignupScreen },
  MemoEdit:   { screen: MemoEditScreen },

  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },

}, {
  defaultNavigationOptions: {
    headerTitle: '転職やることリスト',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default createAppContainer(App);
