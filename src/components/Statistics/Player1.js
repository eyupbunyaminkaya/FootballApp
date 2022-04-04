import React from "react";
import {View,Text,Image} from 'react-native';
import styles from './FirstPlayer.style'

function Player1(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.playerRow}>1.</Text>
            </View>
            <View>
                <Image style={styles.playerImage} source={require('../../../assets/images/morutan.png')} />
            </View>
            <View>
                <Text style={styles.playerName}>Olimpiu Moruţan</Text>
            </View>
            <View>
                <Text style={styles.statistic}>10</Text>
            </View>
        </View>
    )
}

export default Player1;