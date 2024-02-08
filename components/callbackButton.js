/**
 * 
 * 
 * 
 * 
 * **/

import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export const CallbackButton = ({ id, callback }) => {

    return (
        <View>
            <Button
            title={"Button # " + id}
            onPress={() => callback(id)}
            />
        </View>
    )
}