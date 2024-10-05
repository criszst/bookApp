import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    Animated,
    StyleSheet,
} from 'react-native';

import { useIsFocused, DarkTheme, } from '@react-navigation/native';

import { Appbar, useTheme, FAB } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { renderBottomButton } from '../utils/bookDetail/renderButtom'

import { FONTS, COLORS, SIZES, icons } from "../constants";
import axios from "axios";

import { LinearGradient } from 'expo-linear-gradient';
import { color } from "react-native-elements/dist/helpers";



const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: '#ffffff22', borderLeftWidth: 1 }}></View>
        </View>
    )
}


const BookDetail = ({ route, navigation }) => {
    const theme = useTheme()
    const { bottom } = useSafeAreaInsets();

    const [book, setBook] = useState(null);

    const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(0);

    const indicator = new Animated.Value(0);

    React.useEffect(() => {
        let { book } = route.params;
        setBook(book)
    }, [book])

    const [author, setAuthor] = useState('');


    async function authorInfo(query: string) {
        try {
            const requestData = await axios.get(
                `https://openlibrary.org/search/authors.json?q=${query}`,
            );
            const data = requestData.data;

            return data;
        } catch (error) {
            console.error("Erro na requisição > ", error);
            return [];
        }
    }

    function renderBookInfoSection() {
        const queryAuthor = encodeURIComponent(book.volumeInfo.authors[0]);

        authorInfo(queryAuthor).then((r) => {
            if (r.docs && r.docs.length > 0) {
                // setAuthor(r.docs[1])
            } else if (r.docs === undefined) {
                setAuthor('Sem informações do autor')
                console.log("Nenhum autor encontrado SOCORRO");
            }
        });




        return (

            <View style={styles.container}>
                <ImageBackground
                    source={{
                        uri:
                            book.volumeInfo.imageLinks?.thumbnail ||
                            `http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`
                    }}
                    resizeMode='cover'
                    blurRadius={5}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        opacity: 0.51,
                        backgroundColor: 'rgba(0,0,0,.25)',
                    }}
                />

                {/* Color Overlay */}
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    }}
                >
                </View>

                {/* Navigation header */}
                <View style={{ backgroundColor: COLORS.black }}>
                    <Appbar.Header mode="center-aligned" style={{ backgroundColor: COLORS.black}} statusBarHeight={20}>
                        <Appbar.BackAction onPress={() => navigation.goBack()} iconColor='#FFF'  />
                        <Appbar.Content title='Detalhes' disabled={true} titleStyle={{ color: '#FFF'}}  />
                        <Appbar.Action icon="dots-vertical" iconColor='#FFF'  onPress={() => console.log('a')} />
                    </Appbar.Header>

                </View>

                {/* Book Cover */}
                <View style={{ flex: 5, paddingTop: SIZES.padding2, alignItems: 'center' }}>
                    <Image
                        source={{
                            uri:
                                book.volumeInfo.imageLinks?.thumbnail ||
                                `http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`
                        }}
                        resizeMode="contain"
                        style={{
                            flex: 1,
                            width: 150,
                            height: "auto",
                            borderRadius: 30,
                        }}
                    />
                </View>

                {/* Nome do livro e do autor */}
                <View style={{ flex: 1.8, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>{book.volumeInfo.title}</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.lightGray3 }}>{book.volumeInfo.authors.join(', ')}</Text>
                </View>


            </View>
        )
    }

    function renderBookDescription() {

        const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight

        const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1

        return (
            <><View style={styles.authorBox}>
                <Image source={{ uri: 'https://www.shutterstock.com/image-vector/feather-author-writer-logo-design-260nw-1450954472.jpg' }} style={styles.authorImage} />
                <View>
                    <Text style={{ color: '#FFF' }}>{String(book.volumeInfo.authors[0] === undefined ? 'Sem Informações do Autor ' : book.volumeInfo.authors[0])}</Text>
                    <Text numberOfLines={3} style={styles.authorDetails}>
                        a
                        {/* {author.top_subjects[0]} */}
                    </Text>
                </View>
            </View>

                <View style={{ flex: 1, flexDirection: 'row', padding: 15 }}>
                    {/* Custom Scrollbar */}
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

                    {/* Description */}
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
                <View style={{ flex: 3 }}>
                    {renderBookInfoSection()}
                </View>

                {/* Description */}
                <View style={styles.bookInfo}>
                    {/* Book Info */}
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingVertical: 15,
                            margin: 10,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.black
                        }}
                    >
                        {/* Rating */}
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <Text style={{ ...FONTS.h3, color: COLORS.white }} >{book.volumeInfo.averageRating === undefined ? '?' : book.volumeInfo.averageRating}</Text>
                            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Avaliação</Text>
                        </View>

                        <LineDivider />

                        {/* Pages */}
                        <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.volumeInfo.pageCount}</Text>
                            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Páginas</Text>
                        </View>

                        <LineDivider />

                        {/* Language */}
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.volumeInfo.language}</Text>
                            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Idioma</Text>
                        </View>
                    </View>
                    {renderBookDescription()}
                </View>

                {/* Buttons */}
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
        flex: 3,
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
    authorImage: {
        width: 65,
        height: 65,
        borderRadius: 65,
        marginRight: SIZES.padding,
    },
    authorDetails: {
        marginTop: 5,
        opacity: 0.75,
        width: SIZES.padding - 120,
        color: '#FFF'
    },

    aboutBook: {
        fontSize: 17,
        lineHeight: 25,
        textAlign: 'justify',
        color: COLORS.lightGray4
    },
});

export default BookDetail;