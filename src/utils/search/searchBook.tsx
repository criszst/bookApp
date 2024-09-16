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


const SearchBook = ({ input }) => {
  const [books, setBooks] = useState([]);

  async function bookGoogle(query: String): Promise<any> {
    // const apiKey = 'AIzaSyC0M094uHsFpQwr-sIS1bAw0Lg9Kwnidgo';
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + query

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


const renderItem = ({ item }): React.JSX.Element => (
  <View style={{ flex: 1, marginVertical: SIZES.base, backgroundColor: COLORS.primary, marginRight: SIZES.base, marginLeft: 20,
            
  }}>
      <TouchableOpacity
          style={{ flex: 1, flexDirection: 'row',
              borderColor: COLORS.lightGray, // Cor da borda
           }}
      >
          {/* CAPA DO LIVRO */}
          <Image
               src={`http://books.google.com/books/content?id=${
                item.id
              }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
              resizeMode="cover"
              style={{ width: 110, height: 'auto', borderRadius: 10,

               }}
          />

          <View style={{ flex: 1, marginLeft: SIZES.radius }}>
              {/* NOME DO LIVRO E DO AUTOR */}
              <View>
                  <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.white }}>{item.volumeInfo.title}</Text>
                  <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{String(item.volumeInfo.authors).replace(' ', ', ')}</Text>
              </View>

              {/* INFO LIVRO */}
              <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                  <Image
                      source={icons.page_filled_icon}
                      resizeMode="contain"
                      style={{
                          width: 20,
                          height: 20,
                          tintColor: COLORS.lightGray
                      }}
                  />
                  <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.volumeInfo.pageCount}</Text>

                  <Image
                      source={icons.read_icon}
                      resizeMode="contain"
                      style={{
                          width: 20,
                          height: 20,
                          tintColor: COLORS.lightGray
                      }}
                  />
                  <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.readed}</Text>
              </View>

              {/* GÊNERO */}
              <View style={{ flexDirection: 'row', marginTop: SIZES.base, marginBottom: SIZES.base }}>
      
                            <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                <Text style={{ ...FONTS.body5, color: COLORS.lightGreen }}>{item.volumeInfo.categories}</Text>
                            </View>

                            </View>
          </View>
      </TouchableOpacity>

      {/* BOTAO DE FAVORITAR */}
      <TouchableOpacity
          style={{ position: 'absolute', top: 5, right: 15 }}
          onPress={() => console.log("Bookmark")}
      >
          <MaterialCommunityIcons name="heart-multiple-outline" size={24} color="white" />
      </TouchableOpacity>
  </View>
);

return (
  <SafeAreaView>
  <View style={{ backgroundColor: COLORS.secondary, paddingBottom: 150}}>
    {books.length > 0 ? (
        <FlatList
        data={books}
        renderItem={renderItem}
        
        keyExtractor={(item, index) => index.toString()}
        ></FlatList>
       
    ) : (
      <Text style={{color: '#FFF'}}>Nenhum livro encontrado</Text>
    )}
  </View>
  </SafeAreaView>
);
};

export default SearchBook;