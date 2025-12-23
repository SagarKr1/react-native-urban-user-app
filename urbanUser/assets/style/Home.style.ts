import { ColorScheme } from "@/hooks/theme/Themes";
import { StyleSheet } from "react-native";

export const createHomeStyle = (colors: ColorScheme) => {
    const styles = StyleSheet.create({
        main: {
            flex: 1,
            backgroundColor: colors.surface,
        },

        /* =====================
            CATEGORY SECTION
        ===================== */
        catrgoryCantainer: {
            paddingHorizontal: 20,
            paddingTop: 20,
        },

        categoryHeader: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
        },

        CategoryTitleText: {
            fontSize: 18,
            fontWeight: "700",
            color: colors.text,
        },

        CategoryBtn: {
            fontSize: 14,
            fontWeight: "600",
            color: colors.primary,
        },

        /* =====================
            GRID
        ===================== */
        categoryGrid: {
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 12,
        },

        /* =====================
            CARD
        ===================== */
        categoryServiceCard: {
            flexDirection: "row",
            alignItems: "center",
            gap: 10,

            paddingVertical: 14,
            paddingHorizontal: 16,

            borderRadius: 18,
        },

        categoryCardText: {
            fontSize: 14,
            fontWeight: "600",
            color: colors.text,
        },
        bannerContainer: {
            marginHorizontal: 20,
            marginTop: 20,
        },
        bannerImageContainer: {
            height: 250,
            backgroundColor: colors.bg,
            borderWidth: 1,
            borderColor: colors.border,
            padding: 20,
            alignItems: "center",
            borderRadius: 20,
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            elevation: 5,
            shadowRadius: 8
        },
        bannnerImage: {
            width: "100%",
            height: "100%",
            resizeMode: "cover",
        },
        container: {
            paddingHorizontal: 20,
            marginTop: 20,
        },

        heading: {
            fontSize: 18,
            fontWeight: "700",
            color: colors.text,
            marginBottom: 14,
        },

        column: {
            justifyContent: "space-between",
            marginBottom: 16,
        },

        card: {
            width: "48%",
            backgroundColor: colors.surface,
            borderRadius: 16,
            
            elevation: 4,
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.12,
            shadowRadius: 6,
        },

        imageWrapper: {
            position: "relative",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            overflow: "hidden",
        },

        image: {
            width: "100%",
            height: 110,
            resizeMode: "cover",
        },

        ratingBadge: {
            position: "absolute",
            top: 8,
            left: 8,
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            backgroundColor: "#fff",
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
        },

        ratingText: {
            fontSize: 12,
            fontWeight: "600",
            color: "#000",
        },

        content: {
            padding: 10,
        },

        category: {
            fontSize: 12,
            color: colors.primary,
            marginBottom: 4,
        },

        title: {
            fontSize: 14,
            fontWeight: "600",
            color: colors.text,
            marginBottom: 8,
        },

        row: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },

        priceRow: {
            flexDirection: "column",
            // alignItems: "center",
            gap: 4,
        },

        price: {
            fontSize: 10,
            color: colors.textMuted,
        },

        addBtn: {
            backgroundColor: colors.primary,
            paddingHorizontal: 12,
            paddingVertical: 5,
            borderRadius: 12,
        },

        addText: {
            color: "#fff",
            fontSize: 12,
            fontWeight: "600",
        },
        scrollContent: {
            paddingBottom: 24, // 🔥 important for smooth scroll
        },
        recommendedContainer: {
            paddingHorizontal: 20,
            marginTop: 20,
        },
        recommendedGrid: {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap:10
        },
        footerRow: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 6,
        },
        headerContainer:{
            paddingTop:15,
            paddingHorizontal:15,
            gap:"10"
        },
        headerImage:{
            height:70,
            width:70,
            borderRadius:50
        },
        headContain:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        },
        headCard:{
            flexDirection:"row",
            alignItems:"center",
            gap:10
        },
        headSubTitle:{
            color:colors.textMuted,
            fontSize:12,
            fontWeight:"500"
        },
        container1: {
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
    });
    return styles;
}