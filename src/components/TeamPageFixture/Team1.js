import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './Team1.style'

function Team1(){
    return(
        <View>
             <Image style={styles.teamLogo} source={require('../../../assets/images/beşiktaş.png')} />
             <View style={styles.texts}>
                <Text style={styles.textDate}>17 Temmuz</Text>
                <Text style={styles.textDay}>Cuma</Text>
                <Text style={styles.winText}>2-0</Text>
             </View>
             
        </View>
    )
}

export default Team1;