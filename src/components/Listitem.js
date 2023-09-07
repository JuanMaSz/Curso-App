import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Listitem = ({ item }) => {
return (
    <View>
    <Text style={styles.itemList}> {item.text}</Text>
    </View>
)
}

const styles = StyleSheet.create({

    itemList:{
        fontSize: 20,
        marginVertical: 2,
},
})

export default Listitem