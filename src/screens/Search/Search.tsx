import React, { useState } from 'react';
import { View,  StyleSheet} from "react-native";

import SearchBook from '../../utils/search/searchBook';
import { COLORS, icons } from "../../constants";
import { myBooksData } from '../../components/booksData';
import { Searchbar, MD3Colors, useTheme } from 'react-native-paper';


const Search = ({ navigation }) => {

    const { isV3, colors } = useTheme();

    const[input, setInput] = useState(String)
    const [query, setSearchQuery] = React.useState({
        searchBarText: '',
      });
    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [isVisible, setIsVisible] = React.useState(false);

    const handleBlur = () => { 
        return console.log('odeio esse blur socorro'); 
    }; 

    return (
        <View style={styles.container}>
            <View style={styles.viewInput}>
            <Searchbar
      placeholder="Buscar Livros"
      onChangeText={(text) => setSearchQuery({...query, searchBarText: text})}

      mode="bar"
      style={styles.searchBar}
        value={query.searchBarText}
    />

            </View>
            <View >
                <SearchBook input={query.searchBarText} navigation={navigation} ></SearchBook>
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

    searchBar: {
        margin: 4,
    }
})

export default Search;