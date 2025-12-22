import { ColorScheme } from "@/hooks/theme/Themes";
import { StyleSheet } from "react-native";

export const createPermissionsStyle = (colors: ColorScheme) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 24,
            alignItems: "center",
            backgroundColor: colors.bg,
        },

        /* ICON */
        iconOuter: {
            marginTop: 80,
            marginBottom: 32,
            width: 140,
            height: 140,
            borderRadius: 70,
            backgroundColor: colors.surface,
            justifyContent: "center",
            alignItems: "center",
        },

        iconInner: {
            width: 90,
            height: 90,
            borderRadius: 45,
            backgroundColor: colors.primary + "22",
            justifyContent: "center",
            alignItems: "center",
        },

        icon: {
            fontSize: 42,
        },

        /* TEXT */
        title: {
            fontSize: 22,
            fontWeight: "700",
            color: colors.text,
            marginBottom: 12,
            textAlign: "center",
        },

        subtitle: {
            fontSize: 14,
            color: colors.textMuted,
            textAlign: "center",
            lineHeight: 20,
            paddingHorizontal: 10,
        },

        /* BUTTON */
        button: {
            marginTop: "auto",
            marginBottom: 32,
            width: "100%",
            height: 56,
            backgroundColor: colors.success,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            elevation: 2,
        },

        buttonText: {
            color: "#ffffff",
            fontSize: 16,
            fontWeight: "700",
        },
    });
    return styles;
}