import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import GoalList from './components/goalList'
import GoalInput from './components/goalInput'
import Hero from './components/hero'
import Side from './components/sideBar'
import List from './components/list'
import {AsyncStorage} from 'react-native';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);
  const [isSideMode, setisSideMode] = useState(false)
  const [test, setTest] = useState([])

  const addPlus = require('./assets/plus.png');

  const openSideBar = () => {
    setisSideMode(isSideMode? false:true)
  }

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }])
    setisAddMode(false)
  }
  const _storeData = async (goalTitle) => {
    try {
      await AsyncStorage.setItem('myGoals', JSON.stringify(courseGoals));
      setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }])
      setisAddMode(false)
      
    } catch (error) {
      // Error saving data
    }
  };
  const _retrieveData = async () => {
    
    try {
      
      const value = await AsyncStorage.getItem('myGoals');
      if (value !== null) {
        setTest(value)
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const deleteGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }
  const onCancelGoalInput = () => {
    setisAddMode(false)
  }
  const showAddGoal = () => {
    setisAddMode(true)
  }
  return (
    <View style={{flexDirection: "row", flex:1}}>
        <Side 
          vidu={isSideMode}
          close={openSideBar}
          />
      <View style={{flex:1}}>
        <Hero sideBar={openSideBar}/>
        <View style={styles.screen}>
          <GoalInput
            onAddGoal={_storeData}
            modal={isAddMode}
            onCancelInput={onCancelGoalInput}
          />
          <Button title="heleo" onPress={()=>_retrieveData()}/>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem={itemData => <GoalList id={itemData.item.id} onDelete={deleteGoalHandler} title={itemData.item.value} />}
          />
        </View>
        <TouchableWithoutFeedback onPress={showAddGoal}>
          <Image source={addPlus} style={styles.modal1}/>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  test1: {
    justifyContent: "center",
    flexDirection: "row"
  },
  modal1: {
    backgroundColor: 'black',
    borderRadius: 50,
    position: 'absolute',
    bottom: 70,
    right: 30,
    width: 50,
    height: 50
  },
   sidebar: {
     flex: 1,
     position: 'absolute',
     zIndex:100
   }
});
