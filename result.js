import { TouchableOpacity ,Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../components/title';

const Result = ({navigation,route}) => {
  const {score} = route.params
  const resultImage= score>50?"https://cdn.iconscout.com/icon/premium/png-64-thumb/well-done-3472037-2906791.png":"https://cdn.iconscout.com/icon/premium/png-64-thumb/loser-7-604364.png"
  console.log(score)
  return (
    <View style={styles.container}>
        <Title titleText='RESULTS'/>
      <View>
          <Text style={styles.topText}>Your Score: {score}</Text>
      </View>
      <View style={styles.bannerContainer}>
      <Image source={{
              uri:resultImage,
          }}
          style={styles.banner}
          resizeMode ="contain"
           />
      </View>
      <View>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
              <Text style={styles.buttonText}>Back To Home</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result;

const styles = StyleSheet.create({
    
    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50
    },
    container:{
      marginTop:20,
      paddingTop: 40,
      paddingHorizontal: 20,
      height:"100%",
    },
    topText:{
        fontSize:50,
        fontWeight:'500',
        textAlign:'center',
        marginTop:50,
        marginBottom:20,

    },
    button:{
        backgroundColor:  '#1A759F',
        padding:12,
        borderRadius:16,
        marginTop:100,
        paddingHorizontal:16,

    },
    buttonText:{
       fontSize:18,
       fontWeight:'600',
       color: 'white',
       textAlign: 'center',

    },
});