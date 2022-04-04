import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    playerRow:{
        fontWeight: 'bold',
        color:'#272727',
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
        color:'#272727',
        paddingHorizontal: 15,
    },
    playerName:{
        fontWeight: 'bold',
        color:'#272727',
        paddingHorizontal: 10,
    },
    statistic:{
        fontWeight: 'bold',
        fontSize: 17,
        color:'#272727',

    },
})