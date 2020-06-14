import React from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right, Button, Thumbnail, Title } from 'native-base';
import data from '../Constant/data'
import Tabbar from '../Components/Tabbar';
import Top from '../Components/Header';
const ServiceList = (props) => {
  return (
    <Container>
      <Top title='Service List'  onPress={()=>props.navigation.goBack()}/>
      <Content>

        <List>
          {data.map(obj =>
            <ListItem thumbnail>
              <Left>
                <Text>{obj.key}</Text>
                <Thumbnail square source={obj.iconURL} scaleX={0.6} scaleY={0.6} />
              </Left>
              <Body>
                <Text>{obj.about}</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => props.navigation.navigate('BookPage', { obj: obj })}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          )}
        </List>
      </Content>
       <Tabbar nav={props.navigation}/>
    </Container>
  );
}

export default ServiceList;
