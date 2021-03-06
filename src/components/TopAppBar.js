import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import { Link } from 'react-router-dom';

const styles = {
  root: {},
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class TopAppBar extends React.Component {
  render() {
    const { classes, logout, location } = this.props;
    let title = `Orlando Code Camp 2018 GraphQL`;
    if (location.pathname.indexOf('/chat') > -1) {
      title = location.pathname.replace('/chat/', '#');
    }
    return (
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: '#ffffff' }}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="home"
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

const enhance = compose(withRouter, withStyles(styles));

export default enhance(TopAppBar);
