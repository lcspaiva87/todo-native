import React from 'react'
import { Image, Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-gray-600 w-full h-full ">
      <View className="bg-gray-700 p-4 flex items-center py-16">
        <Image source={require('../assets/Logo.png')} />
      </View>
      <Text className="text-red-800">Try editing me! 🎉</Text>
    </View>
  )
}
