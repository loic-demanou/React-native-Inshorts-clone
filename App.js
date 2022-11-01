import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Context from './API/Context';
import InshortTabs from './components/InshortTabs';

function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      <InshortTabs />
    </View>
  );
}

export default () => {
  return (
    <Context>
      <App />
    </Context>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});
