import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Team.style';

function Team(){
    return(
        <View>
            <Text style={styles.title}>Kadro</Text>
            <View>
                <Text style={styles.subtitle}>Teknik Direktör</Text>
                <View style={styles.allAlignment}>
                    <View style={styles.alignment}>
                        <Image style={styles.playerImage} source={require('../../../assets/images/imparator.png')} />
                        <Text style={styles.playerText}>Fatih Terim</Text>
                    </View>                 
                </View>
            </View>
            <View style={styles.space}></View>
            <View>
                <Text style={styles.subtitle}>Orta Saha Oyuncuları</Text>
                <View style={styles.allAlignment}>
                    <View style={styles.alignment}>
                        <Image style={styles.playerImage} source={require('../../../assets/images/berkan.png')} />
                        <Text style={styles.playerText}>Berkan Kutlu</Text>
                        <Text style={styles.nationalText}>Türkiye</Text>
                    </View>                 
                    <View style={styles.alignment}>
                    <Image style={styles.playerImage} source={require('../../../assets/images/berkan.png')} />
                        <Text style={styles.playerText}>Berkan Kutlu</Text>
                        <Text style={styles.nationalText}>Türkiye</Text>
                    </View>  
                </View>
            </View>
            <View style={styles.space}></View>
            <View>
                <Text style={styles.subtitle}>Hücum Oyuncuları</Text>
                <View style={styles.allAlignment}>
                    <View style={styles.alignment}>
                    <Image style={styles.playerImage} source={require('../../../assets/images/berkan.png')} />
                    <Text style={styles.playerText}>Berkan Kutlu</Text>
                        <Text style={styles.nationalText}>Türkiye</Text>
                    </View>                 
                    <View style={styles.alignment}>
                    <Image style={styles.playerImage} source={require('../../../assets/images/berkan.png')} />
                    <Text style={styles.playerText}>Berkan Kutlu</Text>
                    <Text style={styles.nationalText}>Türkiye</Text>
                    </View>  
                </View>
            </View>
            <View style={styles.space}></View>
        </View>
    )
}

export default Team;