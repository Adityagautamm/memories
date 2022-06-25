import { pink } from '@material-ui/core/colors';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

    container: {
        backgroundColor: 'linear-gradient(to right bottom, #430089, #82ffa1)',

    },

    card: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: 400,
        float: 'right',
        padding: 20,


    },
    avatar: { backgroundColor: theme.palette.secondary.main },

    avatarContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    textField: {
        width: '200%'
    }



}));