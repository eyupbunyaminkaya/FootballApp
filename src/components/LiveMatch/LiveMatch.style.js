import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
    },
    logo: {
        width: 40,
        height: 40,
    },
    main: {
        backgroundColor: '#e5e5e5',
        margin: 10,
        width: 40,
        height: 40,
        borderRadius: 10,

    },
    dakika: {
        fontSize: 10,
        color: '#ff3a3a',
        textAlign: 'center',
    },
    skor: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
    bildirim: {
        right: 40,
    },
})