import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return(
      <div>
        <Head>
          <title>Next Study</title>
          <meta name="description" content="Created for study Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AppBar position="sticky">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Next.js
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Header;