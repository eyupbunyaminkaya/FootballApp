import React from "react";
import {View, Text} from 'react-native';
import styles from './Statistic.style'
import GoalAsist from "./GoalAsist";
import Offensive from "./Offensive";
import Deffansive from "./Deffansive";


function Statistic(){
    return(
        <View>
            <Text style={styles.text}>İstatistikler</Text>
            <View>
                <GoalAsist />
                <Text style={styles.text}>Ofansif</Text>
                <Offensive />
                <Text style={styles.text}>Defansif</Text>
                <Deffansive />
                <Text style={styles.text}>Kaleciler</Text>
                <Deffansive />
            </View>
        </View>
    )
}

export default Statistic;