import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import { api } from '../../Api';
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


  render() {
    return (
      <SafeAreaView style={style.container}>
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
    paddingTop: '5%',
    paddingBottom: '5%'
  }
})