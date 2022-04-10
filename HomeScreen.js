import React, { useState , useEffect} from 'react';
import { View, Text, StyleSheet , Button , Image } from 'react-native';
import SearchBar from '../components/SearchBar';
import { BarCodeScanner } from 'expo-barcode-scanner';
import CameraScreen from './CameraScreen';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container} >
    <Text> 
     Simply Scan and View the menu 
    </Text>
     <Image
     style={{ width: 300, height: 300, marginBottom: 15 , justifyContent: 'center',
     alignItems: 'center',  }}
     source={require('./alwayshungry.png')}
     />
    <Button title="Scan QR Code"
    onPress={() =>
      navigation.navigate('Camera')
    }
    />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      scanner:{
          height: 300
      }
});

export default HomeScreen;