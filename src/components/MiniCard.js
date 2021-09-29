import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons'

const MiniCard = ()=>{
    return(
        <View style={{flexDirection:"row", margin:10, marginBottom:0}}>
            <Image 
                source={{uri:"https://media.istockphoto.com/photos/abstract-blue-background-with-grunge-texture-and-white-geometric-and-picture-id1293539824?s=612x612"}}
                style={{
                    width:"45%",
                    height:100
                }}
            />
            <View style={{
                paddingLeft:7
            }}>
                <Text style={{
                    fontSize:16,
                    width:Dimensions.get("screen").width/2
                }}
                ellipsizeMode="tail"
                numberOfLines={3}
                >This is amazing caurse sdrguh eregvhir awefcio awerjio aweri wef awerij waerij awefq3cr wecfjifwd 3rjiira weriil</Text>

                <Text style={{
                    fontSize:12
                }}>coders never quit</Text>

            </View>
        </View>
    )
}

export default MiniCard