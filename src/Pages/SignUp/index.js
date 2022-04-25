import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import { TextInput } from "@react-native-material/core";
import { Text, Button } from "@react-native-material/core";
import { ScrollView } from 'react-native-gesture-handler';

export default class Register extends Component {

    state = {
        movieName: '',
        movieCoverLink: 'https://br.web.img2.acsta.net/pictures/14/03/05/20/02/220604.jpg'
    }


    async saveMovie() {
        console.warn('perfect')
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
                        variant="outlined" 
                        label="Movie Name"
                        onChangeText={value => this.setState({movieName: value})}
                    />
                    <TextInput 
                        variant="outlined" 
                        label="Movie Cover Link"
                        style={{marginTop: 20, marginBottom: 30}}
                        onChangeText={value => this.setState({movieCoverLink: value})}
                    />
                    <Image 
                        source={{uri: this.state.movieCoverLink}}
                        style={{ width: 200, height: 300, alignSelf: 'center' }}/>

                    <Button 
                        title="Salvar" 
                        onPress={async () => await this.saveMovie()}
                        style={{marginTop: 20, height: 40, justifyContent: 'center'}}
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