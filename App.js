import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.div1}>
        <Text style={styles.text}>Gotrain</Text>
      </View>
      <View style={styles.div2}></View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div1:{
    flex:1,
    backgroundColor: '#000',
    width:'100%'
  },
  div2:{
    flex:2,
    backgroundColor:'rgb(158, 138, 12)',
    width:'100%'
  },
  text:{
    color:'#fff',
    alignItems: 'center',
    justifyContent:'center',
    margin:100,
    textAlign:'center'
  }
});
