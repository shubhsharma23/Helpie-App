import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

const Head = (props) => {
    
    return (
        <View style={styles.head}>
            <Image source={require('../Assets/images/LOGO.png')} style={styles.img} />
        </View>
    )
}

export default Head;

const styles = StyleSheet.create({
    head: {
        width: '100%',
        height: 180,
        backgroundColor:'#00CCCD',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        width:200,
        height:100,
        marginTop:20
    }
});
