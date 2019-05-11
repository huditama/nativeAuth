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

export default class SignUp extends Component {
    state = {
        email: '',
        password: ''
    }

    handleRegister = () => {
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
                .createUserWithEmailAndPassword(email, password)
                .then(({ user }) => {
                    Toast.show({
                        text: 'Thanks for joining us!',
                        buttonText: 'Okay'
                    })
                    this.setState({
                        email: '',
                        password: ''
                    }, () => {
                        this.props.navigation.navigate('Main')
                    })
                    console.log('REGISTERED USER ===', user)
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
                        <Text>Sign Up</Text>
                    </Body>
                </Header>
                <Content contentContainerStyle={styles.container}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://cdn3.iconfinder.com/data/icons/basic-ui-elementsblue-1/389467/36-2-512.png' }} />
                                <Body>
                                    <Text>Start Favoriting Today!</Text>
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
                                    Already have an account?</Text>
                                <NativeButton
                                    title="Login"
                                    onPress={() => navigate('Login')}
                                />
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button onPress={this.handleRegister} >
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
