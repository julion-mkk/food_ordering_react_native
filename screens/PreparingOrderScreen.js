import {SafeAreaView, Text, View} from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import {useNavigation} from "@react-navigation/native";
import {useEffect} from "react";

const PreparingOrderScreen = () => {
    const navigation = useNavigation();
    useEffect(()=> {
        setTimeout(()=> {
            navigation.navigate('Delivery');
        }, 4000);
    }, []);

    return (
        <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
            <Animatable.Image
                source={require('../assets/orderLoading.gif')}
                animation="slideInUp"
                iterationCount={1}
                className="w-96 h-96"/>

            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-white text-lg my-10 font-bold text-center">
                Waiting for restaurant to accept the order!
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color="white"/>
        </SafeAreaView>
    )
}

export default PreparingOrderScreen;