import React from 'react';
import { View, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import { CustomButton } from '../Components/Custom'
import Color from '../Constant/Color';

const Connect = (props) => (
    <View style={{flex:1,backgroundColor:Color.third}}>
        <View style={styles.backContainer}>
          <TouchableOpacity
          onPress={()=>props.navigation.navigate('HomePage')}>
          <Image source={require('../Assets/icons/arrow.png')} style={styles.img} />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
        <View style={styles.imagecontainer}>
            <Image source={require('../Assets/images/logo.png')} />
        </View>

        <View>
            <CustomButton
                name='Login'
                onPress={() => props.navigation.navigate('LoginPage')}

                style1={styles.btn}
                style2={styles.txt}
            />
            <CustomButton
                name='Sign Up'
                onPress={() => props.navigation.navigate('SignUpPage')}

                style1={styles.btn}
                style2={styles.txt}
            />
        </View>

    </View>

        <View style={{flex:1}}></View>
    </View>

);

export default Connect;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
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

