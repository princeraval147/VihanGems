import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import NotFound from "./component/NotFound";
import AboutUsPage from "./component/AboutUs";
import App from "./App";
import HomePage from "./component/Home";
import DiamondGallery from "./component/DiamondGallery";
import EventDetail from "./component/EventDetail";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutUsPage />} />
            <Route path='events' element={<EventDetail />} />
            <Route path='diamond-gallery' element={<DiamondGallery />} />

            <Route path='*' element={<NotFound />} />
        </Route>
    )
)

export default router;