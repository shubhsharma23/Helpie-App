import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const Icards = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} pagingEnabled={true} contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false} >
                <Image source={require('../Assets/images/1.jpg')} style={styles.jpg} />
                <Image source={require('../Assets/images/2.jpg')} style={styles.jpg} />
                <Image source={require('../Assets/images/3.jpg')} style={styles.jpg} />
                <Image source={require('../Assets/images/4.jpg')} style={styles.jpg} />
                <Image source={require('../Assets/images/5.jpg')} style={styles.jpg} />
                <Image source={require('../Assets/images/6.jpg')} style={styles.jpg} />
                <Image source={require('../Assets/images/7.jpg')} style={styles.jpg} />
                <Image source={require('../Assets/images/8.jpg')} style={styles.jpg} />
            </ScrollView>
        </View>
    )
}

export default Icards;

const styles = StyleSheet.create({
    scrollContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    jpg: {
        width: 340,
        height: 200,
        borderRadius: 30,
        margin: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
        aspectRatio:1.5
    },
});