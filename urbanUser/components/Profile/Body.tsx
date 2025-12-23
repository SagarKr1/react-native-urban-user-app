import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks/theme/Themes'
import { createProfileStyle } from '@/assets/style/Profile.style';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient"


const Body = () => {
    type IconName = React.ComponentProps<typeof Ionicons>['name'];
    const { colors } = useTheme();
    const styles = createProfileStyle(colors);

    const data: {
        "icon": IconName,
        "name": string
    }[] = [
            {
                "icon": "create-outline",
                "name": "Edit Profile"
            },
            {
                "icon": "notifications-outline",
                "name": "Notifications"
            },
            {
                "icon": "location-outline",
                "name": "Manage Address"
            },
            {
                "icon": "newspaper-outline",
                "name": "FAQ"
            },
            {
                "icon": "help-outline",
                "name": "Help Center"
            },
            {
                "icon": "log-out-outline",
                "name": "LogOut"
            }
        ]
    return (
        <View style={styles.bodyContainer}>
            {
                data.map((item, index) => {
                    return (
                        <LinearGradient
                        key={index}
                            colors={colors.gradients.background}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}style={styles.bodyCard}
                        >
                            <View style={styles.bodyCardContainer}>
                                <Ionicons name={item.icon} size={24} color={colors.primary}/>
                                <Text style={styles.bodyText}>{item.name}</Text>
                            </View>
                            <Ionicons name='arrow-forward-outline' size={24} color={colors.text}/>

                        </LinearGradient>
                    )
                })
            }
        </View>
    )
}

export default Body