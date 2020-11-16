import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import { decode, encode } from 'base-64'

import { View, ActivityIndicator } from 'react-native';
import { firebase } from './src/firebase/config'

import { user_ } from './src/screens/LoginScreen/LoginScreen';

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)



  if(loading) {
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }

  // if (loading) {	
  //   alert('Carregando...')
  //   return(
  //     <View></View>
  //   )
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000)
  // }

  // function handleStopIndicator(){
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000)
  // }



  // function handleIndicator() {
  //   if (loading) {
  //     return (
  //       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //         <ActivityIndicator size='large' color='#999' />
  //       </View>
  //     )
  //   } else {
  //     setLoading(false);
  //   }
  // }


  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  console.log(">>>>>>>>>>>> ", user);

  

  return (
    <NavigationContainer>
      <Stack.Navigator>


        { user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}



        {/* {
          (user) ? (
            <Stack.Screen name="Home">
              {props => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
          ) : (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Registration" component={RegistrationScreen} />
              </>
            )
        }  */}




{/* 
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} extraData={user} />}
        </Stack.Screen>

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}