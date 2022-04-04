import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PlayerOfTheWekk.style'

function PlayerOfTheWeek(){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/images/haftanin_oyuncusu.png')} />
        </View>
    )

}

export default PlayerOfTheWeek;







