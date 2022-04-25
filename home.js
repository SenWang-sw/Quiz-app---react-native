import {Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText='CS641' />
      <Text style={styles.tagStyle}>Let You Know More Everyday</Text>
      <View style={styles.bannerContainer}>
          <Image source={{
              uri:'https://cdn.iconscout.com/icon/premium/png-64-thumb/quiz-test-3788670-3164505.png'
          }}
          style={styles.banner}
          resizeMode ="contain"
           />  
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Category")} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({

    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginLeft:90,
        
    },
    container:{
      paddingTop: 60,
      paddingHorizontal: 100,
      height:"100%",
    },
    button:{
       width:'100%',
       backgroundColor:  '#1A759F',
       padding:20,
       borderRadius:16,
       marginBottom: 100, 
       
    },
    buttonText:{
      fontSize:24,
      fontWeight:'600',
      color: 'white',
      textAlign: 'center',
    },
    tagStyle:{
      fontSize:30,
      fontWeight:'600',
      textAlign: 'center',
      color:'green',
      fontWeight: "bold"
    }
});