import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { Text, ApplicationProvider, Divider, Layout } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';


export default function App() {
  useEffect(()=>{
    Camera.requestCameraPermissionsAsync();
  },[])

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={styles.container}>
        <Layout style={{borderRadius:50,paddingBottom: 18}}>
          <Camera style={{width:60, height:60,}} type={Camera.Constants.Type.front}/>
        </Layout>

        <Text style={boldtext.container}>Adrian</Text>
        <Text style={smalltext.container} appearance="hint">@adriantejada</Text>

        <Layout style={followcount.container}>
          <Layout style={followcount.container}>
            <Text style={boldtext.container}>20</Text>
            <Text style={smalltext.container} appearance="hint">Following</Text>
          </Layout>

          <Layout style={followcount.container}>
            <Text style={boldtext.container}>20</Text>
            <Text style={smalltext.container} appearance="hint">Followers</Text>
          </Layout>
        </Layout>

        <Layout>
          <Text style={normaltext.container}>Profile</Text>
          <Text style={normaltext.container}>Lists</Text>
          <Text style={normaltext.container}>Topics</Text>
          <Text style={normaltext.container}>Bookmarks</Text>
          <Text style={normaltext.container}>Moments</Text>
          <Text style={normaltext.container}>Purchase</Text>
          <Text style={normaltext.container}>Monetization</Text>     
          <Text style={normaltext.container}>Twitter Blue</Text>     
        </Layout>

        <Divider style={divider.container}/>

        <Text style={normaltext.container}>Settings and privacy</Text>
        <Text style={normaltext.container}>Help Center</Text> 

        <StatusBar style="auto" />
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingTop: 70
  },
});

const smalltext = StyleSheet.create({
  container: {
    //color: '#454545',
    marginLeft: 0,
    fontSize: 17,
    marginRight: 20
  },
});

const boldtext = StyleSheet.create({
  container: {
    marginLeft: 0,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 3
  },
});

const normaltext = StyleSheet.create({
  container: {
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

