import React from 'react';
import { View, Text } from 'native-base';
import { ImageBackground, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
export default function Home({ navigation }) {


    return (
        <ImageBackground
            source={require('./img/4.jpg')}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <LinearGradient
                colors={['rgba(255,255,255,0)', '#000000']}
                style={styles.linearGradient}
            />
           <View style={styles.container}>
      <View style={styles.rectRow}>
        <View style={styles.rect}></View>
        <View style={styles.rect1}></View>
      </View>
      <View style={styles.rect2Row}>
        <View style={styles.rect2}></View>
        <View style={styles.rect3}></View>
      </View>
    </View>

        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
      width: 319,
      height: 238
    },
    rect: {
      width: 154,
      height: 104,
      backgroundColor: "rgba(230,230, 230,1)",
      opacity: 0.78,
      borderRadius: 36
    },
    rect1: {
      width: 154,
      height: 104,
      backgroundColor: "rgba(230,230, 230,1)",
      opacity: 0.78,
      borderRadius: 36,
      marginLeft: 11
    },
    rectRow: {
      height: 104,
      flexDirection: "row"
    },
    rect2: {
      width: 154,
      height: 104,
      backgroundColor: "rgba(230,230, 230,1)",
      opacity: 0.78,
      borderRadius: 36
    },
    rect3: {
      width: 154,
      height: 104,
      backgroundColor: "rgba(230,230, 230,1)",
      opacity: 0.78,
      borderRadius: 36,
      marginLeft: 11
    },
    rect2Row: {
      height: 104,
      flexDirection: "row",
      marginTop: 30
    }
  });