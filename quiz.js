import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
const shuffleArray=(a)=> {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const [ques,setQues]= useState(0);
    const [options, setOptions] = useState([]);
    const [score,setScore] = useState(0);
    const [isLoading,setIsloading]= useState(false);

    const getQuiz=async()=>{
        setIsloading(true);
        const url ='https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res=await fetch(url);
        const data = await res.json();
        //console.log(data.results);
        setQuestions(data.results);//get questions
        setOptions(generateOptionsAndShuffle(data.results[0]))//get options
        setIsloading(false);
    };
    useEffect(()=>{
        getQuiz();
    },[]);
    const handleNextPress=()=>{
        setQues(ques+1)
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
    }
    const generateOptionsAndShuffle=(_question)=>{
        const options= [..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options)

        return options
    }
    const selectOption=(_option)=>{
    if(ques!==9){
        if(_option === questions[ques].correct_answer){
            setScore(score+10) 
        }
        setQues(ques+1)
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
    }
    
    if(ques===9){
       
        handleShowResult()
    }
        //console.log(score) 
        //console.log(_option===questions[ques].correct_answer)
    }

    const handleShowResult=()=>{
        navigation.navigate('Result',{
            
            score: score
        })
    }
  return (

    <View style={styles.container}>
     {isLoading ?<View style={{display:'flex',justifyContent:'center',alignItems:'center',height:100}}>
         <Text style={{fontSize:32,fontWeight:'700'}}>LOADING...</Text>
         </View>:questions&&(
     <View style={styles.parent}>
      <View style={styles.top}>
          <Text style={styles.question}>Q. {decodeURIComponent(questions[ques].question)}</Text>
      </View>
      <View style={styles.options}>
          <TouchableOpacity style={styles.optionButton} onPress={()=>selectOption(options[0])}>
             <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
          </TouchableOpacity  >
          <TouchableOpacity style={styles.optionButton} onPress={()=>selectOption(options[1])}>
             <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={()=>selectOption(options[2])}>
             <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={()=>selectOption(options[3])}>
             <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.bottom}>

{ques!==9 &&
          <TouchableOpacity style={styles.button} onPress={handleNextPress}>
              <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>}
{ques ===9 &&
          <TouchableOpacity style={styles.button} onPress={handleShowResult}>
              <Text style={styles.buttonText}>LAST QUESTION</Text>
          </TouchableOpacity>}
          {/* <TouchableOpacity onPress={()=>navigation.navigate("Result")}>
              <Text>END</Text>
          </TouchableOpacity> */}
      </View>
    </View>
     )} 
    </View>
  )
}

export default Quiz;

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height:"100%",
    },
    top:{

        marginVertical: 16,

    },
    options:{
        marginVertical: 16,
        flex: 1,
    },
    bottom:{
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 12,
        paddingVertical:16,
        //justifyContent:"space-between",
        flexDirection: 'row',
    },
    button:{
        width:'100%',
        backgroundColor:  '#1A759F',
        padding:12,
        borderRadius:16,
        marginBottom: 30, 
        paddingHorizontal:16,
        
     },
     buttonText:{
       fontSize:18,
       fontWeight:'600',
       color: 'white',
       textAlign: 'center',
     },
     question:{
         fontSize: 28,
         fontWeight:'600',
     },
     option:{
         fontSize:18,
         fontWeight:'500',
         color: 'white'
     },
     optionButton:{
         paddingVertical:12,
         marginVertical:6,
         backgroundColor: '#34A0A4',
         paddingHorizontal:12,
         borderRadius:16,

     },
     parent:{
         height:"100%"
     }


});