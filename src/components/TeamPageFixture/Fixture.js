import React from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
import styles from './Fixture.style'
import Team1 from './Team1';
import Team2 from './Team2';
import Team3 from './Team3';
import Team4 from './Team4';

function Fixture(){
    return(
        <View style={styles.container}>
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
            <Team1 />
            <View style={styles.space}></View>
            <Team2 />
            <View style={styles.space}></View>
            <Team3 />
            <View style={styles.space}></View>
            <Team4 />
            <View style={styles.space}></View>
            <Team4 />
            <View style={styles.space}></View>
            <Team4 />
            <View style={styles.space}></View>
            <Team4 />
            <View style={styles.space}></View>
            <Team4 />
            <View style={styles.space}></View>
            <Team4 />
            <View style={styles.space}></View>
            <Team4 />
            </ScrollView>
            
        </View>
    )
}

export default Fixture;