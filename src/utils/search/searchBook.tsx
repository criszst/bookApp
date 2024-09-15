import React from "react";

import {
    View,
    FlatList,
} from 'react-native';

import { COLORS } from '../../constants';

import getBook from "../../components/getBook";
import axios from "axios";


function bookGoogle(query: String) {
    const apiKey = 'AIzaSyC0M094uHsFpQwr-sIS1bAw0Lg9Kwnidgo'
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + query + "&key=" + apiKey

    axios.get(url)
  .then(res => { 
    let data = res.data
    
    for (let i = 0; i <= 9; i++) {
        let r = data.items[i]

        console.log(r.volumeInfo.title)
    }

  })
}

const SearchBook = ( input: String, con ) => {
    
    bookGoogle(input)
    console.log(con)

//     return (
//         <View style={{ backgroundColor: COLORS.black}}>
//             <FlatList 
//                 data={data}
//                 renderItem={({item}) => {

//                     if(input != "") {
//                         return (
//                             bookGoogle(item)
//                         )
//                     }

//                     if (item.bookName.toLowerCase().includes(input.toLowerCase())) {
//                         return (

//                             getBook(item, navigation)
//                         )
//                     }
//                 }}
//             />
//         </View>
//     )
// }
}

export default SearchBook;