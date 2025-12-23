import { View, Text, Image } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks/theme/Themes';
import { createHomeStyle } from '@/assets/style/Home.style';

const Banner = () => {
    const { colors } = useTheme();
    const styles = createHomeStyle(colors);

    return (
        <View style={styles.bannerContainer}>
            <View style={styles.bannerImageContainer}>
                <Image
                    style={styles.bannnerImage}
                    source={require('@/assets/images/banner.jpg')}
                />
            </View>
        </View>
    )
}

export default Banner