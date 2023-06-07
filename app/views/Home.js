import React, { useState } from "react";
import uuid from 'react-native-uuid';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
 
} from "react-native";

export const Home = () => {
  const [todo, setTask] = useState("");
  const [todos,setTodos]=useState([])
  const [isActive,setIsActive]=useState(false)
  const handleAddTodo = () => {
if (todo.length > 0){
  const newTodo={
    id:uuid.v4().toString(),
    todo:todo
  }
  console.log(newTodo.todo,newTodo.id)
 // console.log(newTodo.id)
  setTodos([...todos,newTodo])
  setTask('')
}
   
  };
  const handleDeleteTodo=(id)=>{
    console.log(id)
    const filteredTodos = todos.filter(item => item.id !== id);
    setTodos(filteredTodos);
  }
  
  const addMarked=()=>{
    
   console.log('hii')
   setIsActive(true)
    
   
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="add task here" value={todo}  onChangeText={(newData)=>{setTask(newData)}}/>
      
      <Button  title="Add" onPress={handleAddTodo} />

      <FlatList
      style={styles.list}
      data={todos}
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
       <View style={styles.todo}>
        <Text  onPress={addMarked} style={styles.todoText}>{item.todo}</Text>
        <BouncyCheckbox
        
          style={styles.checkbox}
        />
        <Button title="delete" onPress={()=>handleDeleteTodo(item.id)}></Button>
        
       </View>
  )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  list: {
    width: "100%",
    marginTop:10
  },
  todo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  todoText: {
    
    flex: 1,
    marginRight: 10,
    padding:10
  },
  checkbox: {
    alignSelf: 'center',
  }
  
});
