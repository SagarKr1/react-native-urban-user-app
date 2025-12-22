import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { useTheme } from "@/hooks/theme/Themes";
import { createPermissionsStyle } from "@/assets/style/permissions.style";

export default function LocationPermission() {
    const router = useRouter();
    const { colors } = useTheme();
    const styles = createPermissionsStyle(colors);

    const requestLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status === "granted") {
            router.replace("/home");
        } else {
            alert("Location permission is required to continue");
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
            <View style={styles.container}>

                {/* ICON */}
                <View style={styles.iconOuter}>
                    <View style={styles.iconInner}>
                        <Text style={styles.icon}>📍</Text>
                    </View>
                </View>

                {/* TEXT */}
                <Text style={styles.title}>Detect your location</Text>

                <Text style={styles.subtitle}>
                    Enable location service to help us provide you{"\n"}
                    with the best services near you
                </Text>

                {/* BUTTON */}
                <TouchableOpacity style={styles.button} onPress={requestLocation}>
                    <Text style={styles.buttonText}>Allow Location Access</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
