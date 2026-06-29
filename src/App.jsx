import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CheckoutPage from "./pages/ChecoutTest";
import SuccessPage from "./pages/SuccessPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import PaymentPolicy from "./pages/PaymentPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import RecentPurchasePopup from "./pages/RecentPurchasePopup";
import CenterOffPopup from "./pages/CenterOffPopup";

function App() {
  return (
    // <BrowserRouter basename="/books/atoz">
          <BrowserRouter basename="/books/atoz">

      <Routes>
        {/* Home / Landing */}
        <Route path="/" element={
          <>
          <Index />
          <RecentPurchasePopup />
      <CenterOffPopup />
      </>
          } />

        {/* Checkout Page */}
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* Success Page */}
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/payment-policy" element={<PaymentPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
