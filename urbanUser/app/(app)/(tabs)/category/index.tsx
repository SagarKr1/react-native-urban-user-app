import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/hooks/theme/Themes'
import { createCategoryStyle } from '@/assets/style/Category.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Category from '@/components/Category/Category';

const category = () => {
    const { colors } = useTheme();
    const styles = createCategoryStyle(colors);
    const [value, setValue] = useState("");
    return (
        <SafeAreaView
            style={styles.main}
        >
            <View style={styles.container}>
                <Ionicons
                    name="search-outline"
                    size={20}
                    color={colors.primary}
                    style={styles.icon}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor={colors.textMuted}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    returnKeyType="search"
                />
            </View>
            <Category/>
        </SafeAreaView>
    )
}

export default category