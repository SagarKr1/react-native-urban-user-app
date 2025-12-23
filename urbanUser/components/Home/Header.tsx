import { View, Text, Image,TextInput } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/hooks/theme/Themes'
import { createHomeStyle } from '@/assets/style/Home.style';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    const {colors} = useTheme();
    const styles=createHomeStyle(colors);
    const [value, setValue] = useState("");
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headContain}>
                <View style={styles.headCard}>
                    <Image
                    source={require('@/assets/images/profile.jpg')}
                    style={styles.headerImage}
                    />
                    <View>
                        <Text style={styles.title}>Sagar Kumar</Text>
                        <Text style={styles.headSubTitle}>Ramgarh, Jharkhand</Text>
                    </View>
                </View>
                <Ionicons name='cart' size={38} color={colors.primary}/>
            </View>
            <View style={styles.container1}>
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
        </View>
    )
}

export default Header