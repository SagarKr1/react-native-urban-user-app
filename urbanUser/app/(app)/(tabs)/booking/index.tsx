import {
    View,
    Text,
    TouchableOpacity,
    Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useRef, useEffect } from "react";

import { useTheme } from "@/hooks/theme/Themes";
import { createBookingStyle } from "@/assets/style/Booking.style";

import PendingBooking from "@/components/Booking/PendingBooking";
import CompletedBooking from "@/components/Booking/CompletedBooking";
import CanceledBooking from "@/components/Booking/CanceledBooking";
import { Ionicons } from "@expo/vector-icons";

type SectionType = "pending" | "completed" | "canceled" | "";

const MyBookings = () => {
    const { colors } = useTheme();
    const styles = createBookingStyle(colors);

    const [open, setOpen] = useState<SectionType>("");

    // Animated values (persisted)
    const pendingAnim = useRef(new Animated.Value(0)).current;
    const completedAnim = useRef(new Animated.Value(0)).current;
    const canceledAnim = useRef(new Animated.Value(0)).current;

    // Animation handler
    const animateChevron = (anim: Animated.Value, isOpen: boolean) => {
        Animated.timing(anim, {
            toValue: isOpen ? 1 : 0,
            duration: 220,
            useNativeDriver: true,
        }).start();
    };

    // Effect for animations
    useEffect(() => {
        animateChevron(pendingAnim, open === "pending");
        animateChevron(completedAnim, open === "completed");
        animateChevron(canceledAnim, open === "canceled");
    }, [open]);

    const renderHeader = (
        title: string,
        key: Exclude<SectionType, "">,
        anim: Animated.Value
    ) => {
        const rotate = anim.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "90deg"],
        });

        return (
            <TouchableOpacity
                style={styles.sectionHeader}
                activeOpacity={0.7}
                onPress={() => setOpen(open === key ? "" : key)}
            >
                <Text style={styles.sectionTitle}>{title}</Text>

                <Animated.View style={{ transform: [{ rotate }] }}>
                    <Ionicons
                        name="chevron-forward"
                        size={22}
                        color={colors.text}
                    />
                </Animated.View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.screen}>
            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.headerText}>My Bookings</Text>
            </View>

            {/* PENDING */}
            <View style={styles.section}>
                {renderHeader("Pending Booking", "pending", pendingAnim)}
                {open === "pending" && <PendingBooking />}
                <View style={styles.divider} />
            </View>

            {/* COMPLETED */}
            <View style={styles.section}>
                {renderHeader("Completed Booking", "completed", completedAnim)}
                {open === "completed" && <CompletedBooking />}
                <View style={styles.divider} />
            </View>

            {/* CANCELED */}
            <View style={styles.section}>
                {renderHeader("Canceled Booking", "canceled", canceledAnim)}
                {open === "canceled" && <CanceledBooking />}
            </View>
        </SafeAreaView>
    );
};

export default MyBookings;
