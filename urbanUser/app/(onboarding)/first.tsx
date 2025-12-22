import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "@/hooks/theme/Themes";
import { createOnBoardingStyle } from "@/assets/style/Onboarding.style";

export default function First() {
    const router = useRouter();
    const {colors} = useTheme();
    const styles = createOnBoardingStyle(colors);

    return (
        <View style={styles.container}>
            {/* TOP IMAGE */}
            <Image
                source={require("../../assets/images/onboarding.jpg")}
                style={styles.image}
            />

            {/* BOTTOM CARD */}
            <View style={styles.card}>
                <Text style={styles.title}>Clean Simple Convenient</Text>

                <Text style={styles.subtitle}>
                    Get your laundry cleaned with care{"\n"}
                    and exception service
                </Text>

                {/* DOT INDICATOR */}
                <View style={styles.dotsContainer}>
                    <View style={styles.activeDot} />
                    <View style={styles.inactiveDot} />
                </View>

                {/* ACTION BUTTONS */}
                <View style={styles.actions}>
                    <TouchableOpacity onPress={() => router.replace("/login")}>
                        <Text style={styles.skip}>Skip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => router.push("/second")}
                    >
                        <Text style={styles.nextText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
