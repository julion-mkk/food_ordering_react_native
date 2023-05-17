import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

const HomeScreen = ()=> {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default HomeScreen;