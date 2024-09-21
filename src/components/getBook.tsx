import React, { useRef } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
} from 'react-native';


import { COLORS, FONTS, SIZES, icons, } from '../constants';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const getBook = (item, navigation ) => {

    const handleBookPress = (item) => {
        navigation.navigate("BookDetail", { book: item });
    };


    return (
        <View style={{
            flex: 1, marginVertical: SIZES.base, backgroundColor: COLORS.black, marginRight: SIZES.base, marginLeft: 20,
      
          }}>
            <TouchableOpacity
              style={{
                flex: 1, flexDirection: 'row',
                borderColor: COLORS.lightGray, // Cor da borda
              }}
            >
              {/* CAPA DO LIVRO */}
              <Image
                src={`http://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                resizeMode="cover"
                style={{
                  width: 110, height: 'auto', borderRadius: SIZES.radius,
                }}
              />
      
              <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                {/* NOME DO LIVRO E DO AUTOR */}
                <View>
                  <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.white }}>{item.volumeInfo.title == null ? 'Título Indisponivel' : item.volumeInfo.title}</Text>
                  <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.volumeInfo.authors == null ? 'Autor não encontrado' : String(item.volumeInfo.authors).replace(' ', ', ')}</Text>
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
      
                  {item.volumeInfo.categories == null ? (
                   <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 50, borderRadius: SIZES.radius, marginBottom: SIZES.base }}>
                      <Text style={{ ...FONTS.body5, color: COLORS.lightGreen }}>Sem Gênero</Text>
                    </View>
                  )
                    : (
      
                      <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 50, borderRadius: SIZES.radius, marginBottom: SIZES.base }}>
                        <Text style={{ ...FONTS.body5, color: COLORS.lightGreen }}>{item.volumeInfo.categories}</Text>
                      </View>
      
                    )}
      
      
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
    )
}

export default getBook;