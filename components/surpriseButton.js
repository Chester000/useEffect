/**
 * 
 * 
 * 
 * 
 * **/

import { useState } from 'react';
import { Button, View } from 'react-native';

export const SurpriseButton = () => {
    const [theTitle, setTheTitle] = useState("This will be great...");

const click = () => {
    const theTimeOut = setTimeout(() => {
            setTheTitle("Surprise");
        }, 2000);
}

const reset = () => {
    setTheTitle("This will be great again..");
}

    return (
        <View>
            <Button
                title={theTitle}
                onPress={(theTitle=="Surprise")?reset:click} 
                />

        </View>
    );
}