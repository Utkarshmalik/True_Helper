import React from "react";
import { StyleSheet, Button, View } from "react-native";
import email from "react-native-email";
import SendSMS from "react-native-sms";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEmail() {
        console.log("rfr");
        SendSMS.send(
            {
                body: "The default body of the SMS!",
                recipients: ["7409747373"],
                successTypes: ["sent", "queued"],
                allowAndroidSendWithoutReadPermission: true
            },
            (completed, cancelled, error) => {
                console.log(
                    "SMS Callback: completed: " +
                        completed +
                        " cancelled: " +
                        cancelled +
                        "error: " +
                        error
                );
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Send Mail" onPress={this.handleEmail} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
