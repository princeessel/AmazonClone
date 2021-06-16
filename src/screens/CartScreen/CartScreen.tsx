import React, { useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import cartProducts from "../../data/cart"
import { CartItem } from "../../components/CartItem";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const CartScreen: React.FC = () => {

    const navigation = useNavigation();
    const onProceedToCheckoutPress = useCallback(()=>{
        navigation.navigate('AddressScreen');

    },[navigation])

    const renderItem = useCallback(({ item }) => {
        return (
            <CartItem cartItem={item} />
        )
    }, [])

    const subtotal = cartProducts.reduce(
        (summedPrice, product) =>
            summedPrice + product.item.price * product.quantity,
        0,
    );


    return (
        <View style={styles.container}>

            <FlatList
                data={cartProducts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.subtotal, { color: 'black' }]}>Subtotal ({cartProducts.length} items): {''}</Text>
                            <Text style={styles.subtotal}>{`$${subtotal.toFixed(2)}`}</Text>
                        </View>
                        <Button text={'Proceed to checkout'} onPress={onProceedToCheckoutPress} buttonStyle={styles.buttonStyle} />
                    </View>
                )}
            />
        </View>
    )

}

export default React.memo(CartScreen);
