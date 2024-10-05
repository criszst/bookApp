import React from "react";
import {
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import { Button, Text, Dialog, Portal } from 'react-native-paper';

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

            <Button
                textColor={COLORS.lightGray2}
                style={{
                    flex: 1,
                    backgroundColor: '#1c2336',
                    marginHorizontal: SIZES.base,
                    marginVertical: SIZES.base,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexGrow: 1
                }}
                onPress={() => navigation.navigate("BookReader", { item: book })}
            >
                Amostra Gratuita
            </Button>
        </View>
    )
}