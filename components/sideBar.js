import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal, Image, TouchableWithoutFeedback } from 'react-native';

export default function hero(props){

    const trash = require('../assets/trash.png');

    return (
        <Modal visible={props.vidu} transparent={true}>
            <View style={styles.sideBar}>
                <View style={styles.side}>
                    <TouchableWithoutFeedback onPress={props.close}>
                        <Image source={trash} style={{margin:100}}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    sideBar: {
        width: "100%",
        height: "100%",
        backgroundColor:'rgba(0,0,0,0.5)',
        position: "absolute",
        zIndex: 99
    },
    side: {
        width:"60%",
        height: "100%",
        backgroundColor: "white"
    }
  });
