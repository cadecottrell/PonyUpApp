import React from 'react';
import { Image, StyleSheet, Text, View, BackHandler} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native"

class Header extends React.Component{

    state = {
        search: '',
      };
    
      updateSearch = (search) => {
        this.setState({ search });
      };

    render(){
        //const navigation = useNavigation();
        const { navigation } = this.props;
        const { search } = this.state;
        return(
            <View style={styles.header}>

                <View style={styles.itemStyleText}>
                    <TouchableHighlight onPress={() => alert("Back")}>
                        <Image
                        style={styles.tinyImage}
                        source={require('../images/backButton.png')}
                        />
                    </TouchableHighlight>
                </View>

                <View style={styles.itemStyleSearch}>
                    <SearchBar
                    placeholder="Search"
                    inputStyle={{backgroundColor: 'white',}}
                    platform="android"
                    containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5,}}
                    round="true"
                    
                    onChangeText={this.updateSearch}
                    value={search}
                    />
                </View>
                
            </View>
        )
    }
}




const styles = StyleSheet.create({
    header:{
        height: 100,
        paddingRight: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
    },

    itemStyleText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    itemStyleSearch: {
        flex: 3,
        alignItems: 'center',
        height: '90%',
        marginTop: 5,
        marginBottom: 10,
        justifyContent: 'center'
    },

    tinyImage: {
        width: 20,
        height: 20,
        resizeMode: 'stretch'
    }

})

export default Header