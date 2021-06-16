import React, { useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

interface IQuantitySelector {
    quantity: number
    setQuantity: any
}

const QuantitySelector: React.FC<IQuantitySelector> = ({ quantity, setQuantity }) => {

    const onMinus = useCallback(() => {
        setQuantity(Math.max(0, quantity - 1))
    }, [quantity, setQuantity]);

    const onPlus = useCallback(() => {
        setQuantity(quantity + 1)
    }, [quantity, setQuantity]);


    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onMinus}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable style={styles.button} onPress={onPlus}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>

        </View>
    )
}

export default React.memo(QuantitySelector);
