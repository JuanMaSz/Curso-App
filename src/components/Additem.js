import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import React from 'react'

const Additem = ({text, setText, addItem}) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Escriba aquí..."
        
        value={text}
        onChangeText={(value) => setText(value)}
        />
      </View>

    <Pressable
  style={styles.button} onPress={() => addItem()}>
    <Entypo name="add-to-list" size={40} color="violet" />
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

  inputContainer:{
    marginTop: 15,
    borderColor: "violet",
    borderWidth: 1,
  },
  
  buttonContainer:{
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  
  },

  input:{
    padding: 5,
    fontSize: 20,
    width: 180,
  },
  
  
  
  button:{
    marginTop: 15,
    marginLeft: 15,
  },
})

export default Additem