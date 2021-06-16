import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white'

    },
    title: {
    },
    image: {
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    buttonContainer: {
        marginTop: 5,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f5c49f',
        backgroundColor: '#f5c49f'
    },
    addToCartcolor: {
        backgroundColor: '#f7d668'
    },
    description: {
        marginVertical: 10,
        lineHeight: 18
    }
})
