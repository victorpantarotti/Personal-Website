import GlobalStyle from "../GlobalStyle";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;