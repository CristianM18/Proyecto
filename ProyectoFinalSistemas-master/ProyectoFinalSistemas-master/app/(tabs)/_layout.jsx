import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-1">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold':
                 'font-pregular'} text-xs`} style={{color: color}}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor:'#FFA001',
                tabBarInactiveTintColor:'#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#161622',
                    borderTopWidth: 1,
                    borderTopColor: '#232533',
                    height: 60
                }
            }}
            >
                <Tabs.Screen name="home" options={{
                    title: 'Home', headerShown: false, tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Inicio"
                            focused={focused}
                        />
                    )
                }}
                />
                <Tabs.Screen name="resuelve" options={{
                    title: 'Resuelve', headerShown: false, tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.bookmark}
                            color={color}
                            name="Resuelve"
                            focused={focused}
                        />
                    )
                }}
                />
                <Tabs.Screen name="crea" options={{
                    title: 'Crea', headerShown: false, tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.plus}
                            color={color}
                            name="Crea"
                            focused={focused}
                        />
                    )
                }}
                />
                <Tabs.Screen name="profile" options={{
                    title: 'Profile', headerShown: false, tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Perfil"
                            focused={focused}
                        />
                    )
                }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})