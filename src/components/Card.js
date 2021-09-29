import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons'


const Card = ()=>{
    return(
        <View style={{marginBottom:10}}>
            <Image 
                source={{uri:"https://media.istockphoto.com/photos/abstract-blue-background-with-grunge-texture-and-white-geometric-and-picture-id1293539824?s=612x612"}}
                style={{
                    width:"100%",
                    height:200
                }}
            />
            <View style={{
                flexDirection:"row",
                margin:5
            }}>
                <MaterialIcons name="account-circle" size={40} color="#212121" />
                <View style={{
                    marginLeft:10
                }}>
                    <Text style={{
                        fontSize:18,
                        width:Dimensions.get("screen").width - 50
                    }} ellipsizeMode="tail" numberOfLines={2} >this is amazing coutse etg esth ryh ryhv r6b ruy er6y6 sety es5ty se5t ry vgt et vr</Text>
                    <Text>this is amazing coutse</Text>
                </View>
            </View>
        </View>
    )
}

export default Card