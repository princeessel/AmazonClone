import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 120,
        margin: 5
    },
    title: {
        fontSize: 16
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#d64c06'
    },
    productInfoContainer: {
        flex: 3,
        padding: 10
    },
    ratingsContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center'

    },
    buttonStyle: {
        width: 110,
        height: 35,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#c9c9c9',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
