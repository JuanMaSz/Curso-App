import { View, Text, Modal, Pressable } from 'react-native'
import React from 'react'

const CustomModal = ({isModalVisible, clearList, setIsModalVisible}) => {
return (
    <Modal style={styles.modalStyle} visible={isModalVisible}>

    <View>
<Text> ¿Estas seguro que deseas eliminar la lista?</Text>

<Pressable style={styles.buttonModal} onPress={() => clearList()}>
    <Text>Si</Text>
</Pressable>

<Pressable style={styles.buttonModal} onPress={() => setIsModalVisible(false)}>
    <Text>No</Text>
</Pressable>

</View>

</Modal>
)
}

export default CustomModal