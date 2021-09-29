import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex:1}} >
      {/*<StatusBar style="auto" />*/}
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
      
    </View>
  );
}


