import React from 'react';

import { WebView } from 'react-native-webview';

const BookReader = ({ route, navigation })  => {
  console.log(route.params.item.id)
  return (
    <WebView
    source={{ uri: `http://play.google.com/books/reader?id=${route.params.item.id}&hl=&source=gbs_api` }}
  />
  );
}

export default BookReader;