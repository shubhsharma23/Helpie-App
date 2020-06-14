import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Tabbar = (props) => {

  return (
    <View style={styles.tabbar}>
      <View style={styles.tab}>
        <View style={styles.bar}>

          <TouchableOpacity
            onPress={() => props.nav.navigate('HomePage')}>
            <Image source={require('../Assets/icons/home.png')} style={styles.img} />
            <Text style={styles.txt} >Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.nav.navigate('ServiceList')}>
            <Image source={require('../Assets/icons/list.png')} style={styles.img} />
            <Text style={styles.txt} >list</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.nav.navigate('StaffList')}>
            <Image source={require('../Assets/icons/staff.png')} style={styles.img} />
            <Text style={styles.txt} >staff</Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => props.nav.navigate('AboutPage')}>
            <Image source={require('../Assets/icons/logo.png')} style={styles.img} />
            <Text style={styles.txt} >About</Text>
          </TouchableOpacity>
        </View >
      </View>
    </View>
  )

}
export default Tabbar;

const styles = StyleSheet.create({
  tabbar: {
    justifyContent:'flex-end',
  },
  tab: {
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation:10,
  },
  bar: {
    width: '95%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    margin:5
  },
  img: {
    width: 30,
    height: 30,
    alignSelf:'center'
  },
  txt:{
    alignSelf:'center',
    
  }
})