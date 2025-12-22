import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '@/hooks/theme/Themes'
import { createSplashStyle } from '@/assets/style/Splash.style';
import { useRouter } from 'expo-router';

const index = () => {
    const { colors } = useTheme();
    const styles = createSplashStyle(colors);
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/first"); // change later based on logic
        }, 1000); // 1 second

        // cleanup (VERY IMPORTANT)
        return () => clearTimeout(timer);
    }, [])
    return (
        <View style={styles.main}>
            <Text style={styles.logonText}>Urban User</Text>
        </View>
    )
}

export default index