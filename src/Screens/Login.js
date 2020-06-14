import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { CustomInput, CustomButton } from '../Components/Custom'
import Color from '../Constant/Color';

const Login = (props) => (
    <View style={{ justifyContent: 'center', flex: 1, backgroundColor:Color.third }}>
        <View style={styles.backContainer}>
          <TouchableOpacity
          onPress={()=>props.navigation.navigate('ConnectPage')}>
          <Image source={require('../Assets/icons/arrow.png')} style={styles.img} />
          </TouchableOpacity>
        </View>
        <View style={styles.imagecontainer}>
            <Image source={require('../Assets/images/logo.png')} />
        </View>
        <View>
            <CustomInput placeholder='Email' style={styles.inputBox} />
            <CustomInput placeholder='Password' style={styles.inputBox} secureTextEntry />
        </View>
        <View>
            <CustomButton
                name='Login'
                onPress={() => props.navigation.navigate('HomePage')}
                style1={styles.btn}
                style2={styles.txt}
            />
        </View>
        <View style={{ alignSelf: 'center' }}>
            <Text style={{ color: '#777' }}>Don't have an account?</Text>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('SignUpPage')}>
                <Text style={styles.signup}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
<View style={{flex:1}}></View>
    </View>

);

export default Login;

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

    imagecontainer: {
        alignSelf: 'center',
        margin: 20,
    },

    signup: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'rgba(0,178,233,1)',
        padding: '3%'

    },
    backContainer:{
        flex:1,
        margin:10,
        backgroundColor:Color.third,
        top:20
    },
    
    img:{
        width:30,
        height:30,

    }
})
