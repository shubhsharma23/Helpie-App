import React, { Component } from 'react';
import { View, Text } from 'react-native';
import data from '../Constant/data'
import {ClickableIcon} from '../Components/Custom'


class Practice extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                {data.map(obj =>
                    <ClickableIcon
                    source={require('../Assets/serviceIcons/babysitter.png')} 
                    onPress={()=>this.props.navigation.navigate('BookPage',{obj:obj})}
                    title={obj.about} 
                    key={obj.key} 
                    />
                )
                }
            </View>
        );
    }
}

export default Practice;
