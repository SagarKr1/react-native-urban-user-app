import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from 'react'
import { useTheme } from '@/hooks/theme/Themes'
import { createAuthStyle } from '@/assets/style/Auth.style';
import { useRouter } from 'expo-router';

const login = () => {
    const { colors } = useTheme();
    const styles = createAuthStyle(colors);
    const router = useRouter();

    const handleSendOtp = () => {
        // later: validate phone number + API call
        router.push("/otpLogin");
    };

    return (
        <View style={styles.container}>

            {/* BACK BUTTON (OPTIONAL) */}
            {/* <TouchableOpacity style={styles.back}>
                <Text style={styles.backText}>←</Text>
            </TouchableOpacity> */}

            {/* TITLE */}
            <Text style={styles.title}>Enter your phone number</Text>

            {/* SUBTITLE */}
            <Text style={styles.subtitle}>
                We’ll send an OTP verification code to you
            </Text>

            {/* PHONE INPUT */}
            <View style={styles.inputContainer}>
                <Text style={styles.countryCode}>+91</Text>
                <TextInput
                    placeholder="Phone Number"
                    keyboardType="number-pad"
                    style={styles.input}
                    maxLength={10}
                />
            </View>

            {/* BUTTON */}
            <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
                <Text style={styles.buttonText}>Send me the code</Text>
            </TouchableOpacity>
        </View>
    );
}

export default login