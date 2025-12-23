import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@/hooks/theme/Themes'
import { createMessageStyle } from '@/assets/style/Message.style'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import Call from '@/components/Messages/Call'
import Chat from '@/components/Messages/Chat';
import { ImageSourcePropType } from "react-native";

const index = () => {
    const { colors } = useTheme();
    const styles = createMessageStyle(colors);
    const [value, setValue] = useState("");
    const [btn, setBtn] = useState(false);
    const ChatData:{
        name:string,
        lastMessage:string,
        time:string,
        unread:number,
        path:ImageSourcePropType
    }[] = [
        {
            name: "Arjun .R",
            lastMessage: "On my way",
            time: "9:30AM",
            unread:2,
            path: require("@/assets/images/1.jpg")
        },
        {
            name: "Bablu .K",
            lastMessage: "Okay, I will do that",
            time: "12:30PM",
            unread:1,
            path: require("@/assets/images/2.jpg")
        },
        {
            name: "Nisha .S",
            lastMessage: "Currently working on it",
            time: "1:30PM",
            unread:3,
            path: require("@/assets/images/4.png")
        },
        {
            name: "Saddam .H",
            lastMessage: "Let's go",
            unread:1,
            time: "11:30AM",
            path: require("@/assets/images/5.jpg")
        },
        {
            name: "Sourav .K",
            lastMessage: "Don't ask me",
            time: "10:30AM",
            unread:3,
            path: require("@/assets/images/profile.jpg")
        }
    ]

    const callData:{
        name:string,
        recived:boolean,
        time:string,
        path:ImageSourcePropType
    }[] = [
        {
            name: "Arjun .R",
            recived: false,
            time: "9:30AM",
            path: require("@/assets/images/1.jpg")
        },
        {
            name: "Bablu .K",
            recived: true,
            time: "12:30PM",
            path: require("@/assets/images/2.jpg")
        },
        {
            name: "Nisha .S",
            recived: true,
            time: "1:30PM",
            path: require("@/assets/images/4.png")
        },
        {
            name: "Saddam .H",
            recived: true,
            time: "11:30AM",
            path: require("@/assets/images/5.jpg")
        },
        {
            name: "Sourav .K",
            recived: true,
            time: "10:30AM",
            path: require("@/assets/images/profile.jpg")
        }
    ]
    return (
        <SafeAreaView
            style={styles.messageContainer}
        >
            {/* Headers */}
            <View style={styles.headContainer}>
                {/* False means chat tab true means call tab */}
                {!btn && <View style={styles.container}>
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
                </View>}
                <View style={styles.headBtnContainer}>
                    <LinearGradient
                        colors={btn ? colors.gradients.background : colors.gradients.muted}
                        style={[styles.headBtnContain]}
                    >
                        <TouchableOpacity
                            style={styles.headBtn}
                            activeOpacity={0.8}
                            onPress={() => setBtn(!btn)}
                        >
                            <Text style={styles.headBtnText}>Chat</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient
                        colors={btn ? colors.gradients.muted : colors.gradients.background}
                        style={[styles.headBtnContain]}
                    >
                        <TouchableOpacity
                            style={styles.headBtn}
                            activeOpacity={0.8}
                            onPress={() => setBtn(!btn)}
                        >
                            <Text style={styles.headBtnText}>Call</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
            <View>
                {
                    btn
                        ? <Call data={callData}/>
                        : <Chat data={ChatData}/>
                }
            </View>
        </SafeAreaView>
    )
}

export default index