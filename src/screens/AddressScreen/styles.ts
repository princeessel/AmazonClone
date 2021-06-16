import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding:10
    },
    input: {
        width: '100%',
        height: 40,
        borderRadius: 2,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        padding: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold'
    },
    row: {

    },
    errorLabel: {
        color: 'red'
    },
    buttonStyle: {
        width: '100%',
        height: 35,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#f5ce22',
        borderColor: '#c9c9c9',
        marginHorizontal: 5,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
