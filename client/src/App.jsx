import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/privateRoute";
import Profile from "./pages/Profile";
import CreateListing from "./pages/createListing";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          {/* <Route path="/create-listing" element={<CreateListing />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    // <div>IUIOUIOU</div>
  );
}
