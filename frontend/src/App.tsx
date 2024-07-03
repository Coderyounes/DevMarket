import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employer from "./pages/Employers";
import Freelancer from "./pages/Freelancers";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MainLayout from "./components/MainLayout";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Error404 from "./pages/Error404";
import Faq from "./pages/Faq";
import MissionDetails from "./pages/MissionDetails";
import FreelancerDetails from "./pages/FreelancerDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="employer" element={<Employer />} />
        <Route path="freelancer" element={<Freelancer />} />
        <Route path="profile" element={<Profile />} />
        <Route path="search" element={<Search />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="faq" element={<Faq />} />
        <Route
          path="/mission_details/:mission_id"
          element={<MissionDetails />}
        />
        <Route
          path="/freelancer_details/:freelancer_id"
          element={<FreelancerDetails />}
        />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
