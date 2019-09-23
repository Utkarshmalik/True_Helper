import React, { Component } from "react";
import { View, Text } from "react-native";
import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Picker,
    Form
} from "native-base";

const url =
    "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBhElQn2nL6LYE_4MbvkuYWA4L0gAghQhc";

import { Input } from "../src/components/reusables/Input";
import { Spinner } from "../src/components/reusables/Spinner";
import { Card } from "../src/components/reusables/Card";
import { labeledStatement } from "@babel/types";
//import { Button } from "../src/components/reusables/Button";

class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: "",
            loading: false
        };
    }

    onGetCurrentLocation() {
        this.setState({
            loading: true
        });

        fetch(url, {
            method: "POST", // or 'PUT'
            // data can be `string` or {object}!
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(response => response.location)
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
                            loading: false,
                            location: res
                        });
                    });
            })

            .catch(error => console.error("Error:", error));
    }

    renderSpinnerOrButton() {
        if (this.state.loading) {
            return (
                <View>
                    <Spinner small />
                </View>
            );
        } else {
            return (
                <View>
                    <Button
                        transparent
                        light
                        onPress={this.onGetCurrentLocation.bind(this)}
                    >
                        <Text> Set Current Location </Text>
                    </Button>
                </View>
            );
        }
    }

    onChangeLocation(value) {
        this.setState({
            location: value
        });
    }
    render() {
        return (
            <View>
                <Input
                    placeholder="eg- Oyo flagship 12684"
                    value={this.state.location}
                    onChangeText={this.onChangeLocation.bind(this)}
                    label="Location"
                />
                {this.renderSpinnerOrButton()}
            </View>
        );
    }
}

export default Location;
