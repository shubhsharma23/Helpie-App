import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, ShadowPropTypesIOS} from 'react-native';
import Color from '../Constant/Color';
import Top from '../Components/Header';
import Tabbar from '../Components/Tabbar';

const About =(props)=>{
    return(
    <View style={{flex:1}}>
        <Top title='About Us' onPress={()=>props.navigation.goBack()}/>
        <ScrollView style={{flex:1}}>
           
           <View style={styles.container}>
               <View style={styles.imgContainer}>
                   <Image source={require('../Assets/images/thanks.png')} style={styles.img}/>
               </View>
   
               <View style={styles.logoContainer}>
               <TouchableOpacity
                    onPress={()=>props.navigation.navigate('HomePage')}>
                   <Image source={require('../Assets/images/logo.png')} style={styles.logo}/>
               </TouchableOpacity>
               </View>
   
               <Text style={styles.heading}>ABOUT US</Text>
               <View style={styles.txtContainer}>
                   <Text style={styles.txt} >Fast paced life prevents you from spending some time to carry out certain tasks like cleaning the house, preparing foods, taking care of our beloveds, washing clothes and vessels, etc. If you want these chores to be completed in a professional way, you can approach Helpie at any time. We are just a call away from you and carry out every task with the sense of utmost responsibility and care. We have a team of well trained professionals whom you can assist you with all sorts of everyday chores </Text>
               </View>
   
               <Text style={styles.heading}>Call Us For Service</Text>
               <View style={styles.txtContainer}>
                   <Text style={styles.txt} >We are avaliable for 24*7 to help you!!</Text>
                   <Text style={styles.txt} >call us on 7830*****</Text>
               </View>
   
               {/* <Text style={styles.heading}>Developer & Designer</Text>
               <View style={styles.txtContainer}>
                   <Text style={styles.txt} >Shubham Sharma</Text>
               </View> */}
   
               <View style={styles.imgContainer}>
                   <Image source={require('../Assets/images/slogan.png')} style={styles.img2}/>
               </View>
   
           </View>
       </ScrollView>
       <Tabbar nav={props.navigation} />
    </View>
    )
}

export default About;

const styles= StyleSheet.create({
     container:{
         backgroundColor:Color.third,
     },

     imgContainer:{
        width:Dimensions.get('window').width,
        
     },

     img:{
        width:'110%',
        height:300,
        alignSelf:'center',
        resizeMode: 'stretch',
     },
     img2:{
        width:'99%',
        height:150,
        alignSelf:'center',
        resizeMode: 'stretch',
     },

    heading:{
        alignSelf:'center',
        fontSize:40,
        color:'grey',
        fontWeight:'bold',
        
    },
    
    txt:{
        margin:10,
        fontSize:18,
        color:'black',
        textAlign:'center'
    },

    logo:{
        width:50,
        height:50,
    },

    logoContainer:{
        position:'absolute',
        padding:20
    }
})