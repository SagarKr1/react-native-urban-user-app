import { View, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@/hooks/theme/Themes";
import { createBookingStyle } from "@/assets/style/Booking.style";

const PendingBooking = () => {
    const { colors } = useTheme();
    const styles = createBookingStyle(colors);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={require("@/assets/images/e1.jpg")}
                    style={styles.image}
                />

                <View style={styles.info}>
                    <Text style={styles.title}>Electrician Services Package</Text>
                    <Text style={styles.location}>📍 Korah Hazaribagh, Jh</Text>
                    <Text style={styles.meta}>Electrician: Andrew Haress</Text>
                    <Text style={styles.meta}>28 Nov 2024, 11:44 AM</Text>

                    <View style={[styles.status, styles.statusPending]}>
                        <Text style={[styles.statusText, styles.statusPendingText]}>
                            Waiting
                        </Text>
                    </View>

                    <View style={styles.btnRow}>
                        <TouchableOpacity style={[styles.btn, styles.btnDanger]}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btn, styles.btnPrimary]}>
                            <Text style={styles.btnText}>Live Tracking</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PendingBooking;
