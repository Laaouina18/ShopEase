import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Navigation/Navbar';
import { Provider } from 'react-redux';
import store from './redux/Store';

const App = () => {
  return (
    <Provider store={store}>
        <Navbar />
    </Provider>
  );
}

export default App;
