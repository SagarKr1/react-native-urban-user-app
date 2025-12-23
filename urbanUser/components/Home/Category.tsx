import {
    View,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    Pressable
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { createHomeStyle } from "@/assets/style/Home.style";
import { useTheme } from "@/hooks/theme/Themes";

const Category = () => {
    const { colors } = useTheme();
    const styles = createHomeStyle(colors);

    const { width } = useWindowDimensions();

    // 🔥 responsive columns
    const isLandscape = width > 700;
    const columns = isLandscape ? 3 : 2;

    // 🔥 dynamic card width
    const CARD_GAP = 12;
    const H_PADDING = 40; // left + right (20 + 20)
    const cardWidth =
        (width - H_PADDING - CARD_GAP * (columns - 1)) / columns;

    type IconName = React.ComponentProps<typeof Ionicons>["name"];

    const categories: {
        service: string;
        icon: IconName;
    }[] = [
            { service: "Cleaning", icon: "trash-outline" },
            { service: "Electrician", icon: "flash-outline" },
            { service: "Washing", icon: "cart-outline" },
            { service: "Plumbing", icon: "construct-outline" },
        ];

    return (
        <View style={styles.catrgoryCantainer}>
            {/* HEADER */}
            <View style={styles.categoryHeader}>
                <Text style={styles.CategoryTitleText}>All Categories</Text>
                <TouchableOpacity>
                    <Text style={styles.CategoryBtn}>View All</Text>
                </TouchableOpacity>
            </View>

            {/* GRID */}
            <View style={styles.categoryGrid}>
                {categories.map((item, index) => (
                    <Pressable
                    key={index}
                        onPress={() => console.log(item.service)}
                        style={({ pressed }) => [
                            {
                                transform: [{ scale: pressed ? 0.97 : 1 }],
                                opacity: pressed ? 0.95 : 1,
                            },
                        ]}
                    >

                        <LinearGradient
                            key={index}
                            colors={colors.gradients.surface}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[
                                styles.categoryServiceCard,
                                {
                                    width: cardWidth,
                                    // 🔥 ANDROID shadow
                                    elevation: 5,
                                    // 🔥 iOS shadow
                                    shadowColor: colors.shadow,
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.15,
                                    shadowRadius: 8,
                                },
                            ]}
                        >
                            <Ionicons
                                name={item.icon}
                                size={20}
                                color={colors.primary}
                            />
                            <Text style={styles.categoryCardText}>
                                {item.service}
                            </Text>
                        </LinearGradient>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

export default Category;