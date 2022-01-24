import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    textAlign: "center"
                },
                elevation1: {
                    boxShadow: "8px 16px 32px 0px rgba(0, 0, 0, 0.1)"
                },
                rounded: {
                    borderRadius: "16px"
                }
            }
        }
    },
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#787A40',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#ff9900',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});