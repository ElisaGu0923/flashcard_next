import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';

interface ToastProps {
    open: boolean;
    setOpen(open: boolean): void;
    type: AlertColor;
    message?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast: React.FC<ToastProps> = (props) => {
    // const [open, setOpen] = React.useState(true);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        props.setOpen(false);
    };

    return (
        <Snackbar open={props.open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={props.type} sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
    );
}

export default Toast;