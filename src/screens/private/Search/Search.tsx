import React, { useState } from 'react';
import { View,  StyleSheet} from "react-native";
import { Button, SearchBar } from 'react-native-elements';

import SearchBook from '../../../utils/search/searchBook';
import { COLORS } from "../../../constants";
import { myBooksData } from '../../../components/booksData';


const Search = ({ navigation }) => {

    const[input, setInput] = useState(String)
    const [myBooks, setMyBooks] = React.useState(myBooksData);

    return (
        <View style={styles.container}>
            <View style={styles.viewInput}>
                <SearchBar
                    platform="android"
                    placeholder="Digite o nome do livro"
                    placeholderTextColor="#888"
                    onChangeText={(text) => setInput(text)}
                />

            </View>
            <View >
                <SearchBook input={input} con={input} style={styles.searchList}></SearchBook>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
    },

    viewInput: {
        padding: 15,
        marginTop: 20,
    },

    input: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
        fontSize: 15,
    },

    searchList: {
        height: 500,
    }
})

export default Search;