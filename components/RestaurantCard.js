import {Image, Text, TouchableOpacity, View} from "react-native";
import {MapPinIcon, StarIcon} from "react-native-heroicons/solid";

const RestaurantCard = ({
    id,
    imageUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    lat,
    long
    }) => {
    return (
        <TouchableOpacity className="bg-white rounded-md mr-3 shadow">
            <Image
                source={{uri: imageUrl}}
                className="h-36 w-64 rounded-md"/>

            <View className="m-3">
                <Text className="font-bold text-lg">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon size={20} color="gray" opacity={0.5} />
                    <Text className="text-xs text-gray-500">
                        <Text>{rating} . {genre}</Text>
                    </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color="gray" size={20} opacity={0.5} />
                    <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard;