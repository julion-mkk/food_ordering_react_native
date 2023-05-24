import {View, Text, TouchableOpacity, Image} from "react-native";

const CategoryCard = ({imageUrl , title})=> {
    return (
        <TouchableOpacity className="mr-3 relative">
            <Image source={{uri: imageUrl,}} className="h-20 w-20 rounded"/>
            <Text className="absolute left-1 bottom-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    )
}

export  default CategoryCard;