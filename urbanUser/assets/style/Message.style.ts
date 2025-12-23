import { ColorScheme } from "@/hooks/theme/Themes";
import { StyleSheet } from "react-native";

export const createMessageStyle = (colors: ColorScheme) => {
    const styles = StyleSheet.create({
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
        messageContainer: {
            flex: 1,
            backgroundColor: colors.surface
        },
        headContainer: {
            marginHorizontal: 15,
            paddingTop: 25,
            gap: 15
        },
        headBtnContainer: {
            flexDirection: "row",
            justifyContent: "space-around"
        },
        headBtnContain: {
            width: "40%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 10,
            shadowColor: colors.shadow,
            shadowOpacity: 0.08,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 4 },
            elevation: 6
        },
        headBtn: {
            padding: 10
        },
        headBtnText: {
            color: colors.text
        },
        list: {
            paddingHorizontal: 16,
            paddingTop: 8,
        },

        row: {
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 14,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
        },

        avatar: {
            width: 48,
            height: 48,
            borderRadius: 24,
            marginRight: 12,
        },

        center: {
            flex: 1,
        },

        name: {
            fontSize: 15,
            fontWeight: "600",
            color: colors.text,
            marginBottom: 4,
        },

        timeRow: {
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
        },

        time: {
            fontSize: 13,
        },

        callBtn: {
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: colors.surface,
            justifyContent: "center",
            alignItems: "center",

            elevation: 3,
            shadowColor: colors.shadow,
            shadowOpacity: 0.1,
            shadowRadius: 6,
            shadowOffset: { width: 0, height: 3 },
        },
        message: {
            fontSize: 13,
            color: colors.textMuted,
        },

        right: {
            alignItems: "flex-end",
        },
        badge: {
            minWidth: 18,
            height: 18,
            borderRadius: 9,
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 5,
        },

        badgeText: {
            color: colors.bg,
            fontSize: 11,
            fontWeight: "600",
        },
    });
    return styles;
}