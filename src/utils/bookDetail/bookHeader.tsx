import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Animated
} from 'react-native';

import EvilIcons from '@expo/vector-icons/EvilIcons';

import { FONTS, COLORS, SIZES } from "../../constants";

export function renderBookHeader(book, navigation) {
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

            {/* Header */}
            <View style={{ backgroundColor: COLORS.black, borderColor: COLORS.purple }}>


            </View>

            {/* Capa do livro */}
            <View style={{ flex: 3, paddingTop: SIZES.padding2, alignItems: 'center' }}>
            <TouchableOpacity
            style={{
                width: 40,
                height: 30,
                backgroundColor: COLORS.black,
                marginLeft: SIZES.padding,
                marginVertical: SIZES.base,
                borderRadius: SIZES.radius,
                alignItems: 'center',
                left: 150,
            }}
            onPress={() => navigation.goBack()}
        >
            <EvilIcons name="close" size={30} color="white" />

        </TouchableOpacity>

                <Animated.Image
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
                        borderRadius: 17,
                    }}
                />
            </View>

            {/* Nome do livro e do autor */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top: -20, }}>
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>{book.volumeInfo.title}</Text>
                <Text style={{ ...FONTS.body3, color: COLORS.lightGray3 }}>{book.volumeInfo.authors.join(", ")}</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    authorBox: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SIZES.padding,

    },
})