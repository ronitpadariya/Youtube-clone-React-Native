import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Animated,
} from "react-native";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Card from "../components/Card";

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
// const HEADER_MAX_HEIGHT = 45;
// const HEADER_MIN_HEIGHT = 0;

export default function HomeScreen({ navigation }) {
  // state = {
  //   animatedValue: new Animated.Value(0),
  // };

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });

  const cardData = useSelector((state) => {
    return state.cardData;
  });

  // const height = state.animatedValue.interpolate({
  //   inputRange: [0, HEADER_MAX_HEIGHT],
  //   outputRange: [0, -HEADER_MIN_HEIGHT],
  //   extrapolateRight: "clamp",
  // });

  // const onScrollEvent = Animated.event(
  //   [{ nativeEvent: { contentOffset: { y: state.animatedValue } } }],
  //   { useNativeDriver: true } // <-- Add this
  // );

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          transform: [{ translateY: translateY }],
          elevation: 4,
          zIndex: 100,
        }}
      >
        <Header />
      </Animated.View>

      <FlatList
        data={cardData}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
        scrollEventThrottle={16}
        // onScroll={onScrollEvent}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      />
    </View>
  );
}
