import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawNavigation from './Navigation/DrawNavigation';
import { Provider } from 'react-redux';
import store from './redux/Store';
 const App=()=> {
  return (
	<Provider store={store}>
		<DrawNavigation/>
	</Provider>
  );
}
export default App;

