import React from "react";
import {
    StyleSheet, Text, View,
    TouchableOpacity, Dimensions
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

const SimpleModal = (p) => {

    return(
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={styles.text}>Confirm prompt selection</Text>
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={[styles.text, {color: 'blue'}]}>Confirm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={[styles.text, {color: 'blue'}]}>Cancel</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        height: HEIGHT_MODAL,
        width: WIDTH - 80,
        paddingTop: 10,
        backgroundColor: '#9300ff',
        borderRadius: 10,   
    },
    textView: {
        flex: 1,
        alignItems: 'center'   
    },
    text: {
        margin: 5,
        fontSize: 24,
        fontWeight: 'bold'
    },
    viewButton: {
        width: '100%',
        flexDirection: 'row',  
    },
    button: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center'
    }
})

export { SimpleModal }