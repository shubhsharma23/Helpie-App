import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Color from '../Constant/Color';
import {ClickableIcon} from '../Components/Custom'
import data from '../Constant/data'


const Divisions = (props) => {


  return (
    <View style={styles.block}>
      {data.map(obj =>
                    <ClickableIcon
                    source={require('../Assets/serviceIcons/babysitter.png')} 
                    onPress={()=>props.navigation.navigate('BookPage',{obj:data})}
                    title={obj.about} 
                    key={obj.key} 
                    />
                )
                }
    </View> 
  )
}
export default Divisions;


const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    backgroundColor: Color.third,
    width: '100%',
    height: null,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
});
