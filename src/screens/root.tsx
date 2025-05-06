import { SCREENS, STACKS } from "@/utils/constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Overview from "./Overview";
import Notifications from "./Notifications";
import Settings from "./Settings";
import { Home, Book, Settings2, Bell, Plus, ChevronLeft, } from 'lucide-react-native'
import { TouchableOpacity, View } from "react-native";
import { colors } from "@/utils/colors";
import Entries from "./Entries";
import Add from "./Add";

const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();
const AddStack = createNativeStackNavigator();

export const RootNavigator = () => {
    return <Stack.Navigator
        initialRouteName={STACKS.MAIN_STACK}
        screenOptions={{
            headerShown: false,

        }}
    >
        <Stack.Screen component={TabNavigator} name={STACKS.TABS_STACK} />
    </Stack.Navigator>
}

const TabNavigator = () => {
    return <TabStack.Navigator initialRouteName={SCREENS.ENTRIES} screenOptions={tabsNavigationOptions} >
        <TabStack.Screen options={{
            headerShadowVisible: false,
        }} name={SCREENS.OVERVIEW} component={Overview} />

        <TabStack.Screen
            options={{
                headerShown: false
            }}
            name={SCREENS.ENTRIES} component={Entries} />
        <TabStack.Screen
            options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
            }}
            name={STACKS.ADD_STACK} component={AddNavigator} />
        <TabStack.Screen name={SCREENS.NOTIFICATIONS} component={Notifications} />
        <TabStack.Screen name={SCREENS.SETTINGS} component={Settings} />

    </TabStack.Navigator>
}

const AddNavigator = ({ navigation }: { navigation: any }) => {
    return <AddStack.Navigator screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: colors.bgSecondary }
    }}>
        <TabStack.Screen
            options={{
                headerShown: true,
                headerTitle: 'Create Entry',
                headerTitleStyle: {
                    fontSize: 20,
                    color: '#111818',
                },
                headerTitleAlign: 'center',
                headerLeft: () => {
                    return <ChevronLeft color='#000' width={30} height={30} onPress={() => navigation.navigate(SCREENS.OVERVIEW)} />
                }
            }}
            name={SCREENS.ADD} component={Add} />
    </AddStack.Navigator>
}


const tabsNavigationOptions = ({ route }: any) => ({

    tabBarIcon: ({ focused, color }: any) => {
        let Icon = Home; // default

        if (route.name === SCREENS.OVERVIEW) { Icon = Home };
        if (route.name === SCREENS.SETTINGS) { Icon = Settings2 };
        if (route.name === SCREENS.NOTIFICATIONS) { Icon = Bell };
        if (route.name === SCREENS.ENTRIES) { Icon = Book };
        if (route.name === STACKS.ADD_STACK) { Icon = Plus };


        return <View style={{ display: 'flex', alignItems: 'center', height: 53, justifyContent: 'center', gap: 4 }}>
            {route.name !== STACKS.ADD_STACK ? <Icon color={focused ? colors.primary : '#000'} /> : (
                <View style={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.secondary, borderRadius: 999, marginTop: -50, }}>
                    <Plus width={30} height={30} strokeWidth={3} color={colors.bgPrimary} />
                </View>
            )}
        </View >
    },
    headerStyle: {
        backgroundColor: colors.bgSecondary,
    },
    headerTitleStyle: {
        fontSize: 24,
        color: '#111818',
    },
    tabBarShowLabel: false,
    tabBarStyle: {
        backgroundColor: colors.bgPrimary,
        height: 63,
        paddingBottom: 0,
        marginBottom: 0

    }
})