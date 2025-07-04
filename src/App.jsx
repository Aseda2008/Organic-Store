// App.jsx
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./Layout/Footer/footer";
import Header from "./Layout/Header/header";
import Home from "./pages/Home/home";
import Aboute from "./pages/About/about";
import Admin from "./pages/Admin/admin";
import News from "./pages/News/News";
import AOS from "aos";
import 'aos/dist/aos.css'; // <-- Бул сөзсүз керек
import { useEffect } from "react";
import Shop from "./pages/Shop/Shop";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const routes = [
        { id: 1, link: "/", el: <Home /> },
        { id: 2, link: "/about", el: <Aboute /> },
        { id: 3, link: "/admin", el: <Admin /> },
        { id: 4, link: "/news", el: <News /> },
        { id: 5, link: "/ShopNow", el: <Shop/> },
    ];

    return (
        <div className="App">
            <Header />
            <Routes>
                {routes.map((el) => (
                    <Route path={el.link} element={el.el} key={el.id} />
                ))}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
