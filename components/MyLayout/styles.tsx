import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    navContainer: {
        boxSizing: 'border-box',
        padding: '20px 80px',
        // backgroundColor: '#f3f3f3',
        backgroundColor: '#eaeaea',
        width: '100%',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'space-between',
    },
    mainContainer: {
        padding: "30px 50px",
        backgroundColor: 'rgb(233, 241, 243)'
    }
}));

export default useStyles;