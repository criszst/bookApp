import React, {useCallback, useEffect, useState} from 'react';
import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';


import PdfRendererView from 'react-native-pdf-renderer';
import * as FileSystem from 'expo-file-system';
// import ReactNativeBlobUtil from 'react-native-blob-util';

const PDF_URL =
  'https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/a11final-fltpln.pdf'; // 618 pages
// const PDF_URL = 'https://www.africau.edu/images/default/sample.pdf'; // 2 pages


const BookReader = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const [singlePage, setSinglePage] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [source, setSource] = useState<string>();

  const downloadWithExpoFileSystem = useCallback(async () => {
    try {
      setDownloading(true);

      const response = await FileSystem.downloadAsync(
        PDF_URL,
        FileSystem.documentDirectory + 'file.pdf',
      );

      setSource(response.uri);
    } catch (err) {
      console.warn(err);
    } finally {
      setDownloading(false);
    }
  }, []);


  useEffect(() => {
    downloadWithExpoFileSystem();
  }, [downloadWithExpoFileSystem]);

  const renderPdfView = () => {
    if (downloading) {
      return <Text>Downloading...</Text>;
    }

    if (!toggle) {
      return <Text>Unmounted</Text>;
    }

    return (
      <>
        <Button
          title="Single Page"
          onPress={() => setSinglePage(prev => !prev)}
        />
        <PdfRendererView
          style={{backgroundColor: 'red'}}
          source={source}
          distanceBetweenPages={16}
          maxZoom={5}
          singlePage={singlePage}
          onPageChange={(current, total) => {
            console.log('onPageChange', {current, total});
            setCurrentPage(current);
            setTotalPages(total);
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 16,
            left: 0,
            right: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              backgroundColor: 'rgba(255,255,255,0.5)',
              color: 'black',
              padding: 4,
              borderRadius: 4,
            }}>
            {currentPage + 1}/{totalPages}
          </Text>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={false} />

      <Button title="Mount/Unmount" onPress={() => setToggle(prev => !prev)} />

      {renderPdfView()}
    </SafeAreaView>
  );
}

export default BookReader;