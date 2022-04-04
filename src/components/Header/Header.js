import React from 'react';
import {View, Image} from 'react-native';
import styles from './Header.style'


function Header(){
    return(
        <View>
            <View style={styles.black}>
                <Image style={styles.headerBar} source={require('../../../assets/images/headerredbar.png')} />
                <Image style={styles.teamLogo} source={require('../../../assets/images/galatasaray.png')} />
            </View>           
        </View>
        
    )
}

export default Header;

