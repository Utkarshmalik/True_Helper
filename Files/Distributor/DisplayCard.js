import React, { Component } from "react";
import { Image, View } from "react-native";
import { material } from "react-native-typography";

import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body
} from "native-base";
export default class CardShowcaseExample extends Component {
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

        return (
            <Container style={{ height: 195 }}>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: uri }} />
                                <Body>
                                    <Text>{locationDistributor}</Text>
                                    <Text note>2019 6, 2019</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View>
                                    <Text style={material.title}>
                                        Status:
                                        <Text style={material.subheading}>
                                            Pending
                                        </Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={material.title}>
                                        Serves:
                                        <Text style={material.subheading}>
                                            {serves}
                                        </Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={material.title}>
                                        Food-Type:
                                        <Text style={material.subheading}>
                                            {foodType}
                                        </Text>
                                    </Text>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
