import React from 'react'
import ReactDOM from 'react-dom/client'
import Failed from './Pages/Failed.jsx'
import Success from './Pages/Success.jsx'
import App from './Pages/App.jsx'
import Home from './Pages/Home/Home.jsx'
import Explore from './Pages/Explore/Explore.jsx'
import Campaigns from './Pages/Campaigns/Campaigns.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import SignIn from './Pages/SignIn.jsx'
import Register from './Pages/Register.jsx'
import Gallery from './Pages/Explore/Gallery.jsx'
import Map from './Pages/Explore/Map.jsx'
import CampaignOverview from './Pages/Campaigns/CampaignOverview.jsx'
import MyCampaigns from './Pages/Campaigns/MyCampaigns.jsx'
import NewCampaign from "./Pages/Campaigns/NewCampaign.jsx";

import './index.css'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { makeServer } from './server/server.js'

if (process.env.NODE_ENV === 'development') {
    makeServer({ environment: 'development' });
} 

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='explore' element={<Explore />}>
                        <Route index element={<Gallery />} />
                        <Route path=':id' element={<CampaignOverview />} />
                        {/*<Route path='map' element={<Map />} />*/}
                    </Route>
                    <Route path='campaigns' element={<Campaigns />}>
                        <Route index element={<MyCampaigns />} />
                        <Route path='create' element={<NewCampaign />}>
                            <Route index element={<NewCampaign />} />
                            <Route path='detail' element={<NewCampaign />} />
                            <Route path='final' element={<NewCampaign />} />
                        </Route>
                    </Route>
                    <Route path='profile' element={<Profile />} />
                </Route>
                <Route path='sign-in' element={<SignIn />} />
                <Route path='register' element={<Register />} />
                <Route path='fail' element={<Failed />} />
                <Route path='success' element={<Success />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
