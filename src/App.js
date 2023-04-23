import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import AboutUS from "./pages/about-us";
import ContactUs from "./pages/contact-us";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./pages/authentication/login/login";
import Logout from "./pages/authentication/logout/logout";
import Signup from "./pages/authentication/signup/sign-up";
import Profile from "./pages/authentication/profile/profile";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="about-us" element={<AboutUS />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
