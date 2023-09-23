import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";


export default function Timer() {

    const [hour, setHour] = useState('')
    const [minute, setMinutes] = useState('')


    return (
        <View style={styles.timer}>
            <View style={styles.timeHeadlines}>
                <Text style={styles.timeText}>     Hours                       Minutes   </Text>
            </View>
            <View style={styles.timeContainer}>
                <ScrollPicker
                    dataSource={
                        (["1", "2", "3", "4", "5", "6"], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                            10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                            20, 21, 22, 23])
                    }
                    selectedIndex={0}
                    renderItem={(data, index) => {
                        return (
                            <View>
                                <Text>{data}</Text>
                            </View>
                        );
                    }}
                    onValueChange={(data, selectedIndex) => {
                        setHour(data)
                    }}
                    wrapperHeight={65}
                    wrapperWidth={150}
                    wrapperColor="#FFFFFF"
                    itemHeight={60}
                    highlightColor="#d8d8d8"
                    highlightBorderWidth={2}
                />
                <ScrollPicker
                    dataSource={
                        (["1", "2", "3", "4", "5", "6"], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                            41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                            51, 52, 53, 54, 55, 56, 57, 58, 59])
                    }
                    selectedIndex={0}
                    renderItem={(data, index) => {
                        return (
                            <View>
                                <Text>{data}</Text>
                            </View>
                        );
                    }}
                    onValueChange={(data, selectedIndex) => {
                        setMinutes(data)
                    }}
                    wrapperHeight={65}
                    wrapperWidth={150}
                    wrapperColor="#FFFFFF"
                    itemHeight={60}
                    highlightColor="#d8d8d8"
                    highlightBorderWidth={2}
                />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    timer: {
        maxHeight:90
    },

    timeText: {
        color: 'white',
    },
    timeContainer: {
        width: 200,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    }

});
