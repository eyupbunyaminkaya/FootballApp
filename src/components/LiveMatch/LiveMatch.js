import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './LiveMatch.style'

function LiveMatch(){
    return(
        <View>
            <View style={styles.container}>
                <Text>Galatasaray</Text>
                <Image style={styles.logo} source={require('../../../assets/images/galatasaray.png')} />
                <View style={styles.main}>
                    <Text style={styles.skor}>0-0</Text>
                    <Text style={styles.dakika}>32'</Text>
                </View>
                <Image style={styles.logo} source={require('../../../assets/images/beşiktaş.png')} />
                <Text>Beşiktaş</Text>
                
            </View>
        </View>
    )
}

export default LiveMatch;