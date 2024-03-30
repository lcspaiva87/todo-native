import { View, TouchableOpacity, Text, Image } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

export const TaskCard: React.FC<{
  name: string
  active: boolean
  handCheckTask: () => void
  handDeleteTask: () => void
}> = ({ name, active, handCheckTask, handDeleteTask }) => {
  return (
    <View className=" flex flex-row justify-between items-center bg-primary-500 pl-3 pr-4 py-3 rounded-lg  ">
      <View className="flex flex-row">
        <BouncyCheckbox
          size={25}
          fillColor="#8284FA"
          unfillColor="#262626"
          innerIconStyle={{ borderWidth: 2 }}
          onPress={handCheckTask}
          isChecked={active}
        />
        <Text
          className={`text-white ${active ? `line-through` : `no-underline`}`}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={handDeleteTask}>
        <Image source={require('../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  )
}
