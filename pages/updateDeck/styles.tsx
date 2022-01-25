import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    mainContainer: {
        padding: '30px'
    },
    nameField: {
        marginBottom: '20px',
        '& label': {
            marginRight: '10px'
        }
    },
    cardContainer: {
        marginBottom: '20px'
    }
}));

export default useStyles;

