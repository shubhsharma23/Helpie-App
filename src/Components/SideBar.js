
import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, Image } from 'react-native'
import Color from '../Constant/Color';

export default class SideMenu extends Component {

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <View style={styles.Conainer}>
            <View style={styles.body}>
            <View style={styles.imgContainer}>
                <Image source={require('../Assets/images/logo.png')} style={styles.img} />
                <Text style={styles.txt}>Helpie</Text>
            </View>
            <View style={styles.screenContainer}>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Home') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Home') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('HomePage')}>Home</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Services') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Services') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('ServiceList')}>Services</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Staff') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Staff') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('StaffList')}>Staff</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Connect') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Connect') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('ConnectPage')}>Connect</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='About') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='About') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('AboutPage')}>About Us</Text>
                </View>
            </View>
        </View>
        <View>
            <Text style={styles.bottomText}>We care of you</Text>
        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    Conainer:{
      flex:1,
      backgroundColor:Color.fourth,
      justifyContent:'space-between'
    },
    body: {
        alignItems: 'center',
        
    },
    imgContainer: {
        margin:20,
        flexDirection:'row',
        top:20,
        backgroundColor:Color.third,
        width:'100%',
        height:50,
        justifyContent:'center',
        
    },
    img:{
        width:80,
        height:80,
        alignSelf:'center',
    },
    txt:{
       fontSize:40,
       fontWeight:'normal',
       color:'grey',
       margin:3
    },
    headerText: {
        color: 'grey',
    },
    screenContainer: { 
        width: '100%',
        margin:20
    },
    screenStyle: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderBottomColor:'grey',
        // borderBottomWidth:1,
        justifyContent:'center',
        marginTop:20,
        elevation:1

    },
    screenTextStyle:{
        fontSize: 25,
        textAlign: 'center',
        fontStyle:'italic'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff'
    },
    activeBackgroundColor: {
        backgroundColor: 'grey'
    },
    bottomText:{
        alignSelf:'center',
        fontSize:25,
        color:'grey'
    }
});