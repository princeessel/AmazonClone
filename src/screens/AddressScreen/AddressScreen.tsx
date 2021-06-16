import { Picker } from "@react-native-picker/picker";
import React, { useCallback, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native";
import countryList from "country-list";
import { styles } from "./styles";
import { Button } from "../../components/Button";


const countries = countryList.getData();

const AddressScreen: React.FC = () => {
    const [country, setCountry] = useState(countries[0].code);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [addressError, setAddressError] = useState('');


    const Address = {
        FULLNAME: 'Full Name(First and Last Name)',
        PHONENUMBER: 'Phone Number',
        STREET_ADDRESS: 'Address',
        CITY: 'City'
    }

    const onCheckout = useCallback(() => {
        if (!!addressError) {
            Alert.alert("Fix all errors before checkout")
            return;
        }
        if (!fullName) {
            Alert.alert('Please enter fullName');
            return;
        }

        if (!phoneNumber) {
            Alert.alert('Please enter phoneNumber');
            return;
        }
        console.warn('Success, Checkout')

    }, []);

    const validateAddress = useCallback(() => {
        if (address.length < 3) {
            setAddressError('Address is too short')
        }

        if (address.length > 20) {
            setAddressError('Address is too long')
        }

    }, [address]);


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        >
            <ScrollView style={styles.container}>
                <Picker selectedValue={country}
                    onValueChange={(itemValue) =>
                        setCountry(itemValue)
                    }>
                    {countries.map(country => (
                        <Picker.Item value={country.code} label={country.name} />
                    ))}

                </Picker>
                <View style={styles.row}>
                    <Text style={styles.label}>{Address.FULLNAME}</Text>
                    <TextInput style={styles.input} placeholder={'Full Name'} value={fullName} onChangeText={setFullName} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>{Address.PHONENUMBER}</Text>
                    <TextInput style={styles.input} placeholder={'Phone number'} value={phoneNumber} onChangeText={setPhoneNumber} keyboardType={'number-pad'} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>{Address.STREET_ADDRESS}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'Street Address or P.O.Box'}
                        value={address}
                        onEndEditing={validateAddress}
                        onChangeText={(text) => {
                            setAddress(text);
                            setAddressError('')
                        }}
                    />
                    {!!addressError && <Text style={styles.errorLabel}>{addressError}</Text>}
                </View>
                <View>
                    <Text style={styles.label}>{Address.CITY}</Text>
                    <TextInput style={styles.input} placeholder={'city'} value={city} onChangeText={setCity} />
                    {/* <View>
                    <Picker></Picker>
                    <Text>{'Zip Code'}</Text>
                </View> */}
                </View>
                <Button text={'Checkout'} onPress={onCheckout} buttonStyle={styles.buttonStyle} />
            </ScrollView>
        </KeyboardAvoidingView>

    )

}

export default React.memo(AddressScreen);
