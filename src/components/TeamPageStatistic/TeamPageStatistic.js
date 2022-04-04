import React from "react";
import {View, Text} from 'react-native';
import styles from './TeamPageStatistic.style'
import GoalAsist from "../Statistics/GoalAsist";
import Offensive from "../Statistics/Offensive";
import Deffansive from "../Statistics/Deffansive";


function TeamPageStatistic(){
    return(
        <View>
            <Text style={styles.text}>İstatistikler</Text>
            <View>
                <GoalAsist />
                <Text style={styles.text}>Ofansif</Text>
                <Offensive />
                <Text style={styles.text}>Defansif</Text>
                <Deffansive />
            </View>
        </View>
    )
}

export default TeamPageStatistic;