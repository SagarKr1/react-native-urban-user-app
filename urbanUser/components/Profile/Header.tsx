import { View, Text, Image } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks/theme/Themes'
import { createProfileStyle } from '@/assets/style/Profile.style';
import {LinearGradient} from "expo-linear-gradient"


const Header = () => {
    const { colors } = useTheme();
    const styles = createProfileStyle(colors);

    return (
        <View style={styles.header}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Profile</Text>
            </View>

            <LinearGradient
            colors={colors.gradients.background}
            start={{x:0,y:0}}
            end={{x:1,y:1}}
            style={styles.headerCard}
            >
                <View>
                    <Image
                    source={require("@/assets/images/profile.jpg")}
                    style={styles.image}
                    />
                </View>
                <View>
                    <Text style={styles.cardTextTitle}>Sagar Kumar</Text>
                    <Text style={styles.cardTextEmail}>sagar@example.com</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

export default Header