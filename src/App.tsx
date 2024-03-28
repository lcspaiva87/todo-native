import React from 'react'
import { Image, TextInput, View, Text } from 'react-native'

export default function App() {
  return (
    <View className="bg-gray-100 w-full h-full ">
      <View className="bg-gray-700 p-4 flex items-center py-16">
        <Image source={require('../assets/Logo.png')} />
      </View>
      <TextInput
        className="bg-primary-100 py-4 "
        placeholder="Adicione uma nova tarefa"
      />
      <Text className="text-danger">aaa</Text>
    </View>
  )
}
