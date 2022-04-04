import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './Scoarboard.style';
import Team1 from './Team1';
import Team2 from './Team2';

function LeaguesPage(){
    return(
        <View>
            <View style={styles.all}>           
            <Text style={styles.leagueText}>Puan Durumu</Text>
            <View style={styles.texts}>
                <Text style={styles.oText}>O</Text>
                <Text style={styles.gText}>G</Text>
                <Text style={styles.bText}>B</Text>
                <Text style={styles.mText}>M</Text>
                <Text style={styles.aText}>A</Text>
                <Text style={styles.pText}>P</Text>
            </View>
        </View>
            <View >
                <Team1/>
                <View style={styles.space}></View>
                <Team2/>
                <View style={styles.space}></View>
                <Team1/>
                <View style={styles.space}></View>
                <Team2/>
                <View style={styles.space}></View>
                <Team1/>
                <View style={styles.space}></View>
                <Team2/>
                <View style={styles.space}></View>
                <Team1/>
                <View style={styles.space}></View>
                <Team2/>
                <View style={styles.space}></View>
                <Team1/>
                <View style={styles.space}></View>
                <Team2/>
                <View style={styles.space}></View>
                <Team1/>
                <View style={styles.space}></View>
                <Team2/>
                <View style={styles.space}></View>
                <Team1/>
                <View style={styles.space}></View>
                <Team2/>
                <View style={styles.space}></View>
                <Team1/>
                <View style={styles.space}></View>
                <Team2/>
                <View style={styles.space}></View>
                <Team1/>
                <View style={styles.space}></View>
                <Team2/>
                <View style={styles.space}></View>
                <Team1/>
                <View style={styles.space}></View>
                <Team2/>
                <View style={styles.space}></View>
            </View>
        </View>
    )
    
}

export default LeaguesPage;