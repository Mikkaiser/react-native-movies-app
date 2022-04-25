import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Button } from "@react-native-material/core";
import { api } from '../../Services/Api';
import Movie from '../Movies';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }


  async componentDidMount() {
    const response = await api.get('/movies');


    this.setState({
      movies: response.data
    })

  }


  goToRegistration() {
    this.props.navigation.navigate('SignUp');
  }


  render() {
    return (
      <SafeAreaView style={style.container}>
        <StatusBar barStyle="light-content" backgroundColor="#1f1f1f" />
        <Button 
          title="Cadastrar Filme" 
          onPress={() => this.goToRegistration()}
          style={style.registerButton}
        />
        <FlatList
          data={this.state.movies}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Movie data={item} />}
        />
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    padding: '5%',
  },
  registerButton: { 
    marginBottom: '5%',
    fontWeight: 'bold'
  },
})