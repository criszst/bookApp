import React, { useEffect, useState } from 'react';

import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  Chip,
  Text,
} from 'react-native-paper';

import Animated from 'react-native-reanimated';

import translatePtBr from '../utils/Translate/translatePtBr';

import { COLORS, FONTS, SIZES, icons, } from '../constants';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const GetBook = ({ item, navigation }) => {
  const [translateText, setTranslateText] = useState({
    categorie: ''
  })

  useEffect(() => {
    if (item) {
        translatePtBr(item.volumeInfo.categories).then(result => {
            if (result && result.length > 0) {
                setTranslateText({ ...translateText, categorie: String(result) });
            } else {
                setTranslateText({ ...translateText, categorie: item.volumeInfo.categories });
            }
        });
    } else {
        setTranslateText({ ...translateText, categorie: 'Não Encontrado'});
    }
}, [item]);


  return (
    <View style={{
      flex: 1, marginVertical: SIZES.base, backgroundColor: COLORS.black, marginRight: SIZES.base, marginLeft: 20,

    }}>
      <TouchableOpacity
        style={{
          flex: 1, flexDirection: 'row',
          borderColor: COLORS.lightGray, // Cor da borda
        }}
        onPress={() => navigation.navigate("BookDetail", { book: item })}
      >
        {/* CAPA DO LIVRO */}
        <Animated.Image
          source={{
            uri:
              item.volumeInfo.imageLinks?.thumbnail ||
              `http://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`
          }}
          resizeMode="cover"
          sharedTransitionTag="tag"
          style={{
            width: 110, height: 'auto', borderRadius: SIZES.radius,
          }}
        />

        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
          {/* NOME DO LIVRO E DO AUTOR */}
          <View>
            <Text style={{ paddingRight: SIZES.padding, ...FONTS.h4, color: COLORS.white }}>{item.volumeInfo.title == null ? 'Título Indisponivel' : item.volumeInfo.title}</Text>
            <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.volumeInfo.authors == null ? 'Autor não encontrado' : String(item.volumeInfo.authors).split(', ')}</Text>
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
              <View>
              </View>
            )
              : (

                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 50, borderRadius: SIZES.radius, marginBottom: SIZES.base }}>
                  <Chip
                    compact
                    onPress={() => { }}
                    selectedColor={COLORS.lightGreen}
                    textStyle={{ ...FONTS.body5 }}
                    style={{ backgroundColor: COLORS.darkGreen }}
                  >
                    {translateText.categorie}
                  </Chip>
                </View>

              )}


          </View>
        </View>
      </TouchableOpacity>

      {/* FAVORITAR */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 5, right: 15 }}
        onPress={() => console.log("Bookmark")}
      >
        <MaterialCommunityIcons name="heart-multiple-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default GetBook;