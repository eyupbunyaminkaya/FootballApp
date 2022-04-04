import React from 'react'
import {View, Text,Image } from 'react-native';
import styles from './Team.style'

function LeaguesPage(){
    return(
        <View style={styles.container}>
            <View style={styles.all}>
                <View style={styles.background}></View>
                <Image style={styles.teamLogo} source={require('../../../assets/images/galatasaray.png')} />
                <View>
                <Text style={styles.ranking}>1.</Text>
                </View>
                <View>
                    <Text style={styles.teamName}>Galatasaray</Text>
                </View>
            </View>
            <View style={styles.texts}>
                <Text style={styles.oText}>10</Text>
                <Text style={styles.gText}>10</Text>
                <Text style={styles.bText}>45</Text>
                <Text style={styles.mText}>20</Text>
                <Text style={styles.aText}>25</Text>
                <Text style={styles.pointText}>45</Text>
            </View>
        </View>
    )
}

export default LeaguesPage;