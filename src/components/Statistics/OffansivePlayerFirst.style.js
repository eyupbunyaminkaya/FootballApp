import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    playerRow:{
        fontWeight: 'bold',
        color:'#ff3a3a',
        paddingHorizontal: 5,
    },
    teamLogo:{
        width: 20,
        height: 20,
    },
    nationalLogo:{
        width: 10,
        height: 10,
    },
    images: {
        flexDirection:'row',
        alignItems: 'center',
    },
    texts: {
        flexDirection:'row',
    },
    text: {
        fontWeight: 'bold',
        color:'#ff3a3a',
        paddingHorizontal:15,
    },
    playerName:{
        fontWeight: 'bold',
        color:'#ff3a3a',
        paddingHorizontal: 10,
    },
    statistic:{
        fontWeight: 'bold',
        fontSize: 17,
        color:'#ff3a3a',

    },
})