import React, { useCallback } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TProduct } from "../../types/types";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProductScreen } from "../../screens/ProductScreen";


interface IProductProps {
    item: TProduct
}

const ProductItem: React.FC<IProductProps> = ({ item }) => {

    const { id, image, avgRating, oldPrice, price, ratings, title } = item;
    const navigation = useNavigation();

    const onProductItemPress = useCallback(()=>{
        navigation.navigate('ProductDetails', {id: id});
    },[navigation])

    return (
        <View>
            <TouchableOpacity style={styles.root} onPress={onProductItemPress}>
                <Image style={styles.image} source={{ uri: image }} />

                <View style={styles.productInfoContainer}>
                    <Text style={styles.title} numberOfLines={3}>{title}</Text>
                    <View style={styles.ratingsContainer}>
                        {[0, 0, 0, 0, 0].map((el, index) =>
                            <FontAwesome
                                key={`${item.id}-${index}`}
                                name={index < Math.floor(avgRating) ? 'star' : 'star-o'}
                                size={18}
                                color={'#e47911'}
                            />)
                        }
                        <Text> {ratings}</Text>
                    </View>
                    <Text style={styles.price}>{`from $${price}`}
                        {oldPrice && <Text style={styles.oldPrice}> {`$${oldPrice}`}</Text>}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(ProductItem);
