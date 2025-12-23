import { View, ScrollView } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks/theme/Themes';
import { createHomeStyle } from '@/assets/style/Home.style';
import Category from '@/components/Home/Category';
import Banner from '@/components/Home/Banner';
import Recommended from '@/components/Home/Recommended';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Home/Header';

const home = () => {

    const { colors } = useTheme();
    const styles = createHomeStyle(colors);
    return (
        <SafeAreaView  style={styles.main}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    <Header/>
                    <Category />
                    <Banner />
                    <Recommended />
                </ScrollView>
        </SafeAreaView>
    )
}

export default home