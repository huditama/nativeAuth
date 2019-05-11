import React, { Component } from 'react';
import { StyleSheet, Button as NativeButton } from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Left,
    Body,
    Form,
    Item,
    Input,
    Label,
    Toast
} from 'native-base';
import firebase from '../firebaseConfig'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleLogin = () => {
        const { email, password } = this.state
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === '' || email === ' ' || password === '' || password === ' ') {
            Toast.show({
                text: 'Please complete the form!',
                buttonText: 'Okay'
            })
        } else if (!emailRegex.test(String(email).toLowerCase())) {
            Toast.show({
                text: 'Invalid email format!',
                buttonText: 'Okay'
            })
        } else {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(({ user }) => {
                    Toast.show({
                        text: 'Welcome back!',
                        buttonText: 'Okay'
                    })
                    this.setState({
                        email: '',
                        password: ''
                    }, () => {
                        this.props.navigation.navigate('Main')
                    })
                    console.log('LOGGED IN USER ===', user)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    Toast.show({
                        text: errorMessage,
                        buttonText: 'Okay'
                    })
                });
        }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <Container style={{ backgroundColor: 'steelblue' }}>
                <Header>
                    <Body>
                        <Text>Login</Text>
                    </Body>
                </Header>
                <Content contentContainerStyle={styles.container}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://www.digicert.com/account/images/login-shield.png' }} />
                                <Body>
                                    <Text>Continue Favoriting!</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <Form>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input onChangeText={(email) => this.setState({ email })} />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
                            </Item>
                        </Form>
                        <CardItem>
                            <Left>
                                <Text>
                                    Don't have an account?</Text>
                                <NativeButton
                                    title="Sign Up"
                                    onPress={() => navigate('SignUp')}
                                />
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button onPress={this.handleLogin} >
                                    <Text>Submit</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
