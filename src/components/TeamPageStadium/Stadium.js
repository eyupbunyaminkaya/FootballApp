import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Stadium.style';

function Stadium(){
    return(
        <View>
        <View><Text style={styles.stadiumText}>Stadyum</Text></View>
        <View style={styles.space2}></View>
        
        <View style={styles.align}>
            
        <View style={styles.container}>
            <Image source={require('../../../assets/images/stadium.png')} />
            <Text>Nef Stadyumu</Text>
            <View style={styles.space}></View>
            <Image source={require('../../../assets/images/location.png')} />
            <Text>İstanbul</Text>
            <View style={styles.space}></View>
            <Image source={require('../../../assets/images/fans.png')} />
            <Text>52.223</Text>
            <View style={styles.space}></View>
        </View>
        <View style={styles.space2}></View>
        <View style={styles.space2}></View>
        
        </View>
      
        </View>
    )
}

export default Stadium;