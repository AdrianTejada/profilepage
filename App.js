import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import TextTag from './comps/text'


export default function App() {
  useEffect(()=>{
    Camera.requestCameraPermissionsAsync();
  },[])

  return (
    <View style={styles.container}>
      <View style={{borderRadius:50,paddingBottom: 18}}>
        <Camera style={{width:60, height:60,}} type={Camera.Constants.Type.front}/>
      </View>

      <Text style={boldtext.container}>Adrian</Text>
      <Text style={smalltext.container}>@adriantejada</Text>

        <View style={followcount.container}>
          <View style={followcount.container}>
            <Text style={boldtext.container}>20</Text>
            <Text style={smalltext.container}>Following</Text>
          </View>

          <View style={followcount.container}>
            <Text style={boldtext.container}>20</Text>
            <Text style={smalltext.container}>Followers</Text>
          </View>
        </View>

        <View>
          <Text style={normaltext.container}>Profile</Text>
          <Text style={normaltext.container}>Lists</Text>
          <Text style={normaltext.container}>Topics</Text>
          <Text style={normaltext.container}>Bookmarks</Text>
          <Text style={normaltext.container}>Moments</Text>
          <Text style={normaltext.container}>Purchase</Text>
          <Text style={normaltext.container}>Monetization</Text>     
          <Text style={normaltext.container}>Twitter Blue</Text>     
        </View>

        <View style={divider.container}></View>

        <Text style={normaltext.container}>Settings and privacy</Text>
        <Text style={normaltext.container}>Help Center</Text> 

        <TextTag/>




      


      <StatusBar style="auto" />
    </View>
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

const smalltext = StyleSheet.create({
  container: {
    color: '#454545',
    marginLeft: 0,
    fontSize: 17,
    marginRight: 5
  },
});

const boldtext = StyleSheet.create({
  container: {
    color: 'white',
    marginLeft: 0,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 3
  },
});

const normaltext = StyleSheet.create({
  container: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 15,
    paddingTop: 15
  },
});

const followcount = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  }
});

const content = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
});

const divider = StyleSheet.create({
  container: {
    backgroundColor: "#454545",
    width: "130%",
    height: .3,
    left: -30
  },
});


