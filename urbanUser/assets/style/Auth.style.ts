import { ColorScheme } from "@/hooks/theme/Themes";
import { StyleSheet } from "react-native";

export const createAuthStyle = (colors: ColorScheme) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.bg,
            paddingHorizontal: 20,
            paddingTop: 60,
        },

        back: {
            width: 40,
            height: 40,
            borderRadius: 20,
            // backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 24,
        },

        backText: {
            fontSize: 18,
            color: colors.primary,
        },

        title: {
            fontSize: 22,
            fontWeight: "700",
            color: colors.text,
            marginBottom: 8,
        },

        subtitle: {
            fontSize: 14,
            color: colors.textMuted,
            marginBottom: 24,
        },

        inputContainer: {
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 12,
            paddingHorizontal: 12,
            height: 52,
            marginBottom: 24,
        },

        countryCode: {
            fontSize: 16,
            fontWeight: "600",
            marginRight: 8,
            color: colors.text,
        },

        input: {
            flex: 1,
            fontSize: 16,
            color: colors.text,
        },

        button: {
            backgroundColor: colors.success,
            height: 52,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            marginTop: "auto",
            marginBottom: 24,
        },

        buttonText: {
            color: colors.text,
            fontSize: 16,
            fontWeight: "600",
        },
        otpContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 32,
        },
        otpInput: {
            width: 56,
            height: 56,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: colors.border,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "600",
            color: colors.text,
        },
        resendContainer: {
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
        },

        resendText: {
            fontSize: 14,
            color: colors.text,
        },

        resendLink: {
            fontSize: 14,
            color: colors.primary,
            fontWeight: "600",
        },
    });
    return styles;
}