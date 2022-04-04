import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './MatchOfTheWeek.style'

function MatchOfTheWeek(){
    return(
        <View style={styles.image}>
            <Text style={styles.title}>Haftanın Karşılaşması</Text>
            <Image source={require('../../../assets/images/haftanin_karsilasmasii.png')} />
        </View>
    )
}

export default MatchOfTheWeek;