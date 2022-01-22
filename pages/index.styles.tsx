import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    btnContainer: {
        width: "50%",
        margin: '0 auto'
    },
    mainContainer: {
        width: '100vw',
        height: '100vh',
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden'
    },
    content: {
        position: 'relative',
        top: '170px',
        left: '100px',
        [`h1`]: {
            fontSize: '90px',
            color: 'white',
            fontFamily: 'Helvetica'
        },
        [`h2`]: {
            fontSize: '60px',
            color: 'white'
        },
        [`div`]: {
            fontSize: '20px',
            color: 'white'
        },
    },

}));

export default useStyles;