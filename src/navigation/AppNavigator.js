import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import globalStyles from '../styles/globalStyles';
import HomeScreen from '../components/decks/HomeScreen';
import RulesScreen from '../components/rules/RulesScreen';
import GameScreen from '../components/game/GameScreen';
import DeckListScreen from '../components/decks/DeckListScreen';
import DeckScreen from '../components/decks/DeckScreen';
import ConfigureCardsScreen from '../components/decks/ConfigureCardsScreen';
import ContactUsScreen from '../components/contact-us/ContactUsScreen';
import HeaderMenuButton from '../components/common/HeaderMenuButton';
import DisclaimerScreen from '../components/legal/DisclaimerScreen';
import RedirectError from '../components/decks/RedirectError';
import CommunityDeckListScreen from '../components/community/CommunityDeckListScreen';
import CommunityDeckScreen from '../components/community/CommunityDeckScreen';
// import GameHeaderTitle from '../components/game/GameHeaderTitle';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();
const DecksConfigStack = createStackNavigator();
const GameStack = createStackNavigator();
const RulesStack = createStackNavigator();
const ContactStack = createStackNavigator();
const LegalStack = createStackNavigator();
const CommunityStack = createStackNavigator();

const DecksConfigNavigationStack = () => (
  <DecksConfigStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerMode: 'screen',
      headerStyle: globalStyles.statusBar,
      headerTitleStyle: globalStyles.statusBarTitle
      // headerBackTitleStyle: {
      //   margin: 20
      // }
    }}
  >
    <DecksConfigStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerRight: () => <HeaderMenuButton />
      }}
    />
    <DecksConfigStack.Screen
      name="DeckList"
      component={DeckListScreen}
      options={{
        title: 'Decks',
        headerRight: () => <HeaderMenuButton />
      }}
    />
    <DecksConfigStack.Screen
      name="Deck"
      component={DeckScreen}
      options={{
        headerRight: () => <HeaderMenuButton />
      }}
    />
    <DecksConfigStack.Screen
      name="ConfigureCards"
      component={ConfigureCardsScreen}
      options={{
        title: 'Configure Card',
        headerRight: () => <HeaderMenuButton />
      }}
    />
    <DecksConfigStack.Screen name="RedirectError" component={RedirectError} />
  </DecksConfigStack.Navigator>
);

const GamesNavigationStack = () => (
  <GameStack.Navigator
    initialRouteName="Game"
    options={{ title: 'Who Drinks' }}
  >
    <GameStack.Screen
      name="Game"
      component={GameScreen}
      options={({ route }) => ({
        title: 'Deck: ' + (route.params?.name ?? ''),
        headerRight: () => <HeaderMenuButton />
      })}
    />
  </GameStack.Navigator>
);

const CommunityNavigationStack = () => (
  <CommunityStack.Navigator
    initialRouteName="CommunityDeckList"
    options={{ title: 'Community' }}
  >
    <CommunityStack.Screen
      name="CommunityDeckList"
      component={CommunityDeckListScreen}
      options={{
        title: 'Community Decks',
        headerRight: () => <HeaderMenuButton />
      }}
    />
    <CommunityStack.Screen
      name="CommunityDeck"
      component={CommunityDeckScreen}
      options={{
        title: 'Community Deck',
        headerRight: () => <HeaderMenuButton />
      }}
    />
  </CommunityStack.Navigator>
);

const RulesNavigationStack = () => (
  <RulesStack.Navigator initialRouteName="Rules">
    <RulesStack.Screen
      name="Rules"
      component={RulesScreen}
      options={{
        title: 'The Rules',
        headerRight: () => <HeaderMenuButton />
      }}
    />
  </RulesStack.Navigator>
);

const ContactNavigationStack = () => (
  <ContactStack.Navigator initialRouteName="Contact">
    <ContactStack.Screen
      name="Contact"
      component={ContactUsScreen}
      options={{
        title: 'Contact Us',
        headerRight: () => <HeaderMenuButton />
      }}
    />
  </ContactStack.Navigator>
);

const LegalNavigationStack = () => (
  <LegalStack.Navigator initialRouteName="Disclaimer">
    <LegalStack.Screen
      name="Disclaimer"
      component={DisclaimerScreen}
      options={{
        title: 'Legal',
        headerRight: () => <HeaderMenuButton />
      }}
    />
  </LegalStack.Navigator>
);

function AppNavigator() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerType="slide"
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen name="Decks" component={DecksConfigNavigationStack} />
      <Drawer.Screen name="Game" component={GamesNavigationStack} />
      <Drawer.Screen name="Community" component={CommunityNavigationStack} />
      <Drawer.Screen name="Rules" component={RulesNavigationStack} />
      <Drawer.Screen name="Contact Us" component={ContactNavigationStack} />
      <Drawer.Screen name="Legal" component={LegalNavigationStack} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
