import React from "react";
import {View, Text,Image} from 'react-native';
import styles from './OffansivePlayerFirst.style'

function OffansivePlayerFirts(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.playerRow}>1.</Text>
            </View>
            <View style={styles.images}>
                <Image style={styles.teamLogo} source={require('../../../assets/images/galatasaray.png')} />
                <Image style={styles.nationalLogo} source={require('../../../assets/images/romanya.png')} />
            </View>
            <View>
                <Text style={styles.playerName}>Moruţan</Text>
            </View>
            <View style={styles.texts}>
                <Text style={styles.text}>9</Text>
                <Text style={styles.text}>810</Text>
                <Text style={styles.text}>11</Text>
                <Text style={styles.text}>7</Text>
                <Text style={styles.text}>4</Text>
                <Text style={styles.text}>9.8</Text>
            </View>
        </View>
    )
}

export default OffansivePlayerFirts;