import React from 'react';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import CustomerIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';
import { translate } from '@devel/react-admin';

const styles = theme => ({
    card: { borderLeft: 'solid 4px #4caf50', flex: 1, marginLeft: '1em' },
    icon: {
        float: 'right',
        width: 64,
        height: 64,
        padding: '16px 16px 0 16px',
        color: '#4caf50',
    },
    avatar: {
        background: theme.palette.background.contentFrame,
    },
    listItemText: {
        paddingRight: 0,
    },
});

const NewCustomers = ({ visitors = [], nb, translate, classes }) => (
    <Card className={classes.card}>
        <CustomerIcon className={classes.icon} />
        <CardHeader
            title={nb}
            subheader={translate('pos.dashboard.new_customers')}
        />
        <List>
            {visitors.map(record => (
                <ListItem
                    button
                    to={`/customers/${record.id}`}
                    component={Link}
                    key={record.id}
                >
                    <Avatar
                        src={`${record.avatar}?size=32x32`}
                        className={classes.avatar}
                    />
                    <ListItemText
                        primary={`${record.first_name} ${record.last_name}`}
                        className={classes.listItemText}
                    />
                </ListItem>
            ))}
        </List>
    </Card>
);

const enhance = compose(withStyles(styles), translate);

export default enhance(NewCustomers);
