import React from "react";
import { Image, Text, View } from "react-native";
import { cardreview } from "../../../../styles";
import StarIcon from "../../../../assets/icon.png";


type reviewData = { 
    name?: string,
    text?: string,
}

const CardReview = ({name, text}: reviewData) => {
 return(
    <>
        <View style= {cardreview.name}>
            <Image source={StarIcon} />
            <Text style={cardreview.textname}>{name}</Text>
        </View>
        <View style={cardreview.reviewcontainer}>
            <Text style={cardreview.textreview}>{text}</Text>
        </View> 
    </>
 );
};

export default CardReview;