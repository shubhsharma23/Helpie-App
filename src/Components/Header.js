import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Color from '../Constant/Color';

const Top=(props)=>{
    return (
        <View style={styles.body}>
           <View style={styles.container} >
               <View style={styles.imgContainer} >
                   <TouchableOpacity onPress={props.onPress}>
                       <Image source={require('../Assets/icons/arrow.png')}  style={styles.img} />
                   </TouchableOpacity>
               </View>

               <View style={styles.txtContainer} >
               <Text style={styles.txt} >{props.title}</Text>
               </View>

               <View style={styles.imgContainer} >
                  <TouchableOpacity >
                       <Image source={require('../Assets/icons/menu.png')}  style={styles.img} />
                  </TouchableOpacity>
               </View>

           </View>
        </View>

);
}

export default Top;

const styles = StyleSheet.create({
    body:{
        backgroundColor:'#018786',
    },

    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        margin:8
    },

    img:{
      height:30,
      width:30,
    },

    txt:{
        fontSize:24,
        fontWeight:'bold',
        
    }
  
  });

