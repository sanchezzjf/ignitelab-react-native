import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Details from '../screens/Details';
import NewOrder from '../screens/NewOrder';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='home' component={Home} />
            <Screen name='new' component={NewOrder} />
            <Screen name='details' component={Details} />
        </Navigator>
    )
}