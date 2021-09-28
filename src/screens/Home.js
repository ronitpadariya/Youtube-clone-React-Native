import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'

export default function HomeScreen() {
  return (
    <View >
      <StatusBar style="auto" />
      <Header />
    </View>
  );
}


