import * as React from 'react';
import { SafeAreaView} from 'react-native';

import Route from './src/routes/index';
const App = () => {
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Route />
      </SafeAreaView>
  );
};

export default App;
