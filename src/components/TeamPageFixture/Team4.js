import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './Team4.style'

function Team1(){
    return(
        <View>
             <Image style={styles.teamLogo} source={require('../../../assets/images/galatasaray.png')} />
             <View style={styles.texts}>
                <Text style={styles.textDate}>17 Temmuz</Text>
                <Text style={styles.textDay}>Cuma</Text>
                <Text style={styles.timeText}>20:00</Text>
             </View>
             
        </View>
    )
}

export default Team1;