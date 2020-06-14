import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { CustomInput, CustomButton, SearchBar } from '../Components/Custom'
import Color from '../Constant/Color';

const SignUp = (props) => (
    <ScrollView style={{backgroundColor:Color.third,flex:1}}>
      <View>
      <View style={styles.imagecontainer}>
         <View style={styles.backContainer} >
         <TouchableOpacity
          onPress={()=>props.navigation.navigate('ConnectPage')}>
          <Image source={require('../Assets/icons/arrow.png')} style={styles.img} />
          </TouchableOpacity>
         </View>
            <Image source={require('../Assets/images/logo.png')} style={{alignSelf:'center'}} />
        </View>


        <View >
            <CustomInput placeholder='Full Name' style={styles.inputBox} />
            <CustomInput placeholder='Email' style={styles.inputBox} />
            <CustomInput placeholder='phone No.' style={styles.inputBox} keyboardType='numeric' />
            <CustomInput placeholder='Password' style={styles.inputBox} secureTextEntry />
            <CustomInput placeholder='Re-Type password' style={styles.inputBox} secureTextEntry />
            <CustomInput placeholder='address' style={styles.inputBox} />
            <CustomInput placeholder='Pincode' style={styles.inputBox} keyboardType='numeric' />
        </View>

        <View>
            <CustomButton
                name='SignUp'
                onPress={() => props.navigation.navigate('LoginPage')}
                style1={styles.btn}
                style2={styles.txt}
            />
        </View>
        <View
            style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ fontSize: 18 }}>Already have an account?</Text>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('LoginPage')}>
                <Text style={{ fontSize: 18, color: 'rgba(0,178,233,1)' }}> SIGN IN</Text>
            </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
);

export default SignUp;

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