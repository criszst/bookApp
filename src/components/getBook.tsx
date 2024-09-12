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

import { Animated } from 'react-native';

const getBook = (item: { bookCover: ImageSourcePropType | undefined; bookName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; pageNo: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; readed: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; genre: string | string[]; }, navigation: { navigate: (arg0: string, arg1: { book: any; }) => void; }) => {

    const handleBookPress = (item) => {
        navigation.navigate("BookDetail", { book: item });
    };


    return (
        <View style={{ flex: 1, marginVertical: SIZES.base, backgroundColor: COLORS.black, marginRight: SIZES.base, marginLeft: 20,
            
        }}>
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row',
                    borderColor: COLORS.lightGray, // Cor da borda
                    borderWidth: 1, 
                 }}
                onPress={() => handleBookPress(item)}
            >
                {/* CAPA DO LIVRO */}
                <Image
                    source={item.bookCover}
                    resizeMode="cover"
                    style={{ width: 100, height: 150, borderRadius: 10,

                     }}
                />

                <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                    {/* NOME DO LIVRO E DO AUTOR */}
                    <View>
                        <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.white }}>{item.bookName}</Text>
                        <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.author}</Text>
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
                        <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.pageNo}</Text>

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
                    <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                        {
                            item.genre.includes("Adventure") &&
                            <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                <Text style={{ ...FONTS.body5, color: COLORS.lightGreen }}>Adventure</Text>
                            </View>
                        }
                        {
                            item.genre.includes("Romance") &&
                            <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                <Text style={{ ...FONTS.body5, color: COLORS.lightRed }}>Romance</Text>
                            </View>
                        }
                        {
                            item.genre.includes("Drama") &&
                            <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                <Text style={{ ...FONTS.body5, color: COLORS.lightBlue }}>Drama</Text>
                            </View>
                        }
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