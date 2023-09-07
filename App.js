import { StyleSheet, Text, View, TextInput, Pressable, FlatList, Modal, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import Additem from './src/components/Additem';
import Listitem from './src/components/Listitem';
import CustomModal from './src/components/CustomModal';
export default function App() {

  const initialState =[
    { id: 1, text: "Harina" },
    { id: 2, text: "Leche" },
    { id: 3, text: "Huevo" },
  ]


  const [text, setText] = useState("");

  const [list, setList] = useState(initialState);


  const [isModalVisible, setIsModalVisible] = useState(false)


  const addItem = () => {
list.push({
id: Math.random(),
text: text,
});

setList(list);
setText("");
  };

  const clearList = () => {
    setList([]);
    setIsModalVisible(false);
  }

  return (
    <View style={styles.contenedor}>
<Modal isModalVisible={isModalVisible} clearList={clearList} setIsModalVisible={setIsModalVisible}/>

      <Text style={styles.titulo}>Lista de compras:</Text>
      
<Additem text={text} setText={setText} addItem={addItem} />

<FlatList data={list}
keyExtractor={item => item.id}
renderItem={({item}) =>(<Listitem item={item}/>) }
/>

<Pressable
  style={styles.button}  onPress={() => setIsModalVisible(true)}>
    <Ionicons name="md-trash-sharp" size={36} color="blue" />
    </Pressable>
  </View>
  );
}

const styles = StyleSheet.create({
contenedor: {
    alignItems: "center",
    justifyContent: "center",
  },

titulo:{
  marginTop:40,
  fontSize:30,
  borderBottomColor: "violet",
  borderBottomWidth: 5,

},


});
