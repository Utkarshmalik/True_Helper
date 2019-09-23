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
    Thumbnail,
    Picker,
    Icon
} from "native-base";
import firebase from "firebase";
import { Text, View, AsyncStorage } from "react-native";

export default class LoginPage extends Component {
    static navigationOptions = {
        title: "Login"
    };

    constructor(props) {
        super(props);

        this.state = {
            identity: "",
            username: "",
            password: ""
        };
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA_APuATgxKKDlsr0ztuJofDQbH1wg58UA",
            authDomain: "test-fe854.firebaseapp.com",
            databaseURL: "https://test-fe854.firebaseio.com",
            projectId: "test-fe854",
            storageBucket: "test-fe854.appspot.com",
            messagingSenderId: "1009641368423",
            appId: "1:1009641368423:web:6e88b53bff7a8075"
        });
    }

    onSignUp() {
        this.props.navigation.navigate("SignUp");
        // this.props.navigation.navigate("SignUp");
        //this.props.navigation.navigate("distributor");
        /*
        const item = {
            firstName: "fefe",
            lastName: "efe",
            phoneNo: "74097473737",
            email: "efef",
            username: "efef",
            password: "efefe",
            identity: "",
            location: { lat: 12, lng: 15 }
        };


        firebase
            .auth()
            .createUserWithEmailAndPassword(
                this.state.username,
                this.state.password
            )
            .then(res => {
                alert("Successful!, Login to continue");
            })
            .catch(function(error) {
                console.log("error");
            });

            */
    }

    onLogin() {
        const temp = this.state.username;
        AsyncStorage.setItem("currUser", this.state.username);

        //this.props.navigation.navigate("acceptor");

        //this.props.navigation.navigate("distributor");

        firebase
            .auth()
            .signInWithEmailAndPassword(
                this.state.username,
                this.state.password
            )
            .then(res => {
                console.log(res);
                if (this.state.identity === "Acceptor") {
                    this.props.navigation.navigate("acceptor");
                } else if (this.state.identity === "Distributor") {
                    this.props.navigation.navigate("distributor");
                }
            })
            .catch(() => {
                console.log("failure");
            });

        console.log(this.state.username);
        console.log(this.state.password);

        /*
        
        if (
            this.state.username === "utkarshmalik06@gmail.com" &&
            this.state.password === "qwerty123"
        ) {
            console.log(this.props.navigation);
            console.log(this.state.identity);
            if (this.state.identity === "Acceptor") {
                //console.log("efefe");
                this.props.navigation.navigate("acceptor");
            } else if (this.state.identity === "Distributor") {
                this.props.navigation.navigate("distributor");
            }
        }
        */
    }

    onValueChange(value) {
        console.log("frff");
        console.log(value);
        this.setState({ identity: value });
    }

    onChangeUsername(value) {
        this.setState({
            username: value
        });
        console.log(this.state.username);
    }

    onChangePassword(value) {
        this.setState({
            password: value
        });

        console.log(this.state.password);
    }

    render() {
        return (
            <Container
                style={{
                    flex: 1,
                    justifyContent: "center"
                }}
            >
                <Form
                    style={{
                        //flex: 1,
                        //justifyContent: "center",
                        alignItems: "center",
                        marginTop: -250
                    }}
                >
                    <Thumbnail
                        large
                        square
                        style={{
                            height: 260,
                            width: 260
                        }}
                        source={{
                            url: "file:///Users/utkarshmalik/Desktop/image1.png"
                        }}
                    />

                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input
                            onChangeText={this.onChangeUsername.bind(this)}
                            value={this.state.username}
                        />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input
                            onChangeText={this.onChangePassword.bind(this)}
                            value={this.state.password}
                            secureTextEntry
                        />
                    </Item>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        placeholder="Select Identity"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        style={{ width: undefined }}
                        selectedValue={this.state.identity}
                        onValueChange={this.onValueChange.bind(this)}
                    >
                        <Picker.Item label="Acceptor" value="Acceptor" />
                        <Picker.Item label="Distributor" value="Distributor" />
                        <Picker.Item label="Both" value="both" />
                    </Picker>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        <Button
                            onPress={this.onLogin.bind(this)}
                            style={{
                                paddingLeft: 30,
                                paddingRight: 30,
                                paddingTop: 5,
                                paddingBottom: 5,
                                marginTop: 30
                            }}
                            primary
                        >
                            <Text>Login</Text>
                        </Button>

                        <Text style={{ color: "black" }}> New User ? </Text>
                        <Button
                            onPress={this.onSignUp.bind(this)}
                            style={{
                                paddingLeft: 30,
                                paddingRight: 30,
                                paddingTop: 5,
                                paddingBottom: 5,
                                marginTop: 30
                            }}
                            primary
                        >
                            <Text>Sign Up ></Text>
                        </Button>
                    </View>
                </Form>
            </Container>
        );
    }
}
