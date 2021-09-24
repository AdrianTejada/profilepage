import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera } from 'expo-camera';
import { Text, ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';


export default function App() {
  useEffect(()=>{
    Camera.requestCameraPermissionsAsync();
  },[])

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <View style={styles.container}>
        <View style={{borderRadius:50,paddingBottom: 18}}>
          <Camera style={{width:60, height:60,}} type={Camera.Constants.Type.front}/>
        </View>

        <Text>yes</Text>

        <StatusBar style="auto" />
      </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000112',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingTop: 70
  },
});



