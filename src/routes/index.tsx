import { NavigationContainer } from '@react-navigation/native';

import SignIn from '../screens/SignIn';
import { AppRoutes } from './app.routes';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}