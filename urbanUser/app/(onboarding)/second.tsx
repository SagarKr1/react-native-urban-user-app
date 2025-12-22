import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "@/hooks/theme/Themes";
import { createOnBoardingStyle } from "@/assets/style/Onboarding.style";


export default function Second() {
    const {colors} = useTheme();
    const router = useRouter();
    const styles = createOnBoardingStyle(colors);

    const handleFinish = () => {
        // later you will store onboarding flag here
        router.replace("/login");
    };

    return (
        <View style={styles.container}>
            {/* TOP IMAGE */}
            <Image
                source={require("../../assets/images/onboarding1.jpg")}
                style={styles.image}
            />

            {/* BOTTOM CARD */}
            <View style={styles.card}>
                <Text style={styles.title}>
                    Pick a service choose a time,{"\n"}and we’ll handle the rest
                </Text>

                <Text style={styles.subtitle}>
                    Expert cleaning service for spotless{"\n"}
                    home everyday
                </Text>

                {/* DOT INDICATOR */}
                <View style={styles.dotsContainer}>
                    <View style={styles.inactiveDot} />
                    <View style={styles.activeDot} />
                </View>

                {/* ACTION BUTTONS */}
                <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.getStart}
                        onPress={handleFinish}
                    >
                        <Text style={styles.nextText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
