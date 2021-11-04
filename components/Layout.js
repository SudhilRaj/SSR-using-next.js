import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    return(
        <>
            <Meta />
            <Header />
            <div style={{minHeight: 'calc(100vh - 48px)'}}>
                <div style={{overflow: 'auto', paddingBottom: '100px'}}>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout;