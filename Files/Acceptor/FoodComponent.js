import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Button,
    Icon,
    Left,
    Body,
    Right,
    Badge,
    Spinner
} from "native-base";

import NumericInput from "react-native-numeric-input";

export default class CardImageExample extends Component {
    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            value: 0,
            distanceCalculated: false,
            distance: 0,
            duration: 0,
            flag: false
        };
    }

    renderDistance(loc1, loc2) {
        console.log(loc1);
        console.log(loc2);

        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${loc1}&destinations=${loc2},NY&key=
        ${"AIzaSyACcQ9AgMfsDlO790oii1Bab6Vvw0Ce1Bk"}`;

        fetch(url, {
            method: "POST", // or 'PUT'
            // data can be `string` or {object}!
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                console.log(response.rows[0].elements[0].distance.text);
                console.log(response.rows[0].elements[0].duration.text);

                this.setState({
                    distance: response.rows[0].elements[0].distance.text,
                    duration: response.rows[0].elements[0].duration.text,
                    flag: true
                });
            })
            .catch(err => console.log(err));
    }

    renderDistanceUtil(loc1, loc2) {
        if (this.state.flag === false) {
            this.renderDistance(loc1, loc2);
        }
    }

    render() {
        let {
            name,
            email,
            serves,
            locationAcceptor,
            locationDistributor,
            distance,
            uri,
            foodType
        } = this.props;

        console.log(this.props);

        return (
            <View>
                <Container style={{ flex: 1, height: 400 }}>
                    <Content>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail
                                        source={{
                                            uri:
                                                "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
                                        }}
                                    />
                                    <Body>
                                        <Text style={{ color: "red" }}>
                                            {name}
                                        </Text>

                                        <Text>{locationDistributor}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image
                                    source={{
                                        uri: uri
                                    }}
                                    style={{
                                        height: 200,
                                        width: null,
                                        flex: 1
                                    }}
                                />
                            </CardItem>
                            <CardItem>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: "center"
                                        //alignSelf: "flex-start"
                                    }}
                                >
                                    <Text style={{ marginLeft: -5 }}>
                                        Serve Required{" "}
                                    </Text>
                                    <NumericInput
                                        minValue={0}
                                        maxValue={parseInt(serves)}
                                        value={this.state.value}
                                        onChange={value =>
                                            this.setState({ value })
                                        }
                                        totalWidth={80}
                                        totalHeight={35}
                                        borderColor="grey"
                                        onLimitReached={(isMax, msg) => {
                                            alert("Maximum Limit Reached");
                                        }}
                                    />
                                </View>
                                <Body>
                                    <Button
                                        style={{
                                            flex: 1,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            textAlign: "center",
                                            height: 70
                                        }}
                                        light
                                        onPress={() => {
                                            console.log(this.state.value);
                                            this.setState({
                                                value: 0
                                            });

                                            this.props.onPressBid(
                                                this.props.email,
                                                locationDistributor,
                                                this.state.distance,
                                                this.state.duration,
                                                this.props.phone,
                                                this.props.serves,
                                                this.state.value
                                            );
                                        }}
                                    >
                                        <Icon
                                            style={{
                                                fontSize: 40,
                                                color: "blue"
                                                //flex: 1
                                            }}
                                            name="paper-plane"
                                        />
                                    </Button>
                                </Body>
                                <Right>
                                    <Text style={{ fontSize: 15 }}>
                                        {serves} serves
                                    </Text>
                                    {this.renderDistanceUtil(
                                        this.props.locationAcceptor,
                                        this.props.locationDistributor
                                    )}

                                    <Text style={{ fontSize: 15 }}>
                                        {" "}
                                        {this.state.distance} away
                                    </Text>
                                    <Text style={{ fontSize: 15 }}>
                                        {" "}
                                        {this.state.duration}
                                    </Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </View>
        );
    }
}
