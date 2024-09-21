import { View, TouchableOpacity, FlatList, Text, Image, Dimensions, useWindowDimensions, SafeAreaView  } from "react-native";
import { SIZES, FONTS, COLORS, icons } from "../../constants";

import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel'
import { myBooksData } from "../../components/booksData";
import { ScrollView } from "react-native";

export function renderMyBookSection(myBooks: ArrayLike<any>, navigation) {    

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius
                }}
                onPress={() => navigation.navigate("BookDetail", {
                    book: item
                })}
            >
                {/* CAPA LIVRO */}
                <Image
                    source={item.bookCover}
                    resizeMode="cover"
                    style={{
                        width: 180,
                        height: 250,
                        borderRadius: 20
                    }}
                />

                {/* INFO LIVRO */}
                <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={icons.clock_icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.lightGray
                        }}
                    />
                    <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.lastRead}</Text>

                    <Image
                        source={icons.page_icon}
                        style={{
                            marginLeft: SIZES.radius,
                            width: 20,
                            height: 20,
                            tintColor: COLORS.lightGray
                        }}
                    />
                    <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.completion}</Text>
                </View>
            </TouchableOpacity>
        )
    }



    return (
        <View style={{ flex: 1 }}>
            {/* HEADER */}
            <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ ...FONTS.h2, color: COLORS.white }}>
                    Biblioteca
                </Text>

                <TouchableOpacity
                     onPress={() => navigation.navigate("Library")}
                >
                    <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>
                        Ver Mais
                    </Text>
                </TouchableOpacity>
            </View>

            {/* lIVROS */}
            <ScrollView  style={{ flex: 1, marginTop: SIZES.padding,  }}>
                <FlatList
                data={myBooks}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                ></FlatList>
          
            </ScrollView >
        </View>
    )
}