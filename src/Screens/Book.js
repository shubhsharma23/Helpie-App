import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions,ScrollView } from 'react-native';
import Cards from '../Components/Card'
import Color from '../Constant/Color';
import Top from '../Components/Header'
import Form from '../Screens/Form'
import Tabbar from '../Components/Tabbar';
const Book = (props) => {


  let value = props.navigation.getParam('obj', 'default value')
  return (
    <View style={{flex:1}}>
      <Top title={value.about} onPress={()=>props.navigation.goBack()} />
         <ScrollView>
           <View>
           <Cards
             about={value.about}
             source={value.imageURL}
             description={value.description}
             star={value.star}
            review={value.review}
           />
           </View>
         </ScrollView>
         <TouchableOpacity
  onPress={()=>props.navigation.navigate('FormPage',{value:value.about})}
>
  <Image source={require('../Assets/images/booknow.png')} style={styles.img} />
</TouchableOpacity>
      <Tabbar nav={props.navigation} />
    </View>
  )
}

export default Book;

const styles = StyleSheet.create({
  body: {
    backgroundColor: Color.third,
  },

  img: {
    width: Dimensions.get('window').width,
    height: 100,

  }

});

{/* <Cards
  about={value.about}
  source={value.imageURL}
  description={value.description}
  star={value.star}
  review={value.review}
/>

<TouchableOpacity
  onPress={()=>props.navigation.navigate('FormPage',{value:value.about})}
>
  <Image source={require('../Assets/images/booknow.png')} style={styles.img} />
</TouchableOpacity> */}