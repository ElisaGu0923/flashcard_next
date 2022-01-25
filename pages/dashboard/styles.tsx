import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    container: {
        marginBottom: "30px"
    },
    createBtn: {

    },
    paper: {
        borderRadius: '6px',
        padding: '10px',
        minHeight: '130px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        fontSize: '40px',
        color: `${theme.palette.secondary.main}`
    }
}));

export default useStyles;