// theme.js
import { MD3LightTheme as PaperDefaultTheme, MD3DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

const CombinedDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    // colors: {
    //     ...PaperDefaultTheme.colors,
    //     primary: '#6200ee',
    //     accent: '#03dac4',
    // },
};

const CombinedDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    // colors: {
    //     ...PaperDarkTheme.colors,
    //     primary: '#bb86fc',
    //     accent: '#03dac4',
    // },
};

export { CombinedDefaultTheme, CombinedDarkTheme };
