import React from "react";
import {View,Text, Image} from 'react-native';
import styles from './TeamPageHeader.style'

function TeamPageHeader(){
    return(
        <View style={styles.container}>
        <View style={styles.all}>
           <Image style={styles.nationalLogo} source={require('../../../assets/images/turkey.png')} />
           <View style={styles.team}><Image style={styles.teamLogo} source={require('../../../assets/images/galatasaray.png')} /></View>
        <Image style={styles.leagueLogo} source={require('../../../assets/images/black_bundesliga.png')} />
        </View>
        </View>
    )
}

export default TeamPageHeader;