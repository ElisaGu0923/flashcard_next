import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    container: {
        boxSizing: 'border-box',
        padding: '20px 80px',
        backgroundColor: '#f3f3f3',
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'space-between',
        [`Button`]: {
            margin: '0 5px'
        }
    }
}));

export default useStyles;