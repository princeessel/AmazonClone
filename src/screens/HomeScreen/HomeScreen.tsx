import React, { useCallback } from "react";
import { FlatList, View } from "react-native";
import { ProductItem } from "../../components/Product";
import { styles } from "./styles";
import products from "../../data/products"


interface IHomeProps {
    searchValue:string
}

const HomeScreen: React.FC<IHomeProps> = ({searchValue}) => {

    const renderProductItem = useCallback(({ item }) => {
        return (
            <ProductItem item={item} />
        )
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )

}

export default React.memo(HomeScreen);
