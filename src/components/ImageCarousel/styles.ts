import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {

    },
    carouselImage: {
        padding: 10,
        height: 250,
        resizeMode: 'contain'
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        margin: 5
    },
});
