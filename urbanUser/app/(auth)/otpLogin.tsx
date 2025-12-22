import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from "react-native";
import { useState, useRef } from "react";
import { useRouter } from "expo-router";
import { useTheme } from "@/hooks/theme/Themes";
import { createAuthStyle } from "@/assets/style/Auth.style";

const { width } = Dimensions.get("window");
const OTP_BOX_SIZE = Math.min(width * 0.16, 60); // responsive

export default function Otp() {
    const router = useRouter();
    const { colors } = useTheme();
    const styles = createAuthStyle(colors);

    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputs = useRef<TextInput[]>([]);

    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;

        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);

        if (value && index < 3) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleVerify = () => {
        router.replace("/permissions/location");
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
            <View style={styles.container}>
                {/* BACK */}
                <TouchableOpacity
                    style={styles.back}
                    onPress={() => router.replace("/login")}
                >
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>

                {/* TITLE */}
                <Text style={styles.title}>OTP Verification</Text>

                {/* SUBTITLE */}
                <Text style={styles.subtitle}>
                    Enter the 4 digit code sent to your phone number
                </Text>

                {/* OTP INPUTS */}
                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => {
                                if (ref) inputs.current[index] = ref;
                            }}
                            value={digit}
                            onChangeText={(value) => handleChange(value, index)}
                            keyboardType="number-pad"
                            maxLength={1}
                            style={[
                                styles.otpInput,
                                { width: OTP_BOX_SIZE, height: OTP_BOX_SIZE },
                            ]}
                        />
                    ))}
                </View>

                {/* VERIFY BUTTON */}
                <TouchableOpacity style={styles.button} onPress={handleVerify}>
                    <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>

                {/* RESEND */}
                <View style={styles.resendContainer}>
                    <Text style={styles.resendText}>Didn’t receive the code?</Text>
                    <TouchableOpacity>
                        <Text style={styles.resendLink}> Resend</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
