import React, { useCallback, useState } from "react";
import { FlatList, Image, useWindowDimensions, View } from "react-native";
import { styles } from "./styles";

interface IImageCarousel {
    images: string[]
}

const ImageCarousel: React.FC<IImageCarousel> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
const windowWidth = useWindowDimensions().width;

const onViewableItemsChanged = useCallback(({viewableItems})=> {
    if(viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0)
    }
}, []);

    return (
        <View>
            <FlatList
                data={images}
                renderItem={({item}) => (
                    <Image style={[styles.carouselImage, {width: windowWidth - 40}]} source={{ uri: item }} />
                )}
                horizontal={true}
                snapToInterval={windowWidth - 20}
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                decelerationRate= 'fast'
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={onViewableItemsChanged}
            />
            <View style={styles.dots}>
            {images.map((image, index) => (
                <View style={[styles.dot, {backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'}]} />
            ))}
            </View>  
        </View>
    )
}

export default React.memo(ImageCarousel);
