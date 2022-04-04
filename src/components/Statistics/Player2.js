import React from "react";
import {View,Text,Image} from 'react-native';
import styles from './Player.style'


function Player2(){
   return(
        <View style={styles.container}>
            <View>
                <Text style={styles.playerRow}>1.</Text>
            </View>
            <View>
                <Image style={styles.playerImage} source={require('../../../assets/images/visca.png')} />
            </View>
            <View>
                <Text style={styles.playerName}>Edin Visca</Text>
            </View>
            <View>
                <Text style={styles.statistic}>7</Text>
            </View>
        </View>
    )
}

export default Player2;