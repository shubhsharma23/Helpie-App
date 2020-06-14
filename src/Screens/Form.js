import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { CustomInput, CustomButton, SearchBar } from '../Components/Custom'
import Tabbar from '../Components/Tabbar';

const Form = (props) => {
    let val = props.navigation.getParam('value', '')
    
    
   return(
    <View style={{flex:1}}>
        <ScrollView >
        <View style={styles.imagecontainer}>
         <View style={styles.backContainer} >
         <TouchableOpacity
          onPress={()=>props.navigation.navigate('BookPage')}>
          <Image source={require('../Assets/icons/arrow.png')} style={styles.img} />
          </TouchableOpacity>
         </View>
            <Image source={require('../Assets/images/logo.png')} style={{alignSelf:'center'}} />
        </View>
        <View >
            <CustomInput placeholder='Full Name' style={styles.inputBox} />
            <CustomInput placeholder='Service Name' style={styles.inputBox} value={val} />
            <CustomInput placeholder='Full Time / Part Time' style={styles.inputBox} secureTextEntry />
            <CustomInput placeholder='phone No.' style={styles.inputBox} keyboardType='numeric' />
            <CustomInput placeholder='address with accurate house no.' style={styles.inputBox} />
            <CustomInput placeholder='Pincode' style={styles.inputBox} keyboardType='numeric' />
        </View>

        <View>
            <CustomButton
                name='Book Now'
                onPress={()=>Alert.alert('THANK YOU' , 'you will get a call from our service provider',[{ text: 'next' , onPress: () => {props.navigation.navigate('AboutPage')} }])}
                style1={styles.btn}
                style2={styles.txt}
            />
        </View>
        


    </ScrollView>
    <Tabbar nav={props.navigation} />
    </View>
)}

export default Form;

const styles = StyleSheet.create({

    inputBox: {
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 70,
        borderColor: 'grey',
        borderWidth: 1,
        paddingLeft: 20,
        fontSize: 20,
        padding: 7,
        margin: 10,
        elevation: 8

    },
    imagecontainer: {
        
        margin: 20,
    },

    btn: {

        width: '70%',
        alignSelf: 'center',
        padding: ("1%"),
        borderRadius: 30,
        borderColor: 'rgba(0,178,233,1)',
        borderWidth: 1,
        margin: 10,
        elevation: 8,
        backgroundColor: 'rgba(0,178,233,1)',

    },

    txt: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: '5%',
        elevation: 11
    },
    backContainer:{
        position:'absolute',
        top:20
    },
    
    img:{
        width:30,
        height:30,
        alignSelf:'flex-start'

    }


})