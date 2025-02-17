import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/website/Layout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Services from "./pages/Services/Services";
import Healthcare from "./pages/Healthcare/Healthcare";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="services" element={<Services />} />
          <Route path="healthcare" element={<Healthcare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
