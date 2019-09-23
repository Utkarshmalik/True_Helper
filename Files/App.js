import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator,
    createDrawerNavigator
} from "react-navigation";

import FoodList from "./Acceptor/FoodList";
import FoodForm from "./Distributor/FoodForm";
import { Tab } from "native-base";
import Location from "./Distributor/Location";
import Login from "./common/Login";
import SignUp from "./common/SignUpForm";
import firebase from "firebase";
import ConfirmBidScreen from "./Acceptor/ConfirmBid";
import BidHistory from "./Acceptor/BidHistory";
import DistStatus from "./Distributor/DistStatus";

import Mail from "./Acceptor/Mail";

const instructions = Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android:
        "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu"
});

type Props = {};
class App extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const FoodUtil = createStackNavigator({
    Food: FoodList,
    confirmBid: ConfirmBidScreen
});

const FoodNavigator = createBottomTabNavigator({
    home: FoodUtil,
    profile: BidHistory
});

const AcceptorNavigator = createDrawerNavigator(
    {
        Food: FoodNavigator
    },

    {
        headerMode: "none",
        navigationOptions: {
            headerVisible: false
        }
    }
);

const DistNavigator = createBottomTabNavigator({
    status: DistStatus,
    FoodForm: FoodForm
});

const AuthNavigator = createStackNavigator({
    Login: Login,
    SignUp: SignUp
});

const AppNavigator = createSwitchNavigator({
    Home: {
        //screen: Mail
        //screen: AcceptorNavigator
        //screen: DistNavigator
        screen: AuthNavigator

        //Acceptor:AcceptorNavigator
    },
    acceptor: AcceptorNavigator,
    distributor: DistNavigator
});

export default createAppContainer(AppNavigator);
