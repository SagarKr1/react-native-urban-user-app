import { ColorScheme } from "@/hooks/theme/Themes";
import { StyleSheet } from "react-native";

export const createBookingStyle = (colors: ColorScheme) => {
    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: colors.bg,
        },

        header: {
            paddingVertical: 16,
            alignItems: "center",
            borderBottomWidth: 1,
            borderColor: colors.border,
        },

        headerText: {
            fontSize: 18,
            fontWeight: "600",
            color: colors.text,
        },

        section: {
            paddingHorizontal: 16,
            paddingTop: 14,
        },

        sectionHeader: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },

        sectionTitle: {
            fontSize: 15,
            fontWeight: "600",
            color: colors.text,
        },

        divider: {
            height: 1,
            backgroundColor: colors.border,
            marginTop: 10,
        },
        container: {
            padding: 12,
        },

        card: {
            flexDirection: "row",
            backgroundColor: colors.surface,
            borderRadius: 14,
            padding: 10,
            marginBottom: 12,
        },

        image: {
            width: 70,
            height: 70,
            borderRadius: 10,
        },

        info: {
            flex: 1,
            marginLeft: 10,
        },

        title: {
            fontSize: 14,
            fontWeight: "600",
            color: colors.text,
        },

        location: {
            fontSize: 12,
            color: colors.textMuted,
            marginTop: 2,
        },

        meta: {
            fontSize: 12,
            color: colors.textMuted,
            marginTop: 2,
        },

        status: {
            alignSelf: "flex-start",
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 20,
            marginTop: 6,
        },

        statusPending: {
            backgroundColor: colors.warning,
        },

        statusCompleted: {
            backgroundColor: colors.success,
        },

        statusCanceled: {
            backgroundColor: colors.danger,
        },

        statusText: {
            fontSize: 11,
            fontWeight: "500",
        },

        statusPendingText: {
            color: colors.warning,
        },

        statusCompletedText: {
            color: colors.success,
        },

        statusCanceledText: {
            color: colors.danger,
        },

        btnRow: {
            flexDirection: "row",
            gap: 10,
            marginTop: 8,
        },

        btn: {
            paddingHorizontal: 14,
            paddingVertical: 6,
            borderRadius: 20,
        },

        btnPrimary: {
            backgroundColor: colors.primary,
        },

        btnDanger: {
            backgroundColor: colors.danger,
        },

        btnOutline: {
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: "transparent",
        },

        btnText: {
            fontSize: 12,
            fontWeight: "500",
            color: colors.bg,
        },

        btnOutlineText: {
            color: colors.border,
        },
    });
    return styles;
}