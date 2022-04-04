import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './LiveMatches.style'
import LiveMatch from '../LiveMatch/LiveMatch'


function LiveMatches(){
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.arkaCizgi}>
                    <Image style={styles.leagueImage} source={require('../../../assets/images/black_premierleague.png')} />
                    <Text>Premier League</Text>
                </View>
                <View style={styles.canliKarsilasma}>
                    <LiveMatch/>
                    <LiveMatch/>
                    <LiveMatch/>
                    <LiveMatch/>
                </View>
                </View>
            
        </View>
    )

}

export default LiveMatches;