import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons'
import Constant from 'expo-constants'

export default function Header() {

const mycolor = "#212121"

  return (
    <View style={{
        marginTop:Constant.statusBarHeight,
        height:45,
        background:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        elevation:4,
        shadowOffset:{width:10,height:10},
        shadowColor:'black',
        shadowOpacity:1.0
    }}>

      <View style={{flexDirection:"row", margin:5}}>
        <AntDesign style={{
            marginLeft:10
        }} name="youtube" size={32} color="red" />
        <Text style={{
            fontSize:22,
            marginLeft:5,
            color:mycolor,
            fontWeight:"bold"
        }}>YouTube</Text>
      </View>

      <View style={{flexDirection:"row", justifyContent:"space-around", width:150, margin:5}} >
        <Ionicons name="md-videocam" size={32} color={mycolor} />
        <Ionicons name="md-search" size={32} color={mycolor} />
        <MaterialIcons name="account-circle" size={32} color={mycolor} />
      </View>

    </View>
  );
}