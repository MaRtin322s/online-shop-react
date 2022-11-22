import { Routes, Route } from 'react-router-dom';
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Dashboard from './components/Dashboard/Dashboard';
import Home from "./components/Home/Home";
import Register from './components/Register/Register';
import Login from "./components/Login/Login";
import Create from './components/Create/Create';
import Search from './components/Search/Search';
import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from "./hooks/useLocalStorage";
import Logout from './components/Logout/Logout';
import { ProductContext } from './contexts/productContext';
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Delete from './components/Delete/Delete';

function App() {
    const [auth, setAuth] = useLocalStorage('session', {});
    const userLogin = (userData) => setAuth(userData);
    const userLogout = () => setAuth({});

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <div id="wrapper">
                <Header />
                <main>
                    <ProductContext.Provider value={{}}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/create" element={<Create />} />
                            <Route path="search" element={<Search />} />
                            <Route path="/dashboard/details/:productId" element={<Details />} />
                            <Route path="/dashboard/details/:productId/edit" element={<Edit />} />
                            <Route path="/dashboard/details/:productId/delete" element={<Delete />} />
                        </Routes>
                    </ProductContext.Provider>
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
