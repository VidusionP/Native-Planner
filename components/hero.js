import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal, Image, TouchableWithoutFeedback } from 'react-native';

export default function hero(props) {

    const hamburger = require('../assets/menu.png');
    const user = require('../assets/user.png');
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayName = new Date().getDay()
    const date = new Date().getDate()
    const month = new Date().getMonth()

    const fullDate = days[dayName] + ", " + monthNames[month] + " " + (date < 10 ? "0" + date : date)
    return (
        <View style={styles.heroContainer}>
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={props.sideBar}>
                    <Image source={hamburger} />
                </TouchableWithoutFeedback>
                <Image source={user} />
            </View>
            <View style={styles.fullDate}>
                <Text style={styles.title}>My Day</Text>
                <Text style={styles.date}>{fullDate}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heroContainer: {
        backgroundColor: "#D77A61",
        paddingTop: 50,
        paddingHorizontal: 20,
        height: "25%",
        justifyContent: "space-between"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    date: {
        color: 'white'
    },
    title: {
        color: 'white',
        fontSize: 30,
        paddingBottom: 10
    },
    fullDate: {
        paddingBottom: 20
    }
});
