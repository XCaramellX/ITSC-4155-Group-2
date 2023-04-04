import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import { Text } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'


export default function UploadDrop(){

    const [selected, setSelected] = React.useState("");
  
    const data = [
        {key:'1', value:'Prompt 1'},
        {key:'2', value:'Prompt 2'},
        {key:'3', value:'Prompt 3'},
        {key:'4', value:'Prompt 4'},
        
    ]

    return(
        <View style={styles.container}>
            <Text>  Place holder for Prompt Display</Text>
            <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                save="value"
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: '5%',
      width: '75%',
      left: '12.5%', 
      zIndex: 1,
    },
  });

