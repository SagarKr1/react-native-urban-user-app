import category from "@/app/(app)/(tabs)/category";
import { ColorScheme } from "@/hooks/theme/Themes";
import { StyleSheet } from "react-native";

export const createCategoryStyle = (colors: ColorScheme) => {
    const styles = StyleSheet.create({
        main: {
            flex: 1,
            backgroundColor: colors.surface,
            paddingTop: 20,
            paddingHorizontal: 10
        },
        container: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.bg,
            borderRadius: 24,
            paddingHorizontal: 14,
            height: 48,

            // shadow (Android + iOS)
            elevation: 4,
            shadowColor: colors.shadow,
            shadowOpacity: 0.08,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 4 },
        },

        icon: {
            marginRight: 8,
        },

        input: {
            flex: 1,
            fontSize: 14,
            color: colors.text,
        },
        category: {
            paddingTop: 20
        },
        categoryText: {
            color: colors.text,
            fontSize: 24,
            fontWeight: "700"
        },
        categoryCardContainer: {
            paddingTop: 10,
            gap: 20
        },
        categoryCard: {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 10,
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 5,
            elevation: 6
        },
        cardContainer: {
            gap: 10
        },
        categoryImage: {
            height: 70,
            width: 70,
            borderRadius: 5
        },
        categoryCardText: {
            color: colors.text,
            fontWeight: "600"
        },
        categoryCardTextMuted: {
            color: colors.textMuted,
            fontSize: 12,
            fontWeight: "300"
        },
        available:{
            backgroundColor:colors.success,
            padding:5,
            borderRadius:5,
            color:colors.text,
            textAlign:"center"
        }
    });
    return styles;
}