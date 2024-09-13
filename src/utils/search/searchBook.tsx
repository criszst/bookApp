import React from "react";

import {
    View,
    FlatList,
} from 'react-native';

import { COLORS } from '../../constants';

import getBook from "../../components/getBook";


const SearchBook = ({ data, input, setInput, navigation }) => {

    return (
        <View style={{ backgroundColor: COLORS.black}}>
            <FlatList 
                data={data}
                renderItem={({item}) => {

                    if(input == "") {
                        return (
                            
                            getBook(item, navigation)
                            
                        )
                    }

                    if (item.bookName.toLowerCase().includes(input.toLowerCase())) {
                        return (

                            getBook(item, navigation)
                        )
                    }
                }}
            />
        </View>
    )
}

export default SearchBook;