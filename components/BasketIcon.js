import {Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import {selectBasketItems, selectBasketTotal} from "../features/basketSlice";
import {useNavigation} from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    if(items.length === 0)  return null;

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity
                onPress={()=> navigation.navigate("Basket")}
                className="mx-5 bg-[#00CCBB] rounded-lg p-4 flex-row items-center space-x-1">
                    <Text className="text-lg text-white font-extrabold bg-[#01A2B6] py-1 px-3">{items.length}</Text>
                    <Text className="text-lg font-extrabold text-white flex-1 text-center">View Basket</Text>
                    <Text className="text-lg text-white font-extrabold">
                        <Currency quantity={basketTotal} currency="MMK"/>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon;