import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView
} from 'react-native';


import { COLORS, FONTS, SIZES, icons, } from '../../constants';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import getBook from "../../components/getBook";
import axios from "axios";


const SearchBook = ({ input, navigation }) => {
  const [books, setBooks] = useState([]);

  async function bookGoogle(query: String): Promise<any> {
    // const apiKey = 'AIzaSyC0M094uHsFpQwr-sIS1bAw0Lg9Kwnidgo';
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + query + '&langRestrict=pt'

    try {
      const requestBook = await axios.get(url);
      const data = requestBook.data;

      return data.items.slice(0, 7);



    } catch (error) {
      console.error("Erro nessa bosta se vira aí > ", error);
      return [];
    }
  }

  useEffect(() => {
    if (input) {
      bookGoogle(input).then(items => {
        setBooks(items);
      });
    }
  }, [input]);


  const renderItem = ({ item }) => {
    return (
      getBook(item, navigation)
    )
  };


  return (
    <SafeAreaView style={{ backgroundColor: COLORS.black }}>
      <View style={{ backgroundColor: COLORS.black, paddingBottom: 150 }}>
        {books.length > 0 ? (
          <FlatList
            data={books}
            renderItem={renderItem}

            keyExtractor={(item, index) => index.toString()}
          ></FlatList>

        ) : (
          <View
          style={{marginVertical: SIZES.base - 9, backgroundColor: COLORS.black, marginRight: SIZES.base, marginLeft: 20, }}
          >
             <Text style={{ color: '#FFF' }}>Nenhum livro encontrado</Text>
          </View>
         
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchBook;