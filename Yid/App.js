import React from 'react';
import TabNavigator from './navigator/TabNavigator';
import { ThemeProvider } from './context/ThemeContext';


export default function App() {
  return (
    <ThemeProvider>
      <TabNavigator />
    </ThemeProvider>
  );
}