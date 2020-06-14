import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView ,TouchableOpacity, Dimensions} from 'react-native';
import Icards from '../Components/Icards'
import Divisions from '../Components/Divisions'
import Color from '../Constant/Color';
import {SearchBar, ClickableIcon} from '../Components/Custom';
import data from '../Constant/data'
import Tabbar from '../Components/Tabbar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
     <View style={{flex:1}}>
        <View style={styles.body}>
        <View style={styles.head}>
            <Image source={require('../Assets/images/slogan.png')} style={styles.img} />
        </View>

        <View style={styles.imgContainer}> 
            
            <TouchableOpacity
             onPress={()=>this.props.navigation.toggleDrawer()} >
            <Image source={require('../Assets/icons/menu.png')} style={styles.img1} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('ConnectPage')} >
            <Image source={require('../Assets/icons/member.png')} style={styles.img2} />
            </TouchableOpacity>
        </View>
           
        <SearchBar />
        <View style={styles.block}>
            {data.map(obj =>
                    <ClickableIcon
                    source={obj.iconURL} 
                    onPress={()=>this.props.navigation.navigate('BookPage',{obj:obj})}
                    title={obj.about} 
                    key={obj.key} 
                    />
                )
                }
    </View>
        <Icards />
      </View>
        <Tabbar nav={this.props.navigation} />
     </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:Color.primary
  },
  head: {
    width: '100%',
    height: 150,
    backgroundColor:'#00CCCD',
    alignItems: 'center',
    justifyContent: 'center'
},
img:{
    width:200,
    height:100,
    marginTop:20
},
block: {
  flexDirection: 'row',
  backgroundColor: Color.third,
  width: '100%',
  height: null,
  flexWrap: 'wrap',
  justifyContent: 'space-around',
},

imgContainer:{
  position:'absolute',
  flexDirection:'row',
  width:'99%',
  alignSelf:'center',
  justifyContent: 'space-between',
},

img1:{
  width:35,
  height:35,
  alignSelf:'flex-start'
  
},
img2:{
  width:35,
  height:35,
  alignSelf:'flex-end'

  
},

});
