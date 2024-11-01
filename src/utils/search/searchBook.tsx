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
    // isso era pra ficar em um arquivo separado, mas dps eu arrumo pq bateu mó sono agr
    // const apiKey = 'AIzaSyC0M094uHsFpQwr-sIS1bAw0Lg9Kwnidgo';
      const params = {
        q: query,
        langRestrict: 'por',
      };
    
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?${query}` , { params });
        const { items } = response.data;
    
        return items.filter((item) => item.volumeInfo.pageCount > 0).slice(0, 14);
      } catch (error) {
        console.error('Erro :', error);
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