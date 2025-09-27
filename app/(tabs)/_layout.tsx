import { Ionicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'
import React from 'react'
const Tablayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor:"red",
        tabBarInactiveTintColor:"green",
        tabBarStyle:{
            backgroundColor: "#1e293b",
            height:90,
            paddingBottom:30,
            paddingTop:10,
            
        },
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:"600"
        },
        headerShown:false
    }}>
      <Tabs.Screen  
        name='index'
        options={{
            title:"Todos",
            tabBarIcon:({color,size}) =>(
                <Ionicons name='flash-outline' size={size} color={color}/>
            )
        }}
      />
      <Tabs.Screen  
        name='settings'
        options={{
            title:"Settings",
            tabBarIcon:({color,size}) =>(
                <Ionicons name='settings' size={size} color={color}/>
            )
        }}
      />
      <Tabs.Screen  
        name='dev'
        options={{
            title:"Developer",
            tabBarIcon:({color,size}) =>(
                <Ionicons name='logo-octocat' size={size} color={color}/>
            )
        }}
      />
    </Tabs>
  )
}

export default Tablayout