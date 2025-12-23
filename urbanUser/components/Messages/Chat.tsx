import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "@/hooks/theme/Themes";
import { ImageSourcePropType } from "react-native";
import { createMessageStyle } from "@/assets/style/Message.style";

type ChatItem = {
    name: string;
    lastMessage: string;
    time: string;
    unread: number;
    path: ImageSourcePropType;
};

type Props = {
    data: ChatItem[];
};

export default function Chat({ data }: Props) {
    const { colors } = useTheme();
    const styles = createMessageStyle(colors);

    return (
        <FlatList
            data={data}
            keyExtractor={(_, i) => i.toString()}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.row} activeOpacity={0.7}>
                    {/* Avatar */}
                    <Image source={item.path} style={styles.avatar} />

                    {/* Center content */}
                    <View style={styles.center}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.message} numberOfLines={1}>
                            {item.lastMessage}
                        </Text>
                    </View>

                    {/* Right side */}
                    <View style={styles.right}>
                        <Text style={styles.time}>{item.time}</Text>

                        {item.unread > 0 && (
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{item.unread}</Text>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}
