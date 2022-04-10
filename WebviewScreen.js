import React, { Component, useState , useEffect } from 'react';
import { ActivityIndicator, Text , StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import CameraScreen from './CameraScreen';



// ...
///<WebView source={{ uri: navigation.getParam(data) }} />



const WebViewScreen = ({navigation}) =>{
  const data = navigation.getParam('data');
    return (<>
    <Text style={styles.center} >Loading Menu </Text>
    <WebView
    
    source={{ uri: data }} 
    />
  </>
    )
    
  }
  const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
      }
});
export default WebViewScreen
