import { View, Text } from 'react-native'
import React, { useState, useMemo, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
// import { useTheme, ThemeName } from "@/hooks/Theme";
import { useTheme, ThemeName } from '@/hooks/theme/Themes'
import { createProfileStyle } from '@/assets/style/Profile.style';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ThemeSetting = () => {

    const { colors, setTheme, themeName } = useTheme();
    // const styles = createProfileStyle(colors);

    // ✅ recreate styles on theme change
    const styles = useMemo(
        () => createProfileStyle(colors),
        [colors]
    );

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<ThemeName | null>(themeName);

    // ✅ strongly typed dropdown items
    const [items, setItems] = useState<
        { label: string; value: ThemeName }[]
    >([
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" },
        { label: "Sunset", value: "sunset" },
        { label: "Neon", value: "neon" },
        { label: "Forest", value: "forest" },
        { label: "Ice Blue", value: "iceBlue" },
        { label: "Rose", value: "rose" },
        { label: "Amethyst", value: "amethyst" },
        { label: "Amoled", value: "amoled" },
    ]);

    // ✅ keep dropdown synced with current theme
    useEffect(() => {
        setValue(themeName);
    }, [themeName]);

    return (
        <View style={styles.themeContainer}>
            <LinearGradient
                colors={colors.gradients.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.themeCard}
            >
                <View style={styles.theme}>
                    <Ionicons name='calendar-outline' size={24} color={colors.primary}/>
                    <Text style={styles.themeText}>Themes</Text>
                </View>
                <View style={styles.dropDownContainer}>
                    <DropDownPicker<ThemeName>
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}

                        placeholder="Select Theme"
                        listMode="MODAL"        // ✅ FIX: show all items
                        modalTitle="Select Theme"
                        modalAnimationType="slide"

                        /* ✅ MODAL STYLING */
                        modalContentContainerStyle={{
                            backgroundColor: colors.bg,
                        }}

                        modalTitleStyle={styles.modalTitleStyle}

                        modalProps={{
                            transparent: false,
                        }}

                        /* ✅ ITEM STYLING */
                        listItemContainerStyle={styles.listItemContainerStyle}

                        listItemLabelStyle={styles.listItemLabelStyle}

                        selectedItemLabelStyle={styles.selectedItemLabelStyle}

                        /* ✅ CHECK ICON COLOR */
                        selectedItemContainerStyle={{
                            backgroundColor: colors.bg,
                        }}

                        /* ✅ CLOSE ICON */
                        closeIconContainerStyle={{
                            padding: 10,
                        }}

                        style={styles.dropDown}
                        dropDownContainerStyle={[
                            styles.dropDownContainerStyle,
                            { maxHeight: 400 }, // ✅ FIX: allow scrolling
                        ]}
                        textStyle={styles.dropDownText}
                        placeholderStyle={styles.placeholderStyle}
                        

                        onChangeValue={(val) => {
                            if (val) {
                                setTheme(val);
                            }
                        }}
                    />
                </View>
            </LinearGradient>

        </View>
    )
}

export default ThemeSetting