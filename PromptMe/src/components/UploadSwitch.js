import React, {useState} from 'react';
import { Switch, StyleSheet, View} from 'react-native'
import { Text } from 'react-native-paper'

export default function UploadSwitch(){

    const[isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        
        <View style={styles.container}>
            <Text> Private</Text>
            <Switch
            
                trackColor={{false: '#767577', true: '#c996f2'}}
                thumbColor={isEnabled ? '#9300ff' : '#ffffff'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: '7%',
      left: 190,
    },
  });

