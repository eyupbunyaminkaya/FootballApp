import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './Team3.style'

function Team3(){
    return(
        <View>

             <Image style={styles.teamLogo} source={require('../../../assets/images/beşiktaş.png')} />
             <View style={styles.texts}>
                <Text style={styles.textDate}>17 Temmuz</Text>
                <Text style={styles.textDay}>Cuma</Text>
                <Text style={styles.loseText}>0-2</Text>
             </View>
             
        </View>
    )
}

export default Team3;