import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    mainContainer: {
        height: '100vh',
        backgroundColor: '#f3f3f3',
        padding: '50px 100px 0 100px',
        justifyContent: 'center',
        [`Button`]: {
            float: 'right'
        }
    },
    qcard: {
        backgroundColor: '#f2aa4cff',
        color: '#101820FF',
        borderRadius: '6px 6px 0 0',
        padding: '50px',
        fontSize: '30px',
    },
    acard: {
        backgroundColor: '#101820FF',
        color: '#f2aa4cff',
        borderRadius: '0 0 6px 6px',
        width: '100%',
        minHeight: '150px',
        fontSize: '25px',
        marginBottom: '40px'
    },
    finishBtn: {
        color: '#F65058FF'
    }
}));

export default useStyles;