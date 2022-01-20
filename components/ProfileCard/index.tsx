import React from 'react'
// next
import Image from 'next/image';
// material UI
import { Paper } from '@mui/material';
// components
import { Progressbar } from '../';
// styles
import useStyles from "./styles";

export type User = {
    name?: string | null,
    image?: string | null,
    email?: string | null
}

export interface IProfileCardProps {
    user: User
}

const ProfileCard: React.FunctionComponent<IProfileCardProps> = ({ user }) => {
    const { classes } = useStyles();
    return (
        <Paper elevation={1} className={classes.root}>
            <div className={classes.profilePic}>
                {user.image ? <Image src={user.image} width={100} height={100} className={classes.img} /> :
                    <Image src="/asset/default_user.png" width={100} height={100} className={classes.img} />}
            </div>
            <div className={classes.username}>
                {user.name}
            </div>
            <div className={classes.email}>
                {user.email}
            </div>
            <div className={classes.label}>
                Exp:
            </div>
            <div>
                <Progressbar variant="determinate" value={40} />
            </div>
        </Paper>
    )
};

export default ProfileCard;
