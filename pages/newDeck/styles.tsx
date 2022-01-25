import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    container: {
        height: '100vh',
        backgroundColor: '#f3f3f3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '50px',
        '& label': {
            'fontSize': '20px',
            'marginBottom': '10px'
        },
        '& input': {
            padding: '10px',
            border: '1px solid',
            borderRadius: '4px',
            fontSize: '30px',
            marginBottom: '30px',
            '&:focus': {
                outlineColor: '#007ba7'
            }
        }
    },

}));

export default useStyles;