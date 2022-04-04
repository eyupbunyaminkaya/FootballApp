import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomePage from '../pages/HomePage';
import LeaguesPage from '../pages/LeaguesPage';
import MatchesPage from '../pages/MatchesPage';
import MyTeamPage from '../pages/MyTeamPage';


const Tab = createBottomTabNavigator();

function Tabs(){
    return(
        <Tab.Navigator initialRouteName='Home'
            tabBarOptions={{
                showLabel: false,
                activeTintColor: '#ff3a3a',
                inactiveTintColor: '#525252',
                
                
            }}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    height: 50,
                }
                
            }}
            
        >
            <Tab.Screen name="Matches" component={MatchesPage} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../assets/images/matchespageicon.png')} 
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#ff3a3a' : '#525252',
                        }}
                        />
                        <Text style={{color: focused ? '#ff3a3a' : '#525252', fontSize:10}}>Maçlar</Text>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Leagues" component={LeaguesPage} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../assets/images/leaguespageicon.png')} 
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#ff3a3a' : '#525252',
                        }}
                        />
                        <Text style={{color: focused ? '#ff3a3a' : '#525252', fontSize:10}}>Ligler</Text>
                    </View>
                )
            }}
            
            />
            <Tab.Screen name="MyTeam" component={MyTeamPage} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../assets/images/myteampageicon.png')} 
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#ff3a3a' : '#525252',
                        }}
                        />
                        <Text style={{color: focused ? '#ff3a3a' : '#525252', fontSize:10}}>Takımım</Text>
                    </View>
                )
            }}
            
            />
            <Tab.Screen name="Home" component={HomePage} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../assets/images/homepagicon.png')} 
                        resizeMode='contain'
                        style={{
                            top: -20,
                            right: -10,
                        }}
                        />
                    </View>
                )
            }}
            
            />
        </Tab.Navigator>
    );
}

export default Tabs;