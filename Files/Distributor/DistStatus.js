import React from "react";
import {
    StyleSheet,
    Button,
    View,
    AsyncStorage,
    Text,
    FlatList
} from "react-native";
import { material } from "react-native-typography";

import { Spinner, Header, Title } from "native-base";

import DisplayCard from "./DisplayCard";
export default class DistStatus extends React.Component {
    static navigationOptions = {
        title: "Pending Requests"
    };
    constructor(props) {
        super(props);

        this.state = {
            users: undefined
        };
    }

    componentWillMount() {
        AsyncStorage.getItem("currUser").then(email => {
            console.log(email);
            AsyncStorage.getItem("distributeItems").then(value => {
                const data = JSON.parse(value);
                console.log(data);

                var filtered = data.filter(function(value, index, arr) {
                    return value.email === email;
                });

                console.log(filtered.length);
                this.setState({ users: filtered });
            });
        });
    }

    componentWillReceiveProps() {
        AsyncStorage.getItem("currUser").then(email => {
            console.log(email);
            AsyncStorage.getItem("distributeItems").then(value => {
                const data = JSON.parse(value);
                console.log(data);

                var filtered = data.filter(function(value, index, arr) {
                    return value.email === email;
                });

                console.log(filtered.length);
                this.setState({ users: filtered });
            });
        });
    }

    renderFoodComponent(item) {
        console.log(item);
        return (
            <DisplayCard
                name={item.item.name}
                foodType={item.item.foodType}
                locationDistributor={item.item.location}
                email={item.item.email}
                phone={item.item.phone}
                serves={item.item.serves}
                uri={item.item.uri}
            />
        );
    }

    renderData() {
        if (this.state.users === undefined) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text style={material.heading}>No pending requests</Text>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.users}
                        renderItem={this.renderFoodComponent.bind(this)}
                    />
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <Title>Pending Requests</Title>
                </Header>
                {this.renderData()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
        //alignItems: "center",
        //justifyContent: "center"
    }
});
