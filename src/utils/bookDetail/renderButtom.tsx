import React from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    Animated,
    StyleSheet
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../../constants";

export function renderBottomButton(book, navigation) {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {/* Bookmark */}
                <TouchableOpacity
                    style={{
                        width: 60,
                        backgroundColor: '#1c2336',
                        marginLeft: SIZES.padding,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => console.log("Bookmark")}
                >
                    <Image
                        source={icons.bookmark_icon}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.lightGray2
                        }}
                    />
                </TouchableOpacity>

                {/* Start Reading */}
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: '#1c2336',
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("BookReader", {item: book})}
                >
                    <Text style={{ ...FONTS.h3, color: COLORS.lightGray2 }}>Amostra Gratuita</Text>
                </TouchableOpacity>
            </View>
        )
}