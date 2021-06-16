import React from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import { styles } from "../Button/styles";


interface IButtonProps {
    text: string
    onPress: () => void
    buttonStyle?: object
}

const Button: React.FC<IButtonProps> = ({ text, onPress, buttonStyle }: IButtonProps) => {

    return (
        <Pressable onPress={onPress} style={buttonStyle}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

export default React.memo(Button);
