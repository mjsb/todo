import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        padding: 70,
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
        marginBottom: -2
    },
    boxlogo: {
        flexDirection: 'row',
        width: 111
    },
    logorocket: {
        marginRight: 10
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: -27,
        marginBottom: -27,
        paddingHorizontal: 24,
        zIndex:2,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#808080',
        padding: 16,
        fontSize: 16,
        marginRight: 4
    },
    inputFocus: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#808080',
        padding: 16,
        fontSize: 16,
        marginRight: 4,
        borderColor: '#5E60CE',
        borderStyle: 'solid',
        borderWidth: 1
    },
    button: {
        width: 54,
        height: 54 ,
        borderRadius:6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 24
    },
    boxInfo: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 32,
        marginBottom: 20
    },
    boxContentInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    created: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: '700',
    },
    done: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: '700',
    },
    infoVal: {
        color: '#D9D9D9',
        fontSize: 12,
        fontWeight: '700',
        marginLeft: 10,
        backgroundColor: '#333333',
        width: 25,
        height: 19,
        borderRadius: 999,
        textAlign: 'center'
    },
    boxTasks: {
        borderTopColor: '#333333',
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        
    },
    clipboard: {
        marginBottom: 20
    },
    listEmptyTextBold: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    listEmptyTextNormal: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'normal'
    },
    scrollViewMarginBottom: {
        marginBottom: 20
    }
});