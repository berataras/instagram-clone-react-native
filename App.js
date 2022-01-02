import {SafeAreaView, StyleSheet, Image} from "react-native";
import {NavigationContainer} from "@react-navigation/native";

import {
    HomeScreen,
    ProfileScreen,
    ReelScreen,
    SearchScreen,
    ShopScreen
} from './src/screens';

import {
    HomeFilledIcon,
    HomeIcon,
    ReelFilledIcon,
    ReelIcon,
    SearchFilledIcon,
    SearchIcon,
    ShopFilledIcon, ShopIcon
} from "./src/icons";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StatusBar} from "expo-status-bar";
const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarActiveTintColor: '#000',
    tabBarInactiveTintColor: '#333'
}


export default function App() {
  return (
    <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
            <StatusBar style="dark" />
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen
                    name="home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({focused, color}) => (
                            focused ?
                                <HomeFilledIcon fill={color} /> :
                                <HomeIcon fill={color} />
                        )
                    }}
                />

                <Tab.Screen
                    name="search"
                    component={SearchScreen}
                    options={{
                        tabBarIcon: ({focused, color}) => (
                            focused ?
                                <SearchFilledIcon fill={color} /> :
                                <SearchIcon fill={color} />
                        )
                    }}
                />

                <Tab.Screen
                    name="reel"
                    component={ReelScreen}
                    options={{
                        tabBarIcon: ({focused, color}) => (
                            focused ?
                                <ReelFilledIcon fill={color} /> :
                                <ReelIcon fill={color} />
                        )
                    }}
                />

                <Tab.Screen
                    name="shop"
                    component={ShopScreen}
                    options={{
                        tabBarIcon: ({focused, color}) => (
                            focused ?
                                <ShopFilledIcon fill={color} /> :
                                <ShopIcon fill={color} />
                        )
                    }}
                />

                <Tab.Screen
                    name="profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({focused, color}) => {
                            return <Image
                                style={{
                                    ...styles.avatar,
                                    borderWidth: focused ? 1 : 0
                                }}
                                source={{
                                    uri: 'https://avatars.githubusercontent.com/u/38633987?v=4',
                                }}
                            />
                        }
                    }}
                />
            </Tab.Navigator>
        </SafeAreaView>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    avatar: {
        width: 24,
        height: 24,
        borderRadius: 24,
        borderColor: '#000'
    }
})


