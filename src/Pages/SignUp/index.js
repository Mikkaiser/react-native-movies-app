import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
// import { TextInput } from "@react-native-material/core";
import { TextInput } from 'react-native-paper';
import { Text, Button } from "@react-native-material/core";
import { ScrollView } from 'react-native-gesture-handler';
import {api} from '../../Services/Api';

export default class Register extends Component {

    state = {
        movieName: '',
        movieCoverLink: 'https://br.web.img2.acsta.net/pictures/14/03/05/20/02/220604.jpg'
    }


    async saveMovie() {
        // Send a POST request
        await api.post('/movies', {
            name: this.state.movieName,
            image: this.state.movieCoverLink
        })
    }

    render() {
        return (
            <SafeAreaView
                style={style.container}>
                <ScrollView>
                    <Text variant="h4" style={{ fontWeight: 'bold', marginBottom: '6%' }}>
                        Cadastrar filme
                    </Text>
                    <TextInput 
                        mode="outlined" 
                        label="Movie Name"
                        onChangeText={value => this.setState({movieName: value})}
                    />
                    <TextInput 
                        mode="outlined" 
                        label="Movie Cover Link"
                        style={{marginTop: 20, marginBottom: 30}}
                        onChangeText={value => this.setState({movieCoverLink: value})}
                        value={this.state.movieCoverLink || ' '}
                        selectTextOnFocus={true}
                    />
                    <Image 
                        source={{uri: this.state.movieCoverLink}}
                        style={{ width: 150, height: 250, alignSelf: 'center' }}/>

                    <Button 
                        title="Salvar" 
                        onPress={() => this.saveMovie()}
                        style={{marginTop: 30, height: 40, justifyContent: 'center', backgroundColor: '#1f1f1f'}}
                    />
                </ScrollView>

            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor:'#F9F9F9'
    },
})