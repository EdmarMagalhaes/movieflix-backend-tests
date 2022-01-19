import React from "react";
import { Image, Text, View } from "react-native";
import { cardreview } from "../../../../styles";
import StarIcon from "../../../../assets/icon.png";

const CardReview = () => {
 return(
    <View style={cardreview.card}>
        <View style= {cardreview.name}>
            <Image source={StarIcon} />
            <Text style={cardreview.textname}>Maria Silva</Text>
        </View>
        <View style={cardreview.reviewcontainer}>
            <Text style={cardreview.textreview}>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</Text>
        </View>

    </View>
 );
};

export default CardReview;