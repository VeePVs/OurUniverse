import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

const DateText = ({date}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{date}</Text>
    </View>
  )
}

export default DateText