import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { pagination } from '../../../styles';
import ArrowIcon from "../../../assets/Seta.png"
import { generateList } from "../../utils/list";

type Props = {
    totalPages: number;
    activePage: number;
    onChange: (item: number) => void;
}

const Pagination = ({ totalPages, activePage, onChange }: Props) => {
    const items = generateList(totalPages);
    const previousClass = totalPages > 0 && activePage > 0 ? 'page-active' : 'page-inactive';
    const nextClass = (activePage + 1)  < totalPages ? 'page-active' : 'page-inactive';
    
    return (
    <>
        <View style={pagination.container}>
            <TouchableOpacity
            style={pagination.previousbutton}
            onPress={() => onChange(activePage -1)}>
            <Image source={ArrowIcon} style={pagination.previousimage} />
            </TouchableOpacity>
            {items.map(item => (
        <TouchableOpacity style={pagination.iten}  > 
        <Text style={pagination.textiten}> {item + 1} </Text>

        </TouchableOpacity>
            ))}
        </View>
   </>
    )
}
export default Pagination;