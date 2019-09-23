const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3];

import React, { Component } from "react";
import { Text, View, FlatList, AsyncStorage } from "react-native";
import FoodComponent from "./FoodComponent";

import {
    Header,
    Left,
    Body,
    Title,
    Subtitle,
    Right,
    Button,
    Icon,
    Spinner
} from "native-base";

//import { REPLServer } from "repl";
//import { REPLServer } from "repl";

export default class FoodList extends Component {
    static navigationOptions = {
        title: "Food Available Nearby"
    };
    constructor(props) {
        super(props);

        this.state = {
            distributeItems: undefined,
            apple: "efe",
            location: false,
            address: "",
            coordinates: undefined,
            isDistanceThere: true
        };

        this.onPressBid = this.onPressBid.bind(this);
    }

    componentWillMount() {
        AsyncStorage.getItem("distributeItems").then(value => {
            const data = JSON.parse(value);
            console.log(data);
            this.setState({ distributeItems: data });
        });
    }

    onPressBid(
        email,
        distributorLocation,
        distributorDistance,
        distributorDuration,
        distributorPhone,
        distributorServes,
        currentServes
    ) {
        this.setState(state => ({
            value: 0
        }));

        console.log(distributorServes);
        console.log(currentServes);
        const diff = distributorServes - currentServes;

        if (diff === 0) {
            console.log("rfefef");
            var filtered = this.state.distributeItems.filter(function(
                value,
                index,
                arr
            ) {
                return value.email != email;
            });
            console.log(filtered);
            console.log(filtered.length);

            const copyArray = JSON.stringify(filtered);

            this.setState({
                distributeItems: filtered
            });
            if (filtered.length === 0) {
                console.log("hello");
                AsyncStorage.removeItem("distributeItems");
            } else {
                AsyncStorage.setItem("distributeItems", copyArray);
            }
        } else {
            const map1 = this.state.distributeItems.map(element => {
                //return element;

                if (element.email === email) {
                    element.serves = diff;
                    return element;
                } else {
                    return element;
                }
            });

            this.setState({
                distributeItems: map1
            });

            const copyArray = JSON.stringify(map1);
            AsyncStorage.setItem("distributeItems", copyArray);

            //console.log(map1);
        }
        //console.log(this.state.distributeItems);
        //const copyArray = JSON.stringify(this.state.distributeItems);
        //AsyncStorage.setItem("distributeItems", copyArray);

        /*
        var filtered = this.state.distributeItems.filter(function(
            value,
            index,
            arr
        ) {
            return value.email != email;
        });

        this.setState({
            distributeItems: filtered
        });

        const copyArray = JSON.stringify(filtered);
        AsyncStorage.setItem("distributeItems", copyArray);

        
        alert(
            `Bid Successful . You can recieve your food from ${distributorLocation} which is ${distributorDistance} away`
        );

        */

        this.props.navigation.navigate("confirmBid", {
            temp: 1,
            email: email,
            phone: distributorPhone,
            location: distributorLocation,
            distance: distributorDistance,
            duration: distributorDuration
        });
    }

    renderFoodComponent(item) {
        console.log(item);
        return (
            <FoodComponent
                name={item.item.name}
                foodType={item.item.foodType}
                locationDistributor={item.item.location}
                email={item.item.email}
                phone={item.item.phone}
                serves={item.item.serves}
                uri={item.item.uri}
                locationAcceptor={
                    "NH 48, Electronic City Phase II, Electronic City, Bengaluru, Karnataka 560100, India"
                }
                onPressBid={this.onPressBid}

                /*

coordinates: {lat: 12.934485599999999, lng: 77.6192336}
email: "Utkarshmalik06@gmail.com"
foodType: "Veg"
location: "5th Block, Koramangala, Bengaluru, Karnataka 560095, India"
name: "Utkarsh Malik"
phone: "7409747373"
serves: "100"
uri: "file:///Users/utkarshmalik/Library/Developer/CoreSimulator/Devices/E473F05B-3F2D-43AE-
        */
            />
        );
    }

    /*
    renderSpinnerOrUpdatedData() {
        if (this.state.isDistanceThere) {
            return <Text>hello</Text>;
        } else {
        }
    }
    */

    renderData() {
        return (
            <FlatList
                data={this.state.distributeItems}
                renderItem={this.renderFoodComponent.bind(this)}
            />
        );
    }

    onGetLocation() {
        const url =
            "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAaZyEP_5N6mxmsZcpg6qA84Ow2iT10_Do ";

        fetch(url, {
            method: "POST", // or 'PUT'
            // data can be `string` or {object}!
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(response => {
                this.setState({ coordinates: response.location });
                return response.location;
            })
            .then(response => {
                fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
                        response.lat
                    },${
                        response.lng
                    }&key=AIzaSyBhElQn2nL6LYE_4MbvkuYWA4L0gAghQhc`,

                    {
                        method: "POST", // or 'PUT'
                        // data can be `string` or {object}!
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                )
                    .then(res => res.json())
                    .then(res => res.results[0].formatted_address)
                    .then(res => {
                        this.setState({
                            address: res,
                            location: true
                        });
                    });
            })

            .catch(error => console.error("Error:", error));
    }

    renderButtonOrLocation() {
        if (this.state.location) {
            return <Subtitle>{this.state.address}</Subtitle>;
        } else {
            return (
                <Button
                    transparent
                    small
                    onPress={this.onGetLocation.bind(this)}
                >
                    <Text style={{ color: "black" }}>
                        Food Available nearby
                    </Text>
                </Button>
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/*
                <Header style={{ backgroundColor: "", marginBottom: 0 }}>
                    <Body>
                        <Title>Welcome User</Title>
                        {this.renderButtonOrLocation()}
                    </Body>
                </Header>
            */}

                {this.renderData()}
            </View>
        );
    }
}
