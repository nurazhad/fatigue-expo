import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from "expo-router";
import { ScrollView, View, Text , Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomButton, Loader } from "../components";
import { images } from '../constants'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView className = "bg-secondary h-full">
        <ScrollView contentContainerStyle = {{
            height : '100%'
        }}>
            <View className = "w-full justify-center items-center h-full px-4">
            <Text className="text-3xl font-pblack"> Welcome!</Text>
            <CustomButton
            title="Start The Test"
            handlePress={() => router.push("/question")}
            containerStyles="w-full mt-7"
          />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}
