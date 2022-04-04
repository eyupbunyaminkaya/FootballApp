import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import styles from './HomePage.style'
import MatchOfTheWeek from '../components/MatchOfTheWeek/MatchOfTheWeek';
import LiveMatches from '../components/LiveMatches/LiveMatches';
import LineUpOfTheWeek from '../components/LineUpOfTheWeek/LineUpOfTheWeek';
import PlayerOfTheWeek from '../components/PlayerOfTheWeek/PlayerOfTheWeek';


function HomePage() {
    return (
        <ScrollView >
            <View style={styles.container}>
                <MatchOfTheWeek style={styles.MatchOfTheWeek} />
                <View style={styles.liveMatches}>
                    <Text style={styles.liveTitle}>Canlı Karşılaşmalar</Text>
                    <Text>Benjamin</Text>

                    <LiveMatches />
                    <LiveMatches />
                    <LiveMatches />
                    <LiveMatches />
                </View>
                <View style={styles.LineUpOfTheWeek}>
                    <Text style={styles.lineUpTitle}>Haftanın Kadrosu</Text>
                    <LineUpOfTheWeek />
                </View>
                <View style={styles.PlayerOfTheWeek}>
                    <Text style={styles.playerOfTheWeekTitle}>Haftanın Oyuncusu</Text>
                    <PlayerOfTheWeek />
                </View>
            </View>
        </ScrollView>
    )
}


export default HomePage;