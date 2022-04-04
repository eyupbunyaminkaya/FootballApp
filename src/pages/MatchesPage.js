import React from 'react';
import {View, Text, ScrollView, style } from 'react-native';
import LiveMatches from '../components/LiveMatches/LiveMatches';
import styles from './MatchesPage.style'

function LeaguesPage(){
    return(
        <ScrollView>
        <View style={styles.live}>
            <Text style={styles.liveTitle}>Canlı Karşılaşmalar</Text>
        </View>
        <View>
        <LiveMatches />
        <LiveMatches />
        <LiveMatches />
        <LiveMatches />
        <LiveMatches />
        <LiveMatches />
        <LiveMatches />
        <LiveMatches />
        <LiveMatches />
        <LiveMatches />
        <LiveMatches />
        </View>
        </ScrollView>
    );
}

export default LeaguesPage;