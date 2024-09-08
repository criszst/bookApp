import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, } from '../../constants';

import getBook from "../../components/getBook";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const SearchBook = ({ data, input, setInput }) => {
    return (
        <View style={{ backgroundColor: COLORS.black}}>
            <FlatList 
                data={data}
                renderItem={({item}) => {

                    if(input == "") {
                        return (
                            getBook(item)
                        )
                    }

                    if (item.bookName.toLowerCase().includes(input.toLowerCase())) {
                        return (
                            getBook(item)
                        )
                    }
                }}
            />
        </View>
    )
}

export default SearchBook;