import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal, Image } from 'react-native';


export default function goalInput(props){
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }
    const addGoalHandler = () => {
      if (enteredGoal.length === 0) {
        return;
      }
      props.onAddGoal(enteredGoal);
      setEnteredGoal('')
    }
    const cancelHanderl = () => {
      props.onCancelInput()
      setEnteredGoal('')
    }
    return (
      <Modal visible={props.modal} animationType='fade' style={styles.modal} transparent={true}>
        <View style={styles.inputContainer}>
          <View style={styles.boo}>
            <Text style={styles.title}>Add New Goal</Text>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}/>
            <View style={styles.buttonContainer}>
              <Button title="ADD" onPress={addGoalHandler} />
              <Button title="CANCEL" color="red" onPress={()=> cancelHanderl()}/>
            </View>
          </View>
        </View>

      </Modal>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection:"row",
      justifyContent: "space-around",
      width: '80%',
      paddingTop: 10
    },
    inputContainer: {
      flex:1,
      alignItems: 'center',
      paddingTop: 150,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    test: {
      width: 50,
      height: 50,
      backgroundColor: 'black'
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10
    },
    boo: {
      width:'70%',
      backgroundColor: 'white',
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30
    },
    title: {
      fontSize:20,
      padding: 20,
      fontWeight: '700'
    }
    
  });
