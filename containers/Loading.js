import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import firebase from '../firebaseConfig'

export default class Loading extends Component {
    componentDidMount() {
        const { navigate } = this.props.navigation
        firebase
            .auth()
            .onAuthStateChanged((user) => {
                (user) ? (
                    setTimeout(() => {
                        navigate('Main')
                    }, 4000)
                ) : (
                        setTimeout(() => {
                            navigate('Login')
                        }, 4000)
                    )
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ height: 300, width: 300 }}
                    source={{ uri: 'https://i.gifer.com/6Iv.gif' }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(0, 228, 178)'
    }
})