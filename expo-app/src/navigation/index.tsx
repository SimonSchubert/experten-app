import { createStackNavigator } from "react-navigation-stack";
import {createBrowserApp} from '@react-navigation/web';
import AllIncidents from "../features/all-incidents";

const Navigator = createStackNavigator(
  {
    "MedStaff+": AllIncidents
  }
);

const container = createBrowserApp(Navigator);

export default container;

