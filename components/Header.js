import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import HeaderStyles from '../styles/Header.module.scss';

const Header = () => {
    return(
      <div>
        <AppBar position="sticky">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
              Next.js
            </Typography>
            <div>
              <Link href="/">
                <a className={HeaderStyles.link}>Home</a>
              </Link>
              <Link href="/about">
			  	<a className={HeaderStyles.link}>About</a>
              </Link>
          </div>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Header;