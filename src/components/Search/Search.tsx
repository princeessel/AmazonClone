import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import { styles } from "./styles";

interface ISearchProps {
    searchValue: string;
    setSearchValue: (value: string)=> void;
}

const Search: React.FC<ISearchProps> = ({searchValue, setSearchValue}) => {

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.container}>
            <Feather name="search" size={14}/>
            <TextInput
                style={styles.input}
                placeholder={'Search Amazon'}
                value={searchValue}
                onChangeText={setSearchValue} />
        </View>
        </SafeAreaView>
        
    )
}

export default React.memo(Search);
