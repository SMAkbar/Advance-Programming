import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

class Home extends Component {
    render() {
        return (
            <View>
                <Text>Login into the application</Text>
                <TextInput />
                <TextInput />
            </View>
        )
    }
}

export default Home