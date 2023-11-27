import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const AdminLoginPage = React.lazy(() => import("pages/AdminLoginPage"));
const AdminManageCampaignsPage = React.lazy(
  () => import("pages/AdminManageCampaignsPage"),
);
const AdminDashboardPage = React.lazy(() => import("pages/AdminDashboardPage"));
const SubmitCampaignPage = React.lazy(() => import("pages/SubmitCampaignPage"));
const PaymentPage = React.lazy(() => import("pages/PaymentPage"));
const AboutPage = React.lazy(() => import("pages/AboutPage"));
const ContactPage = React.lazy(() => import("pages/ContactPage"));
const BrowseCampaignsPage = React.lazy(
  () => import("pages/BrowseCampaignsPage"),
);
const CampaignPage = React.lazy(() => import("pages/CampaignPage"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/campaignpage" element={<CampaignPage />} />
          <Route
            path="/browsecampaignspage"
            element={<BrowseCampaignsPage />}
          />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
          <Route path="/submitcampaignpage" element={<SubmitCampaignPage />} />
          <Route path="/admindashboardpage" element={<AdminDashboardPage />} />
          <Route
            path="/adminmanagecampaignspage"
            element={<AdminManageCampaignsPage />}
          />
          <Route path="/adminloginpage" element={<AdminLoginPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
