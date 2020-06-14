import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,Alert} from 'react-native';
import {StaffData} from '../Constant/StaffData'
import { UserBox } from '../Components/Custom';
import Top from '../Components/Header';
import Tabbar from '../Components/Tabbar';

const StaffList=(props)=>{

  let data=StaffData;
    return (
      <View style={{flex:1}}>
           
             <Top title='Staff' onPress={()=>props.navigation.goBack()} />
             <ScrollView>
               <View>
               {data.map(obj =>

               <UserBox 
               onPress1={()=>Alert.alert('Detail',`Hi my name is ${obj.name} and i have ${obj.experience} of experience in ${obj.service}, let me give oppurtunity to serve you`)}
               name={obj.name}
               gender={obj.gender}
               age={obj.age}
               service={obj.service}
               rate={obj.rate}
               exp={obj.experience}
               source={{uri:obj.picture.thumbnail}}
               onPress2={()=>props.navigation.navigate('FormPage',{value:obj.service})}
               />
              )
              }
               </View>

             </ScrollView>
            
     <Tabbar nav={props.navigation} />
      </View>
    );
  }


export default StaffList;

const styles=StyleSheet.create({
   
})
