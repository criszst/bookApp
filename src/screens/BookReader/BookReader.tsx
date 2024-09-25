import React, {useCallback, useEffect, useState} from 'react';
import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';

import { WebView } from 'react-native-webview';
// import ReactNativeBlobUtil from 'react-native-blob-util';

// const PDF_URL =
  'https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/a11final-fltpln.pdf'; // 618 pages
 const PDF_URL = 'http://books.google.com.br/books?id=AKJGDwAAQBAJ&printsec=frontcover&dq=assim+que+acaba&hl=&cd=1&source=gbs_api'; // 2 pages


const BookReader = () => {
  return (
    <WebView
    source={{ uri: 'https://drive.google.com/viewerng/viewer?embedded=true&url=http://books.google.com.br/books?id=AKJGDwAAQBAJ&printsec=frontcover&dq=assim+que+acaba&hl=&cd=1&source=gbs_api' }}
  />
  );
}

export default BookReader;