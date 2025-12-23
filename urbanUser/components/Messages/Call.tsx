import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/theme/Themes";
import { createMessageStyle } from "@/assets/style/Message.style";
import { ImageSourcePropType } from "react-native";


type CallItem = {
    name: string;
    recived: boolean;
    time: string;
    path: ImageSourcePropType;
};

type Props = {
    data: CallItem[];
};

export default function Call({ data }: Props) {
    const { colors } = useTheme();
    const styles = createMessageStyle(colors);

    return (
        <FlatList
            data={data}
            keyExtractor={(_, i) => i.toString()}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
                <View style={styles.row}>
                    {/* Avatar */}
                    <Image
                        source={item.path}
                        style={styles.avatar}
                    />

                    {/* Name + time */}
                    <View style={styles.center}>
                        <Text style={styles.name}>{item.name}</Text>

                        <View style={styles.timeRow}>
                            <Ionicons
                                name={item.recived ? "arrow-up" : "arrow-down"}
                                size={14}
                                color={item.recived ? colors.success : colors.danger}
                            />
                            <Text
                                style={[
                                    styles.time,
                                    { color: item.recived ? colors.success : colors.danger },
                                ]}
                            >
                                {item.time}
                            </Text>
                        </View>
                    </View>

                    {/* Call icon */}
                    <TouchableOpacity style={styles.callBtn}>
                        <Ionicons name="call" size={18} color={colors.primary} />
                    </TouchableOpacity>
                </View>
            )}
        />
    );
}
