import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    root: {
        padding: "15px 20px 15px"
    },
    username: {
        textTransform: "uppercase",
        fontSize: "20px",
        margin: "10px 0 10px 0"
    },
    email: {
        fontSize: "15px"
    },
    profilePic: {
        margin: "auto",
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: "100%",
    },
    label: {
        padding: "10px 0 0 0",
        textAlign: "start"
    }
}));

export default useStyles;