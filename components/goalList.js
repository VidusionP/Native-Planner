import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements'

export default function goalList(props) {
    const [lineThrough, setlineThrough] = useState(false);
    const textUnderline = () => {
        setlineThrough(lineThrough ? false : true)
    }
    const trashImage = require('../assets/trash.png');
    return (
        <TouchableOpacity onPress={textUnderline}>
            < View style={styles.textRow} >
                <CheckBox checked={lineThrough} onPress={textUnderline}/>
                <View style={styles.row} >
                    <Text style={lineThrough ? styles.goku : styles.vegeta}>{props.title}</Text>
                    <TouchableWithoutFeedback onPress={props.onDelete.bind(this, props.id)}>
                        <Image source={trashImage} />
                    </TouchableWithoutFeedback>
                </View>
            </View >
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goku: {
        textDecorationLine: "line-through",
        fontSize: 20,
        width: "80%",
        color: '#C7C6C1'
    },
    vegeta: {
        fontSize: 20
    },
    textRow: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#EFF1F3',
        borderBottomColor: '#DBD3D8',
        borderBottomWidth: 1
    },
    trash: {
        resizeMode: 'contain',
        width: 100,
        height: 50,
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
         width: "80%"
    }
});

