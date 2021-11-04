import { ThemeContextProvider } from '../context/ThemeContext';
import { DrawerProvider } from '../context/DrawerContext';
import Layout from '../components/Layout'
import '../styles/globals.css';
import TemporaryDrawer from '../components/Drawer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
        <DrawerProvider>
          <Layout >
            <TemporaryDrawer />
            <Component {...pageProps} />
          </Layout>
        </DrawerProvider>
    </ThemeContextProvider>
  )
  
}

export default MyApp
