import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { Toast } from 'native-base'
import firebase from '../firebaseConfig'

export default class Main extends Component {
    handleLogout = () => {
        Toast.show({
            text: 'Bye!',
            buttonText: 'Okay'
        })
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.props.navigation.navigate('Login')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>You're Logged In!</Text>
                <Button
                    title="Logout"
                    onPress={this.handleLogout}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
