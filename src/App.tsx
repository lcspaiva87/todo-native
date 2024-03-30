import React from 'react'
import { Image, TextInput, View, TouchableOpacity } from 'react-native'

export default function App() {
  return (
    <View className="bg-primary-600 w-full h-full  ">
      <View className="bg-primary-700 p-4 flex items-center py-16">
        <Image source={require('../assets/Logo.png')} />
      </View>

      <View className="flex flex-row items-center justify-center gap-1 -mt-10 ">
        <TextInput
          className=" placeholder:italic  bg-primary-500  border border-primary-700 rounded-md py-4 pl-4 "
          placeholder="Adicione uma nova tarefa"
          style={{ width: '70%' }}
          placeholderTextColor={'#808080'}
        />
        <TouchableOpacity className="bg-blue-dark rounded-lg items-center w-14 h-14 flex justify-center">
          <Image source={require('../assets/plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
