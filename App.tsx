import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Location from './components/location';

// Create a Reference of the Stack which will display in the screen stack wise
const Stack = createNativeStackNavigator();

// This is the Class Which extends the React Components
// and Render function is the Compulsary in the React.Components class
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="location" component={Location} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
