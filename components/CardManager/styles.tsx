import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    paper: {
        borderRadius: '6px',
        padding: '10px',
        minHeight: '100px',
        position: 'relative'
    },
    deleteBtn: {
        color: '#ff5f5f',
        position: 'absolute',
        right: '5px'
    },
    question: {
        borderBottom: '1px solid #f3f3f3',
        paddingBottom: '15px',
        fontSize: '20px'
    },
    answer: {
        fontSize: '20px',
        padding: '20px 0 20px',
    }
}));

export default useStyles;