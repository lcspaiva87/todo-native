import { TextInput } from 'react-native'

export function Input() {
  return (
    <TextInput
      className="bg-yellow py-4 placeholder:text-white border border-danger"
      placeholder="Adicione uma nova tarefa"
    />
  )
}
