import React, { useRef } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    Animated
} from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { renderHead } from '../../utils/Home/headSection'
import { renderButtonSection } from "../../utils/Home/btnSection";
import { renderMyBookSection } from "../../utils/Home/myBookSection";

import { COLORS, FONTS, SIZES, icons, images } from '../../constants';

import { myBooksData } from "../../components/booksData";
import { categoriesData } from "../../components/categoriesData";
import GetBook from "../../components/getBook";




const Home = ({ navigation }) => {
    const profileData = {
        name: 'Cristian',
        point: 200
    }

    
    const [profile, setProfile] = React.useState(profileData);
    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    const scrollY = useRef(new Animated.Value(0)).current;


    const headerHeight = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [160, 0],
        extrapolate: 'clamp',
    });

    const buttonOpacity = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });


    return (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>

                <Animated.View style={{ height: headerHeight, backgroundColor: COLORS.primary, opacity: buttonOpacity }}>
                    {renderHead(profile)}
                    <Animated.View style={{ opacity: buttonOpacity }}>
                        {renderButtonSection()}
                    </Animated.View>
                </Animated.View>
    
                <Animated.ScrollView
                style={{ marginTop: SIZES.padding }}
                scrollEventThrottle={16} 
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
            >
                <View>
                    {renderMyBookSection(myBooks, navigation)}
                </View>

                {/* CATEGORIAS */}
                <View >
                    <View style={{ marginTop: SIZES.padding }}>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </Animated.ScrollView>
            </SafeAreaView>
    )

    function renderCategoryHeader() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ flex: 1, marginRight: SIZES.padding }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.categoryName}</Text>
                    }
                    {
                        selectedCategory != item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>{item.categoryName}</Text>
                    }
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                />
            </View>
        )
    }

    function renderCategoryData() {
        let books = Array.prototype;

        let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

        const renderItem = ({ item }) => {
            return <GetBook item={item} navigation={navigation} />;
        }

        return (
            <View style={{ flex: 1, marginTop: SIZES.radius }}>
                {/* <FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                /> */}
            </View>
        )
    }
}

export default Home;