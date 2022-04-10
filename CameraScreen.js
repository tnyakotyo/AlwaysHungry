import React, { useState , useEffect} from 'react';
import { View, Text, StyleSheet , Button, Alert } from 'react-native';
import SearchBar from '../components/SearchBar';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { WebView } from 'react-native-webview';

const CameraScreen = ({navigation}) => {
const [hasPermission, setHasPermission] = useState(null);
const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
      //navigation.navigate('Webview')
      //`Bar code with type ${type} and data ${data} has been scanned!`
    Alert.alert(
      "QR Code Found",
        `Your Menu has been scanned! - ${data}`,
        [
          {
            text: "Go to Menu",
            onPress: () =>
              navigation.navigate('Webview', {data : data})
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



  return (
    <View style={styles.container} >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject]} 
    />
 
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} /> }
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'center',
      },
      scanner:{
          height: 200,
          width: 200
      }
});

export default CameraScreen;