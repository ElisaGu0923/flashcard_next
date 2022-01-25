import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    main: {
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#f3f3f3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        border: '1px solid black',
        borderRadius: '5px',
        padding: '10px 50px 30px',
        '& div': {
            fontSize: '20px'
        },
        '& input': {
            width: '100%',
            marginBottom: '10px',
            padding: '5px',
            fontSize: '15px'
        },
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    }
}));

export default useStyles;