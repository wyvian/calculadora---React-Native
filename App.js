import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [screenValue, setScreenValue] = useState('0');
  const [historyValue, setHistoryValue] = useState('');
  
  const pressButtonOperation = (button) =>{
    if (!['X', '+', '-', '/'].includes(screenValue.charAt(screenValue.length-1)) && screenValue.length < 8){
      setScreenValue(screenValue + button)
    }
  }

  const pressButton = (button) =>{
    if (button == 'C'){
      setHistoryValue('')
      setScreenValue('0')
    }
    else if (button == '=' ){
      setHistoryValue(screenValue)
      setScreenValue(eval(screenValue.replace('X', '*')).toString())
    }
    else if (screenValue.length < 7){
      if (screenValue == '0'){
        setScreenValue(button)
      }
      else{
        setScreenValue(screenValue + button)
      }
    }
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.screenTextView}>
        <Text style={[styles.screenText, {fontSize: 15}]}>{historyValue}</Text>
      </View>

      <View styles = {styles.screenTextView}> 
        <Text style ={styles.screenText}>{screenValue}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style = { 
            {width: 365, 
            height: 50, 
            borderRadius: 20,
            marginBottom: 10,
            backgroundColor : 'white',
            alignItems: 'center',
            justifyContent: 'center'}} 
          onPress = {() => {pressButton('C')}}>
          <Text style = {styles.calcButtonText}>C</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style = {styles.calcButton} onPress ={() => {pressButton('7')}}>  
          <Text style = {styles.calcButtonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.calcButton} onPress ={() => {pressButton('8')}}>  
          <Text style = {styles.calcButtonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.calcButton} onPress ={() => {pressButton('9')}}>  
          <Text style = {styles.calcButtonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.calcButton, {backgroundColor:'pink'}]} onPress ={() => {pressButtonOperation('X')}}>  
          <Text style = {styles.calcButtonText}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style = {styles.calcButton} onPress ={() => {pressButton('4')}}>  
          <Text style = {styles.calcButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.calcButton} onPress ={() => {pressButton('5')}}>  
          <Text style = {styles.calcButtonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.calcButton} onPress ={() => {pressButton('6')}}>  
          <Text style = {styles.calcButtonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.calcButton, {backgroundColor:'pink'}]} onPress ={() => {pressButtonOperation('-')}}>  
          <Text style = {[styles.calcButtonText,{fontSize:30}]}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style = {styles.calcButton} onPress ={() => {pressButton('1')}}>  
          <Text style = {styles.calcButtonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.calcButton} onPress ={() => {pressButton('2')}}>  
          <Text style = {styles.calcButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.calcButton} onPress ={() => {pressButton('3')}}>  
          <Text style = {styles.calcButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.calcButton, {backgroundColor:'pink'}]} onPress ={() => {pressButtonOperation('+')}}>  
        <Text style = {[styles.calcButtonText,{fontSize:30}]}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style = {styles.calcButton} onPress ={() => {pressButton('0')}}>    
          <Text style = {styles.calcButtonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.calcButton} onPress ={() => {pressButton('.')}}>    
          <Text style = {styles.calcButtonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.calcButton, {backgroundColor:'pink'}]} onPress ={() => {pressButton('/')}}>  
          <Text style = {styles.calcButtonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.calcButton, {backgroundColor:'pink'}]} onPress = {() => {pressButton('=')}}> 
          <Text style = {styles.calcButtonText}>=</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    paddingTop: 50,
  },
  buttonsContainer: {
    flexDirection : 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  calcButton: {
    backgroundColor : 'white',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  calcButtonText: {
    color : 'gray',
    fontSize: 24,
    fontWeight: 'bold'
  },
  screenTextView:{
    alignSelf : 'flex-end',
    marginRight : 10
  },
  screenText:{
    fontSize : 80,
    color : 'white'
  }

});
