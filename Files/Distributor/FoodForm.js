import React, { Component } from "react";
import { View, Text } from "react-native";
import { AsyncStorage } from "react-native";
import { material } from "react-native-typography";

import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Picker,
    Form,
    Image,
    Card,
    Title,
    Subtitle
} from "native-base";

const ImagePicker = require("react-native-image-picker");

import { Input } from "../src/components/reusables/Input";
import { Spinner } from "../src/components/reusables/Spinner";

import Location from "../Distributor/Location";
//import { Button } from "../src/components/reusables/Button";
//import RNFetchBlob from "react-native-fetch-blob";
//import { resolveSoa } from "dns";
/*const fs = RNFetchBlob.fs;
let imagePath = null;
RNFetchBlob.config({
    fileCache: true
});
*/

const url =
    "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBhElQn2nL6LYE_4MbvkuYWA4L0gAghQhc";

class FoodForm extends Component {
    static navigationOptions = {
        title: "Food Form"
    };
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            serves: "",
            location: "",
            foodType: undefined,
            loading: false,
            uri: "",
            coordinates: ""
        };
    }

    onNameChange(value) {
        this.setState({
            name: value
        });
    }
    onEmailChange(value) {
        this.setState({
            email: value
        });
    }
    onPhoneChange(value) {
        this.setState({
            phone: value
        });
    }
    onServesChange(value) {
        this.setState({
            serves: value
        });
    }
    onLocationChange(value) {
        this.setState({
            location: value
        });
    }

    onValueChange(value: string) {
        this.setState({
            foodType: value
        });
    }

    onUploadPhoto() {
        const options = {
            noData: true
        };

        ImagePicker.showImagePicker(options, response => {
            if (response) {
                /* ImgToBase64.getBase64String(response.uri)
                    .then(base64String => console.log(base64String))
                    .catch(err => console.log(err));
                //console.log(response);
                */
                this.setState({ uri: response.uri });
                alert("Image Uploaded");
                /*
                RNFetchBlob.config({
                    fileCache: true
                })
                    .fetch("GET", response.uri)
                    // the image is now dowloaded to device's storage
                    .then(resp => {
                        // the image path you can use it directly with Image component
                        imagePath = resp.path();
                        return resp.readFile("base64");
                    })
                    .then(base64Data => {
                        // here's base64 encoded image
                        console.log(base64Data);
                        // remove the file from storage
                        return fs.unlink(imagePath);
                    });
                    */
            }
        });
    }

    onConfirmSubmit() {
        AsyncStorage.getItem("distributeItems").then(value => {
            const data = JSON.parse(value);
            console.log(data);

            const newObj = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                serves: this.state.serves,
                location: this.state.location,
                foodType: this.state.foodType,
                uri: this.state.uri,
                coordinates: this.state.coordinates
            };

            if (data == null) {
                const newArray = [];
                newArray.push(newObj);
                const copyArray = JSON.stringify(newArray);
                AsyncStorage.setItem("distributeItems", copyArray);
            }

            //
            else {
                data.push(newObj);
                const copyData = JSON.stringify(data);
                console.log(copyData);
                AsyncStorage.setItem("distributeItems", copyData);
            }
        });

        this.props.navigation.navigate("status", {
            temp: 5
        });
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
            .then(response => {
                this.setState({ coordinates: response.location });
                console.log(response.location);
                return response.location;
            })
            .then(response => {
                fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
                        //response.lat
                        12.934455999999
                    },${
                        //response.lng
                        77.6192336
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
                        <Text style={{ color: "#44A4DB" }}>
                            {" "}
                            Set Current Location{" "}
                        </Text>
                        <Text>
                            <Icon
                                name="paper-plane"
                                style={{
                                    fontSize: 25,
                                    color: "black",
                                    marginTop: 30
                                }}
                            />
                        </Text>
                    </Button>
                </View>
            );
        }
    }

    componentDidMount() {
        /*
        console.log("fr");
        AsyncStorage.getItem("distributeItems").then(
            value => (distributeItem = JSON.parse(value))
        );
        */
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Title>Food Form</Title>
                </Header>
                <Card style={{ flex: 1, padding: 3 }}>
                    <View style={{ flex: 1, padding: 2 }}>
                        <Input
                            label="Name"
                            placeholder="Pratyush"
                            onChangeText={this.onNameChange.bind(this)}
                        />
                        <Input
                            label="Email"
                            placeholder="Pratyush@codeAsylums.com"
                            onChangeText={this.onEmailChange.bind(this)}
                        />
                        <Input
                            label="Phone"
                            placeholder="7503599353"
                            onChangeText={this.onPhoneChange.bind(this)}
                        />

                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholder="Select Food Type"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ width: undefined }}
                            selectedValue={this.state.foodType}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Veg" value="Veg" />
                            <Picker.Item label="Non-Veg" value="Non-Veg" />
                            <Picker.Item label="Both" value="both" />
                        </Picker>

                        <Input
                            label="Serves"
                            placeholder="5"
                            onChangeText={this.onServesChange.bind(this)}
                        />

                        <View>
                            <Input
                                placeholder="eg- Oyo flagship 12684"
                                value={this.state.location}
                                onChangeText={this.onLocationChange.bind(this)}
                                label="Location"
                            />
                            {this.renderSpinnerOrButton()}
                        </View>

                        <View>
                            <Button
                                transparent
                                light
                                style={{
                                    justifyContent: "center",

                                    alignItems: "center"
                                }}
                                onPress={this.onUploadPhoto.bind(this)}
                            >
                                <Text style={{ color: "#44A4DB" }}>
                                    {" "}
                                    Upload Photo{" "}
                                </Text>
                                <Text>
                                    <Icon
                                        name="camera"
                                        style={{
                                            fontSize: 30,
                                            color: "black",
                                            marginTop: 30
                                        }}
                                    />
                                </Text>
                            </Button>
                        </View>
                        <View />

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                marginTop: 20
                            }}
                        >
                            <Button
                                half
                                onPress={this.onConfirmSubmit.bind(this)}
                                style={{
                                    paddingRight: 30,
                                    paddingLeft: 30,
                                    paddingTop: 10,
                                    paddingBottom: 10
                                }}
                                primary
                            >
                                <Text style={{ fontSize: 20, color: "white" }}>
                                    {" "}
                                    Submit{" "}
                                </Text>
                            </Button>
                        </View>
                    </View>
                </Card>
            </View>
        );
    }
}

export default FoodForm;
