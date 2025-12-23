import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/theme/Themes";
import { createHomeStyle } from "@/assets/style/Home.style";

type Service = {
    id: string;
    title: string;
    category: string;
    image: any;
    rating: number;
    price: string;
};

const data: Service[] = [
    {
        id: "1",
        title: "House Cleaning Service",
        category: "House Cleaning",
        image: require("@/assets/images/c1.jpg"),
        rating: 4.7,
        price: "₹200 Per Hour",
    },
    {
        id: "2",
        title: "House Electricity Service",
        category: "House Repairing",
        image: require("@/assets/images/e1.jpg"),
        rating: 4.7,
        price: "₹200 Per Hour",
    },
    {
        id: "3",
        title: "House Plumbing Service",
        category: "House Plumbing",
        image: require("@/assets/images/p1.jpg"),
        rating: 4.7,
        price: "₹200 Per Hour",
    },
    {
        id: "4",
        title: "House Cleaning Service",
        category: "House Cleaning",
        image: require("@/assets/images/w1.jpg"),
        rating: 4.7,
        price: "₹200 Per Hour",
    },
];

const Recommended = () => {
    const { colors } = useTheme();
    const styles = createHomeStyle(colors);

    return (
        <View style={styles.recommendedContainer}>
            <Text style={styles.heading}>Recommended For You</Text>

            <View style={styles.recommendedGrid}>
                {data.map((item) => (
                    <View key={item.id} style={styles.card}>
                        {/* IMAGE */}
                        <View style={styles.imageWrapper}>
                            <Image source={item.image} style={styles.image} />

                            <View style={styles.ratingBadge}>
                                <Ionicons name="star" size={12} color="#facc15" />
                                <Text style={styles.ratingText}>
                                    {item.rating}
                                </Text>
                            </View>
                        </View>

                        {/* CONTENT */}
                        <View style={styles.content}>
                            <Text style={styles.category}>
                                {item.category}
                            </Text>

                            <Text style={styles.title} numberOfLines={2}>
                                {item.title}
                            </Text>

                            {/* ✅ FIXED FOOTER */}
                            <View style={styles.footerRow}>
                                <View style={styles.priceRow}>
                                    <Ionicons
                                        name="cash-outline"
                                        size={12}
                                        color={colors.success}
                                    />
                                    <Text style={styles.price}>
                                        {item.price}
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    activeOpacity={0.85}
                                    style={styles.addBtn}
                                >
                                    <Text style={styles.addText}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Recommended;