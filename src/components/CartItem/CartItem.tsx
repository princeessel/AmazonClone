import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { TCartItem } from "../../types/types";
import { QuantitySelector } from "../QuantitySelector";
import { Button } from "../Button";


interface ICartItemProps {
    cartItem: TCartItem
}

const CartItem: React.FC<ICartItemProps> = ({ cartItem }: ICartItemProps) => {

    const {
        quantity: quantityProp,
        option,
        item
    } = cartItem;

    const [quantity, setQuantity] = useState(quantityProp);

    return (
        <View style={styles.root}>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: item.image }} />

                <View style={styles.productInfoContainer}>
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                    <Text style={styles.price}>{`$${item.price}`}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                <Button text={'Delete'} onPress={() => console.warn('Item Deleted')} buttonStyle={[styles.buttonStyle, , {width: 80}]} />
                <Button text={'Save for later'} onPress={() => console.warn('Save for later')} buttonStyle={styles.buttonStyle} />
            </View>
        </View>
    )
}

export default React.memo(CartItem);
