import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './LineUpOfTheWeek.style'

function LineUpOfTheWeek(){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/images/lineups.png')} />            
        </View>
    )

}

export default LineUpOfTheWeek;







