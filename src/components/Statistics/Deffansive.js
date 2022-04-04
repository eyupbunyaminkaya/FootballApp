import React from "react";
import {View, Text} from 'react-native';
import styles from './Deffansive.style'
import OffansivePlayerFirst from "./OffansivePlayerFirst";
import OffansivePlayer2 from "./OffansivePlayer2";

function Deffansive(){
    return(
        <View style={styles.container}>
            <View style={styles.line}>
                <View style={styles.background}><Text style={styles.textred}>Şut</Text></View>
                <View style={styles.space}></View>
                <View  style={styles.background}><Text style={styles.text}>Pas</Text></View>
                <View style={styles.space}></View>
                <View  style={styles.background}><Text style={styles.text}>Kilit Pas</Text></View>
                <View style={styles.space}></View>
                <View  style={styles.background}><Text style={styles.text}>Adam G.</Text></View>
                <View style={styles.space}></View>
                <View  style={styles.background}><Text style={styles.text}>Hava T.</Text></View>
                <View style={styles.space}></View>
                <View  style={styles.background}><Text style={styles.text}>Ofsayt</Text></View>
            </View>
            <View style={styles.line2}>
                <Text style={styles.textOyuncular}>#oyuncular</Text>
                <View style={styles.textSpace}></View>
                <View style={styles.space2}></View>
                <View  style={styles.background2}><Text style={styles.texts2}>Maç</Text></View>
                <View style={styles.space2}></View>
                <View  style={styles.background2}><Text style={styles.texts2}>Dakika</Text></View>
                <View style={styles.space2}></View>
                <View  style={styles.backgroundBlack}><Text style={styles.textblack}>Toplam</Text></View>
                <View style={styles.space2}></View>
                <View  style={styles.background2}><Text style={styles.texts2}>isbtli</Text></View>
                <View style={styles.space2}></View>
                <View  style={styles.background2}><Text style={styles.texts2}>isbtsiz</Text></View>
                <View style={styles.space2}></View>
                <Text style={styles.texts2}>#raiting</Text>
            </View>

            <View >
                <View style={styles.space}></View>
                <OffansivePlayerFirst />
                <View style={styles.space}></View>
                <OffansivePlayer2 />
                <View style={styles.space}></View>
                <OffansivePlayer2 />
                <View style={styles.space}></View>
                <OffansivePlayer2 />
                <View style={styles.space}></View>
                <OffansivePlayer2 />
                <View style={styles.space}></View>
                <OffansivePlayer2 />
            </View>
        </View>
    )
}

export default Deffansive;