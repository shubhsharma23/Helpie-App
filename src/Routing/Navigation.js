import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../Screens/Home'
import Book from '../Screens/Book'
import SignUp from '../Screens/SignUp'
import Login from '../Screens/Login'
import ServiceList from '../Screens/Lists'
import Practice from '../Components/practice'
import Connect from '../Screens/Connect'
import Form from '../Screens/Form';
import About from '../Screens/About';
import StaffList from '../Screens/StaffList';
import Tabbar from '../Components/Tabbar'
import SideMenu from '../Components/SideBar'



const AppNavigator = createDrawerNavigator({

  HomePage: {
    screen: Home,
    navigationOptions: { headerShown: false }
  },
  ServiceList: {
    screen: ServiceList,
    navigationOptions: { headerShown: false }
  },
  BookPage: {
    screen: Book,
    navigationOptions: { headerShown: false }
  },
  SignUpPage: {
    screen: SignUp,
    navigationOptions: { headerShown: false }
  },
  LoginPage: {
    screen: Login,
    navigationOptions: { headerShown: false }
  },
  ConnectPage: {
    screen: Connect,
    navigationOptions: { headerShown: false }
  },
  FormPage: {
    screen: Form,
    navigationOptions: { headerShown: false }
  },
  AboutPage: {
    screen: About,
    navigationOptions: { headerShown: false }
  },
  StaffList: {
    screen: StaffList,
    navigationOptions: { headerShown: false }
  },
}, 
  {
    contentComponent: SideMenu
  }
)

export default createAppContainer(AppNavigator);



