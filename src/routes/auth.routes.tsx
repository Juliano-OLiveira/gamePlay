import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {Sigin} from '../screens/Signin';
import {AppointementDetails} from '../screens/AppointementDetails';
import {AppointmentCreate} from '../screens/AppointmentCreate';


import { theme } from '../global/styles/theme';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: theme.colors.secundary100
            }
        }}
        >
            <Screen name="Sigin" component={Sigin} />
            <Screen name="Home" component={Home} />
            <Screen name="AppointementDetails" component={AppointementDetails} />
            <Screen name="AppointmentCreate" component={AppointmentCreate} />

             
        </Navigator>
    );
    
}