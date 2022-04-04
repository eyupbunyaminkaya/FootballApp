import React from 'react'
import {View, Text, ScrollView} from 'react-native';
import styles from './LeaguesPage.style'
import Scoreboard from '../components/Scoreboard/Scorboard'
import Statistic from '../components/Statistics/Statistic';
import LineUpOfTheWeek from '../components/LineUpOfTheWeek/LineUpOfTheWeek';
import PlayerOfTheWeek from '../components/PlayerOfTheWeek/PlayerOfTheWeek';

function LeaguesPage(){
    return(
        <ScrollView>
            <View>
                <Scoreboard />
            </View>
            <View>
                <Statistic />
            </View>
            <View>
                <Text style={styles.text}>Haftanın Kadrosu</Text>
                <LineUpOfTheWeek />
            </View>
            <View>
                <Text style={styles.text}>Haftanın Oyuncusu</Text>
                <PlayerOfTheWeek />
            </View>   
        </ScrollView>
    )
    
}

export default LeaguesPage;