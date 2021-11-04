/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {WebView} from 'react-native-webview';

const App: () => Node = () => {
  fetch('https://koreanjson.com/posts/1');

  return <WebView source={{uri: 'http://naver.com'}} />;
};

export default App;
