import React, { Component } from "react";
import { Image, View, Text } from "react-native";

import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Icon,
    Right,
    Thumbnail,
    Button
} from "native-base";

import LottieView from "lottie-react-native";
import { material } from "react-native-typography";

import NumericInput from "react-native-numeric-input";

export default class confirmBid extends Component {
    constructor(props) {
        super(props);

        console.log(props);
        this.state = {};
    }

    onBidMore() {
        this.props.navigation.navigate("Food");
    }

    render() {
        const { navigation } = this.props;
        const email = navigation.getParam("email");
        const phone = navigation.getParam("phone");
        const location = navigation.getParam("location");
        const distance = navigation.getParam("distance");
        const duration = navigation.getParam("duration");

        //const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                    //marginTop: 180
                }}
            >
                <Thumbnail
                    style={{ height: 150, width: 120 }}
                    source={{
                        uri:
                            "file:///Users/utkarshmalik/Desktop/check-mark-hi.png"
                    }}
                />
                <Text style={material.display1}>Bid Successful</Text>

                <Container
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 15
                    }}
                >
                    <Content>
                        <Card
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                borderColor: "#307C93",
                                borderLeftWidth: 3,
                                borderRightWidth: 3,
                                borderTopWidth: 3,
                                borderBottomWidth: 3,
                                height: 300,
                                width: 350
                            }}
                        >
                            <CardItem>
                                <Icon active name="flame" />
                                <Text style={material.body2}>{email}</Text>
                            </CardItem>
                            <CardItem>
                                <Icon name="flame" />
                                <Text style={material.body2}> {phone}</Text>
                            </CardItem>
                            <CardItem>
                                <Icon active name="flame" />
                                <Text style={material.body2}> {location}</Text>
                            </CardItem>
                            <CardItem>
                                <Icon active name="flame" />
                                <Text style={material.body2}>{distance}</Text>
                            </CardItem>
                            <CardItem>
                                <Icon active name="flame" />
                                <Text style={material.body2}>{duration}</Text>
                            </CardItem>
                        </Card>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                textAlign: "center",
                                //justifyContent: "center",
                                alignItems: "center"
                                //marginTop: -30,
                            }}
                        >
                            <Button
                                onPress={this.onBidMore.bind(this)}
                                style={{
                                    paddingLeft: 25,
                                    paddingRight: 25,
                                    marginTop: 15,
                                    marginLeft: 120
                                }}
                                primary
                            >
                                <Text>Bid More</Text>
                            </Button>
                        </View>
                    </Content>
                </Container>
            </View>
        );
    }
}
