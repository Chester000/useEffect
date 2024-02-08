



import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export const MyButton = () => {
const [count, setCount] = useState(0);

useEffect(() => { 
    console.log("This is mounted or updated count = " +count);
}, [])

useEffect(() => {
    const interval = setInterval(() => {
        setCount(c => c -1);
    }, 1000); 
}, [])

    return (
        <View>
            <Button
                title = "Click me"
                onPress={() => { setCount(c => c+1)  }}
            />
            
            <Text style={{ fontSize: 24}}>Count = {count}</Text>
        </View>
    );
}