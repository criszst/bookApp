import React, {useState} from "react";
import {View, Text, Image, ScrollView} from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from "../../constants";

const slides = [
    {
        id: 1,
        title: 'Descubra os melhores livros',
        description: 'asdadasdsadadsaad',
        image: require('../../assets/images/assim_que_acaba.jpg')
    },

    {
        id: 2,
        title: 'Leia',
        description: 'asdadasdsadadsaad',
        image: require('../../assets/images/assim_que_acaba.jpg')
    },

    {
        id: 3,
        title: 'Se divirta',
        description: 'asdadasdsadadsaad',
        image: require('../../assets/images/assim_que_acaba.jpg')
    },
]

const renderSlide = ({item}) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            padding: 15,
            paddingTop: 100,
            backgroundColor: COLORS.black
          }}>
            <Image
              source={item.image}
              style={{
                width: SIZES.width,
                height: 400,
              }}
              resizeMode="contain"
            />
            <Text style={{
              fontWeight: 'bold',
              color: COLORS.black,
              fontSize: SIZES.h2,
            }}>
              {item.title}
            </Text>
            <Text style={{
              textAlign: 'center',
              paddingTop: 5,
              color: COLORS.black
            }}>
              {item.description}
            </Text>
          </View>
    )
}

const Library = () => {
    const [showHomePage, setShowHomePage] = useState(true);

  const buttonLabel = (label) => {
    return(
      <View style={{
        padding: 12,
        marginBottom: 200,
        backgroundColor: COLORS.black
      }}>
        <Text style={{
          color: COLORS.black,
          fontWeight: '600',
          fontSize: SIZES.h2,
        }}>
          {label}
        </Text>
      </View>
    )
  }
    return(
      <ScrollView style={{            backgroundColor: COLORS.black}}>
        <View style={{            backgroundColor: COLORS.black}}>
            {
                showHomePage ? <AppIntroSlider
                data={slides}
                renderItem={renderSlide}
                showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
                /> : <View> <Text>aaa</Text></View>
            }
        </View>
      </ScrollView>
      
    )
}

export default Library;