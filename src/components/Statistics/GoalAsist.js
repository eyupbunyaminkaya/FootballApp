import React from "react";
import {View, Text} from 'react-native';
import styles from './GoalAsist.style'
import Player1 from "./Player1";
import Player2 from "./Player2";

function GoalAsist(){
    return(
        <View style={styles.container}>
            <View style={styles.line}>
                <View style={styles.background}><Text style={styles.textred}>Gol Krallığı</Text></View>
                <View style={styles.space}></View>
                <View  style={styles.background}><Text style={styles.text}>Asist  Krallığı</Text></View>
            </View>

            <View >
                <View style={styles.space}></View>
                <Player1 />
                <View style={styles.space}></View>
                <Player2 />
                <View style={styles.space}></View>
                <Player2 />
                <View style={styles.space}></View>
                <Player2 />
                <View style={styles.space}></View>
                <Player2 />
            </View>
        </View>
    )
}

export default GoalAsist;