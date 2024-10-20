import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Animated
} from 'react-native';

import { useTheme } from '@react-navigation/native';
import { useCardAnimation } from '@react-navigation/stack';

import { Chip } from 'react-native-paper';

import { renderBookHeader } from "../../utils/BookDetail/bookHeader";
import { renderBottomButton } from '../../utils/BookDetail/renderButtom'

import { FONTS, COLORS, SIZES } from "../../constants";

import translatePtBr from "../../utils/Translate/translatePtBr";

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: '#ffffff22', borderLeftWidth: 1 }}></View>
        </View>
    )
}

const BookDetail = ({ route, navigation }) => {
    // talvez eu use no futuro, mas por enquanto vamo comentar ne 
    // const [author, setAuthor] = useState('');

    // async function authorInfo(query: string) {
    //     try {
    //         const requestData = await axios.get(
    //             `https://openlibrary.org/search/authors.json?q=${query}`,
    //         );
    //         const data = requestData.data;

    //         return data;
    //     } catch (error) {
    //         console.error("Erro na requisição > ", error);
    //         return [];
    //     }
    // }

    const [book, setBook] = useState(null);


    const [translateText, setTranslateText] = React.useState({
        categorie: 'Nao Encontrado',
    });


    const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(0);

    const indicator = new Animated.Value(0);

    useEffect(() => {
        let { book } = route.params;
        setBook(book)
    }, [book])

    useEffect(() => {
    if (book) {
        translatePtBr(book.volumeInfo.categories).then(result => {
            if (result && result.length > 0) {
                setTranslateText({ ...translateText, categorie: String(result) });
            } else {
                setTranslateText({ ...translateText, categorie: book.volumeInfo.categories });
            }
        });
    } else {
        setTranslateText({ ...translateText, categorie: 'Não Encontrado'});
    }
}, [book]);

  const { current } = useCardAnimation();
    

    function renderBookDescription() {

        const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight

        const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1

        return (
            <><View style={styles.authorBox}>
                <View >
                    <Text numberOfLines={3} style={styles.authorDetails}>
                    <Chip
                    compact
                    onPress={() => { }}
                    selectedColor={COLORS.lightGreen}
                    textStyle={{ ...FONTS.body5 }}
                    style={{ backgroundColor: COLORS.darkGreen }}
                  >
                    {translateText.categorie}
                  </Chip>
                    </Text>
                </View>
            </View>

                <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
                    {/* ScrollBar */}
                    <View style={{ width: 0, height: "100%", backgroundColor: COLORS.gray1 }}>
                        <Animated.View
                            style={{
                                width: 4,
                                height: indicatorSize,
                                backgroundColor: COLORS.lightGray4,
                                transform: [{
                                    translateY: Animated.multiply(indicator, scrollViewVisibleHeight / scrollViewWholeHeight).interpolate({
                                        inputRange: [0, difference],
                                        outputRange: [0, difference],
                                        extrapolate: 'clamp'
                                    })
                                }]
                            }} />
                    </View>

                    {/* Descrição */}
                    <ScrollView
                        contentContainerStyle={{ paddingLeft: 15 }}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        onContentSizeChange={(width, height) => {
                            setScrollViewWholeHeight(height);
                        }}
                        onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => {
                            setScrollViewVisibleHeight(height);
                        }}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: indicator } } }],
                            { useNativeDriver: false }
                        )}
                    >
                        <Text style={styles.aboutBook}>{book.volumeInfo.description !== undefined ? book.volumeInfo.description : 'Este livro não possui descrição'}</Text>
                    </ScrollView>
                </View></>
        )
    }



    if (book) {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>
                {/* Book Cover Section */}
                <Animated.View 
                
                style={{
                    flex: 3, 

                  transform: [
                    {
                      scale: current.progress.interpolate({
                        inputRange: [0.1, 1],
                        outputRange: [0.7, 1],
                        extrapolate: 'clamp',
                      }),
                    },
                  ]
                }}
                  >
                    {renderBookHeader(book, navigation)}
                </Animated.View >

                {/* Descrição */}
                <View style={styles.bookInfo}>
                    {/* Info */}
                    <Animated.View
                        style={{
                            flexDirection: 'row',
                            paddingVertical: 15,
                            margin: 10,
                            borderRadius: SIZES.radius,
                            backgroundColor: '#000001',
                            borderWidth: 5,
                            transform: [
                                {
                                  scale: current.progress.interpolate({
                                    inputRange: [0.1, 1],
                                    outputRange: [0.7, 1],
                                    extrapolate: 'clamp',
                                  }),
                                },
                              ]
                        }}
                    >
                        {/* Avaliação */}
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <Text style={{ ...FONTS.h3, color: COLORS.white }} >{book.volumeInfo.averageRating === undefined ? '?' : book.volumeInfo.averageRating}</Text>
                            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Avaliação</Text>
                        </View>

                        <LineDivider />

                        {/* Páginas */}
                        <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.volumeInfo.pageCount}</Text>
                            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Páginas</Text>
                        </View>

                        <LineDivider />

                        {/* Idioma */}
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.volumeInfo.language}</Text>
                            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Idioma</Text>
                        </View>

                    </Animated.View>

                    {renderBookDescription()}

                </View>
              
                        
                {/* Botoes */}
                <View style={{ height: 70, marginBottom: 30 }}>
                    {renderBottomButton(book, navigation)}
                </View>

              
            </View>
        )
    } else {
        return (<></>)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    bookInfo: {
        flex: 2.50,
    },

    bookAuthor: {
        fontSize: 18,
        color: 'gray',
    },

    authorBox: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SIZES.padding,

    },

    aboutBook: {
        fontSize: 15,
        lineHeight: 30,
        textAlign: 'justify',
        color: COLORS.lightGray4
    },
});

export default BookDetail;