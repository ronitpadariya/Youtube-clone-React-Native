import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants'



const VideoPlayer = ()=>{
    return(
        <View style={{
            flex:1,
            marginTop:Constant.statusBarHeight}}>
            <Text>VideoPlayer screen</Text>
        </View>
    )
}

export default VideoPlayer


