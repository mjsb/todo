import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 8,
        borderColor: '#333333',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 12
    },
    description: {
        flex: 1,
        fontSize: 14,
        color: '#F2F2F2',
        textAlign: 'left',
        fontWeight: '400',
        lineHeight: 20,
        textAlignVertical: 'top'
    },
    button: {
        width: 54,
        height: 54,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center'
    },
    check: {
        marginRight: 8
    },
    trash: {
        marginLeft: 8
    }
})