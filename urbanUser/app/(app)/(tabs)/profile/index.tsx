import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks/theme/Themes'
import { createProfileStyle } from '@/assets/style/Profile.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Profile/Header';
import ThemeSetting from '@/components/Profile/ThemeSetting';
import Body from '@/components/Profile/Body';

const index = () => {
    const { colors } = useTheme();
    const styles = createProfileStyle(colors)
    return (
        <SafeAreaView
            style={styles.container}
        >
            <Header />
            <ThemeSetting/>
            <Body/>
        </SafeAreaView>
    )
}

export default index