import { Picker } from "@react-native-picker/picker";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { ImageCarousel } from "../../components/ImageCarousel";
import { QuantitySelector } from "../../components/QuantitySelector";
import product from "../../data/product";
import { styles } from "./styles";

const ProductScreen: React.FC = () => {
    const defaultOption = product.options ? product.options[0] : null;
    const [selectedOption, setSelectedOption] = useState(defaultOption);
    const [quantity, setQuantity] = useState(1);

    const route = useRoute();
    console.warn(route.params)

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>{product.title}</Text>
            <ImageCarousel images={product.images} />

            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) =>
                    setSelectedOption(itemValue)
                }
            >
                {product.options.map((option) => (
                    <Picker.Item label={option} value={option} />
                ))}
            </Picker>

            <Text style={styles.price}>{`from $${product.price}`}
                {product.oldPrice && <Text style={styles.oldPrice}> {`$${product.oldPrice}`}</Text>}
            </Text>


            <Text style={styles.description}>{product.description}</Text>

            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <Button text={'Add to Cart'} onPress={() => { console.warn('Add to Cart') }} buttonStyle={[styles.buttonContainer, styles.addToCartcolor]} />
            <Button text={'Buy Now'} onPress={() => { console.warn('Buy Now') }} buttonStyle={[styles.buttonContainer, {marginBottom: 10}]} />

        </ScrollView>
    )

}

export default React.memo(ProductScreen);
