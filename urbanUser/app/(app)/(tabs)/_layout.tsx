import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/theme/Themes";

export default function TabsLayout() {
    const { colors } = useTheme();

    return (
        <Tabs
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarStyle: {
                    height: 70,
                    backgroundColor: colors.bg,
                    borderTopWidth: 0,
                    elevation: 10,
                    paddingBottom: 8,
                    paddingTop: 8,
                },

                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textMuted,

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any;

                    switch (route.name) {
                        case "home":
                            iconName = focused ? "home" : "home-outline";
                            break;
                        case "category":
                            iconName = focused ? "grid" : "grid-outline";
                            break;
                        case "booking":
                            iconName = focused ? "calendar" : "calendar-outline";
                            break;
                        case "messages":
                            iconName = focused ? "chatbox-ellipses" : "chatbox-ellipses-outline";
                            break;
                        case "profile":
                            iconName = focused ? "person" : "person-outline";
                            break;
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={22}
                            color={color}
                        />
                    );
                },

                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                },
            })}
        >
            <Tabs.Screen name="home" options={{ title: "Home" }} />
            <Tabs.Screen name="category" options={{ title: "Category" }} />
            <Tabs.Screen name="bookings" options={{ title: "Bookings" }} />
            <Tabs.Screen name="messages" options={{ title: "Message" }} />
            <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        </Tabs>
    );
}
