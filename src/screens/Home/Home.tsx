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

import { Appbar, Drawer} from "react-native-paper";



const Home = ({ navigation }) => {
    const profileData = {
        name: 'Cristian',
        point: 200
    }

    const [active, setActive] = React.useState('');

    
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
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>

                <View style={{ backgroundColor: COLORS.black }}>
                    <Appbar.Header mode="center-aligned" style={{ backgroundColor: COLORS.black}} elevated={true} statusBarHeight={20}>
                        <Appbar.Content title={'Home'} disabled={true} titleStyle={{ color: '#FFF'}}  />
                    </Appbar.Header>

                </View>

                <View>
                    <Text>Metas de Leitura</Text>

                    <Drawer.Section title="Some title">
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
                </View>
                <View>
                    {renderMyBookSection(myBooks, navigation)}
                </View>

                {/* CATEGORIAS */}
                <View >
                    <View style={{ marginTop: SIZES.padding }}>
                        {renderCategoryHeader()}
                    </View>
                    
                </View>
            </View>
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
}

export default Home;