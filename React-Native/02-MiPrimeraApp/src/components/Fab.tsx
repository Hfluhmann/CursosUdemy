import React from 'react'
import { Platform, View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';


interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}
export const Fab = ( { title, onPress, position = 'br' }: Props) => {


const ios = () => {
  return (
    <TouchableOpacity
      onPress = { onPress }
      activeOpacity={ 0.8 }
      style={[
        styles.fabLocation,
        (position === 'bl') ? styles.left : styles.right
      ]}>
        <View style={styles.fab}>
          <Text style={styles.fabText}> {title} </Text>
        </View>
    </TouchableOpacity>
  )
}

const android = () => {
  return (
    <View style={[
        styles.fabLocation,
        (position === 'bl') ? styles.left : styles.right
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#2300D4', false, 30)}
        >
        <View style={styles.fab}>
          <Text style={styles.fabText}> {title} </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

  return (Platform.OS === 'android')? android() : ios();

}

const styles = StyleSheet.create({

  fabLocation: {
    position: 'absolute',
    bottom: 70,
  },

  left: {
    left: 50,
  },

  right: {
    right: 50,
  },

  fab: {
    backgroundColor: '#3A15F2',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },

  fabText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',

  }


})
