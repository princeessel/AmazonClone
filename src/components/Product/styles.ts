import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    image: {
        flex: 2,
        height: 150,
        margin: 5
    },
    title: {
        fontSize: 18
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    oldPrice: {
        fontSize: 14,
        fontWeight: 'normal',
        textDecorationLine:'line-through',
    },
    productInfoContainer: {
        flex: 3, 
        padding: 10
    },
    ratingsContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center'

    }
});
