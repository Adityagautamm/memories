import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    right: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '150px',
    },
    left: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    },

    menuHeaders: {
        height: '100%',
        border: 'none',
        background: 'transparent',
        color: 'white',
        cursor: 'pointer',
    },

    menuItems: {
        color: 'grey',
        border: 'none',



    }

}))