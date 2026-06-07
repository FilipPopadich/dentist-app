import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="layout-main">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;