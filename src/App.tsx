import React, { useEffect } from 'react'
import {
  Image,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Alert,
  ScrollView,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Task } from './@types/task'
import { TaskCard } from './components/Task'
export default function App() {
  const STORAGE_KEY = 'task'

  const [listTask, setListTask] = React.useState<Task[]>([])
  const [task, setTask] = React.useState<string>('')
  const addTask = async () => {
    if (!task) {
      Alert.alert('Digite uma tarefa')
      return
    }
    const newTask = { id: Date.now(), name: task, active: false }
    const tasks = [...listTask, newTask]

    try {
      const jsonValue = JSON.stringify(tasks)
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
      setListTask(tasks)
      setTask('')
      Alert.alert('Tarefa salvo com sucesso')
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    const getTasks = async () => {
      try {
        const value = await AsyncStorage.getItem(STORAGE_KEY)
        if (value !== null) {
          setListTask(JSON.parse(value))
        }
      } catch (e) {
        console.log(e)
      }
    }
    getTasks()
  }, [])
  return (
    <View className="bg-primary-600 w-full h-full  ">
      <View className="bg-primary-700 p-4 flex items-center py-16">
        <Image source={require('../assets/Logo.png')} />
      </View>

      <View className="flex flex-row items-center justify-center gap-1 -mt-10 ">
        <TextInput
          value={task}
          onChangeText={(text) => setTask(text)}
          className="text-white placeholder:italic  bg-primary-500  border border-primary-700 rounded-md py-4 pl-4 w-72 focus:outline-none  focus:border-purple"
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={'#808080'}
        />
        <TouchableOpacity
          onPressOut={addTask}
          className="bg-blue-dark rounded-lg items-center w-14 h-14 flex justify-center"
        >
          <Image source={require('../assets/plus.png')} />
        </TouchableOpacity>
      </View>
      <View className="px-6">
        <View className="flex justify-center flex-row items-center gap-36 py-8 ">
          <View className="flex justify-center flex-row gap-2 items-center">
            <Text className="text-blue text-sm font-bold">Criadas</Text>
            <Text className="text-white bg-primary-400 text-base rounded-full  px-2">
              0
            </Text>
          </View>
          <View className="flex justify-center flex-row gap-2 items-center">
            <Text className="text-purple text-sm font-bold">Concluídas</Text>
            <Text className="text-white bg-primary-400 text-base rounded-full  px-2">
              0
            </Text>
          </View>
        </View>

        <View className="border-t border-primary-300 opacity-30" />

        {listTask.length ? (
          <ScrollView>
            {listTask.map((task) => (
              <View style={{ marginBottom: 2, marginTop: 10 }} key={task.id}>
                <TaskCard name={String(task.name)} />
              </View>
            ))}
          </ScrollView>
        ) : (
          <View className="flex flex-col gap-2 mt-4 items-center">
            <Image source={require('../assets/Clipboard.png')} />
            <Text className="flex font-bold text-sm text-primary-400">
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text className="flex font-normal text-sm text-primary-400">
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      </View>
    </View>
  )
}
