import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { useTheme } from "@/hooks/theme/Themes";
import { createBookingStyle } from "@/assets/style/Booking.style";
import PendingBooking from "@/components/Booking/PendingBooking";
import CompletedBooking from "@/components/Booking/CompletedBooking";
import CanceledBooking from "@/components/Booking/CanceledBooking";



const MyBookings = () => {
    const { colors } = useTheme();
    const styles = createBookingStyle(colors);

    const [open, setOpen] = useState<
        "pending" | "completed" | "canceled"
    >("pending");

    return (
        <SafeAreaView style={styles.screen}>
            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.headerText}>My Bookings</Text>
            </View>

            {/* PENDING */}
            <View style={styles.section}>
                <TouchableOpacity
                    style={styles.sectionHeader}
                    onPress={() => setOpen("pending")}
                >
                    <Text style={styles.sectionTitle}>Pending Booking</Text>
                </TouchableOpacity>

                {open === "pending" && <PendingBooking />}
                <View style={styles.divider} />
            </View>

            {/* COMPLETED */}
            <View style={styles.section}>
                <TouchableOpacity
                    style={styles.sectionHeader}
                    onPress={() => setOpen("completed")}
                >
                    <Text style={styles.sectionTitle}>Completed Booking</Text>
                </TouchableOpacity>

                {open === "completed" && <CompletedBooking />}
                <View style={styles.divider} />
            </View>

            {/* CANCELED */}
            <View style={styles.section}>
                <TouchableOpacity
                    style={styles.sectionHeader}
                    onPress={() => setOpen("canceled")}
                >
                    <Text style={styles.sectionTitle}>Canceled Booking</Text>
                </TouchableOpacity>

                {open === "canceled" && <CanceledBooking />}
            </View>
        </SafeAreaView>
    );
};

export default MyBookings;
