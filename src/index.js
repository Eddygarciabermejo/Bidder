import 'react-native-gesture-handler';
import React from 'react';
import {Navigation} from './navigation';
import {Theme} from './theme';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
      <Theme>
          <Navigation />

      </Theme>

  );
};

export default App;
