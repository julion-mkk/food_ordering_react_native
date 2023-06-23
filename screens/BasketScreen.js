import {Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurant} from "../features/restaurantSlice";
import {selectBasketItems} from "../features/basketSlice";

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();
    return (
        <View>
            <Text>Basket Screen</Text>
        </View>
    )
}

export default BasketScreen;