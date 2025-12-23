import { ColorScheme } from "@/hooks/theme/Themes";
import { StyleSheet } from "react-native";

export const createProfileStyle = (colors: ColorScheme) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.surface,
            paddingHorizontal: 10,
        },
        header: {
            paddingTop: 20
        },
        headerContainer: {
            padding: 10
        },
        headerText: {
            textAlign: "center",
            fontSize: 26,
            fontWeight: "700",
            color: colors.text,
            // ✅ Text shadow (WORKS)
            // textShadowColor: colors.shadow,
            // textShadowOffset: { width: 0, height: 3 },
            // textShadowRadius: 3,
        },
        headerCard: {
            flexDirection: "row",
            paddingLeft: 20,
            gap: 10,
            paddingTop: 10,
            paddingBottom: 10,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 20,
            shadowColor: colors.shadow,
            elevation: 6,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 5
        },
        imageComtainer: {
            padding: 10
        },
        image: {
            height: 50,
            width: 50,
            borderRadius: 50
        },
        cardTextTitle: {
            color: colors.text,
            fontSize: 18,
            fontWeight: "400"
        },
        cardTextEmail: {
            color: colors.textMuted,
            fontSize: 12
        },
        themeContainer: {
            paddingTop: 20
        },
        themeCard: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 10,
            borderColor: colors.border,
            borderWidth: 1,
            borderRadius: 10,
            shadowColor: colors.shadow,
            elevation: 6,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 5
        },
        theme: {
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
        },
        themeText: {
            fontSize: 14,
            fontWeight: "400",
            color: colors.text
        },
        modalTitleStyle: {
            color: colors.text,
            fontWeight: "700",
            fontSize: 18,
        },
        listItemContainerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
        },
        listItemLabelStyle: {
            color: colors.text,
            fontSize: 16,
        },
        selectedItemLabelStyle: {
            color: colors.primary,
            fontWeight: "700",
        },
        dropDown: {
            backgroundColor: colors.bg,
            borderColor: colors.border,
            color: colors.text
        },
        dropDownText: {
            color: colors.text
        },
        dropDownContainerStyle: {
            borderColor: colors.border,
            backgroundColor: colors.surface,
            color: colors.text,
        },
        placeholderStyle: {
            color: colors.textMuted
        },
        dropDownContainer: {
            justifyContent: "center",
            width: 200,
            height: 40
        },
        bodyContainer: {
            paddingTop: 10,
            gap: 10,
        },
        bodyCard: {
            flexDirection: "row",
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 10,
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 10,
            shadowColor:colors.shadow,
            elevation: 6,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 5
        },
        bodyCardContainer: {
            flexDirection: "row",
            gap:10
        },
        bodyText: {

        }
    });
    return styles;
}