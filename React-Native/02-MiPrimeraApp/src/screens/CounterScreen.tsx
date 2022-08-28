import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
  
  const [contador, setContador] = useState(10)
  
  return (

    <View style = {styles.container}>

      <Text style = {styles.title}>
        Contador: { contador } 
      </Text>

      <Fab
        title = '-1'
        position='bl'
        onPress={() => setContador(contador - 1)}
      />

      <Fab
        title='+1'
        position='br'
        onPress={() => setContador(contador + 1)}
      />

      {/* <TouchableOpacity
        style = {styles.fabLocationBR}
        onPress={() => setContador(contador + 1) }
      >
        <View style={styles.fab}>
          <Text style = {styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity> */}

    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 45,
    textAlign: 'center',
    top: -30,
  },

  fabLocationBR: {
    position: 'absolute',
    bottom: 70,
    right: 50,
  },

  fabLocationBL: {
    position: 'absolute',
    bottom: 70,
    left: 50,
  },

  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  fabText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
  }


})
