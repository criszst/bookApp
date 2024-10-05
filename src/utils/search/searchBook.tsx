import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  FlatList,
  SafeAreaView
} from 'react-native';

import { ActivityIndicator } from 'react-native';


import { COLORS, FONTS, SIZES, icons, } from '../../constants';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import GetBook from "../../components/getBook";
import axios from "axios";


const SearchBook = ({ input, navigation }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function bookGoogle(query: string): Promise<any> {
    // const apiKey = 'AIzaSyC0M094uHsFpQwr-sIS1bAw0Lg9Kwnidgo';
    try {

      const requestBook = await axios.get(
        'https://www.googleapis.com/books/v1/volumes?',
        {
          params: {
            q: query,
            langRestrict: 'pt',
            key: 'AIzaSyC0M094uHsFpQwr-sIS1bAw0Lg9Kwnidgo',
          },
        },
      );
      const data = requestBook.data;

      return data.items.slice(0, 7);



    } catch (error) {
      console.error("Erro nessa bosta se vira aí > ", error);
      return [];
    }
  }

  useEffect(() => {
    if (input) {
      setLoading(true)
      bookGoogle(input).then(items => {
        setBooks(items);
        setLoading(false)
      });
    }
  }, [input]);


  const renderItem = ({ item }) => {
    return <GetBook item={item} navigation={navigation} />;
  };


  return (
    <SafeAreaView style={{ backgroundColor: COLORS.black }}>
      <View style={{ backgroundColor: COLORS.black, paddingBottom: 150 }}>
      {loading ? (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      ) : (
        books.length > 0 ? (
          <FlatList
            data={books}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View
            style={{marginVertical: SIZES.base - 9, backgroundColor: COLORS.black, marginRight: SIZES.base, marginLeft: 20 }}
          >
            <Text style={{ color: '#FFF' }}>Nenhum livro encontrado</Text>
          </View>
        )
      )}
      </View>
    </SafeAreaView>
  );
};

export default SearchBook;