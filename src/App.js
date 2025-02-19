import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteLayout from "./components/website/Layout";
import LandingPageLayout from "./components/landingpage/Layout";

import "aos/dist/aos.css";
import Aos from "aos";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/common/ScrollToTop";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/common/SpinnerContext";
import LandingPage from "./pages/LandingPage/LandingPage";

const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Services = lazy(() => import("./pages/Services/Services"));
const Healthcare = lazy(() => import("./pages/Healthcare/Healthcare"));
const ServiceDetails = lazy(() =>
  import("./pages/ServiceDetails/ServiceDetails")
);

Aos.init({
  once: true,
  duration: 700,
});

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BrowserRouter>
        <SpinnerContextProvider>
          <ScrollToTop />
          <LoadingSpinnerContext />
          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="healthcare" element={<Healthcare />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:param" element={<ServiceDetails />} />
            </Route>
            <Route path="/" element={<LandingPageLayout />}>
              <Route
                path="web-development"
                element={<LandingPage page="web" />}
              />
              <Route
                path="app-development"
                element={<LandingPage page="app" />}
              />
            </Route>
          </Routes>
        </SpinnerContextProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
