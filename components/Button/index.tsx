import { withStyles } from 'tss-react/mui';
import { Button as MuiButton } from '@mui/material';

const Button = withStyles(
    MuiButton,
    (theme) => ({
        root: {
            // minHeight: '30px'
        },
        textPrimary: {
            color: theme.palette.primary.main
        },
        '@media (min-width: 960px)': {
            textPrimary: {
                // fontWeight: "bold"
            }
        }
    }),
);

export default Button;