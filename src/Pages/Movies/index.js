import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Movie extends Component {
    render() {
        return (
            <View>
                <Text style={styles.movieName}>
                    {this.props.data.name}
                </Text>
                <TouchableOpacity
                    onPress={() => alert(this.props.data.name)}
                >
                    <Image 
                        style={styles.movieImage}
                        source={{ uri: this.props.data.image }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    movieName: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '4%',
        marginBottom: '4%'
    },
    movieImage: {
        width: 200,
        height: 300,
        alignSelf: 'center'
    }
})