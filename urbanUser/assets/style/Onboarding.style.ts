import { ColorScheme } from "@/hooks/theme/Themes";
import { StyleSheet } from "react-native";

export const createOnBoardingStyle = (colors: ColorScheme) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#ffffff",
        },

        image: {
            width: "100%",
            height: "65%",
            resizeMode: "cover",
            backgroundColor:colors.bg
        },

        card: {
            flex: 1,
            backgroundColor: colors.bg,
            marginTop: -24,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingHorizontal: 20,
            paddingTop: 24,
        },

        title: {
            fontSize: 20,
            fontWeight: "700",
            textAlign: "center",
            color: colors.primary,
        },

        subtitle: {
            fontSize: 14,
            textAlign: "center",
            color: colors.textMuted,
            marginTop: 8,
            lineHeight: 20,
        },

        dotsContainer: {
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 16,
        },

        activeDot: {
            width: 16,
            height: 3,
            backgroundColor: colors.primary,
            borderRadius: 2,
            marginHorizontal: 4,
        },

        inactiveDot: {
            width: 16,
            height: 3,
            backgroundColor: colors.warning,
            borderRadius: 2,
            marginHorizontal: 4,
        },

        actions: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 28,
        },

        skip: {
            fontSize: 14,
            color: colors.textMuted,
        },

        nextButton: {
            backgroundColor: colors.surface,
            paddingHorizontal: 24,
            paddingVertical: 10,
            borderRadius: 12,
        },

        nextText: {
            color: colors.text,
            fontWeight: "600",
            fontSize: 14,
        },
        getStart:{
            width:"100%",
            alignItems:"center",
            backgroundColor: colors.surface,
            paddingHorizontal: 24,
            paddingVertical: 10,
            borderRadius: 12,
        }
    });
    return styles;
}