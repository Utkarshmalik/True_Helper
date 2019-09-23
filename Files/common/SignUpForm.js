import React, { Component } from "react";
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Picker,
    Icon
} from "native-base";
import { Text, View } from "react-native";
import firebase from "firebase";
export default class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            phoneNo: "",
            email: "",
            username: "",
            password: "",
            selected: undefined,
            identity: ""
        };
    }
    static navigationOptions = {
        title: "Sign Up"
    };

    onFirstNameChange(value) {
        this.setState({ firstName: value });
    }
    onLastNameChange(value) {
        this.setState({ lastName: value });
    }
    onPhoneNoChange(value) {
        this.setState({ phoneNo: value });
    }
    onEmailChange(value) {
        this.setState({ email: value });
    }
    onUsernameChange(value) {
        this.setState({ username: value });
    }
    onPasswordChange(value) {
        this.setState({ password: value });
    }
    onIdentityChange(value) {
        this.setState({ identity: value });
    }

    onRegister() {
        firebase
            .auth()
            .createUserWithEmailAndPassword(
                this.state.email,
                this.state.password
            )
            .then(res => {
                alert("Registeration successful");
                this.props.navigation.navigate("Login");
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholder="Identity"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ width: undefined }}
                            selectedValue={this.state.identity}
                            onValueChange={this.onIdentityChange.bind(this)}
                        >
                            <Picker.Item label="Acceptor" value="acceptor" />
                            <Picker.Item
                                label="Distributor"
                                value="distributor"
                            />
                        </Picker>
                        <Item floatingLabel>
                            <Label>First Name</Label>
                            <Input
                                value={this.state.firstName}
                                onChangeText={this.onFirstNameChange.bind(this)}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Last Name</Label>
                            <Input
                                value={this.state.lastName}
                                onChangeText={this.onLastNameChange.bind(this)}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Phone no</Label>
                            <Input
                                value={this.state.phoneNo}
                                onChangeText={this.onPhoneNoChange.bind(this)}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                                value={this.state.email}
                                onChangeText={this.onEmailChange.bind(this)}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input
                                value={this.state.username}
                                onChangeText={this.onUsernameChange.bind(this)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input
                                value={this.state.password}
                                onChangeText={this.onPasswordChange.bind(this)}
                                secureTextEntry
                            />
                        </Item>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center"
                            }}
                        >
                            <Button
                                onPress={this.onRegister.bind(this)}
                                style={{
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    marginTop: 30
                                }}
                                primary
                            >
                                <Text>Register</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}
