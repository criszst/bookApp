import React, { useState } from 'react';
import { View, Text,  StyleSheet} from "react-native";
import { SearchBar } from 'react-native-elements';

import SearchBook from '../../../utils/search/searchBook';
import { COLORS } from "../../../constants";
import { myBooksData } from '../../../components/booksData';

const list_post = [
    {
      id: '1',
      description:
        'JavaScript is a single-threaded, non-blocking, and asynchronous programming language. This means that it has only one execution thread, but it can handle asynchronous operations efficiently without blocking the execution of the entire program. This is achieved through a mechanism called the event loop.',
      title:
        'JavaScript s Single-Threaded Bliss: Because Who Needs Multithreading Anyway',
    },
    {
      id: '2',
      description:
        'In our working time, sometimes we need to create some simple, light, quick components to render to any technology stacks. For example we build a screen loader component before js bundle back to expect users waiting',
      title: 'Light weight (5k) JS framework to create Web Components',
    },
]


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
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    rounded
                />

            </View>
            <View>
                <SearchBook data={myBooks} input={input} setInput={setInput}></SearchBook>
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
        padding: 20,
        marginTop: 20,
    },

    input: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
        fontSize: 15,
    }
})

export default Search;