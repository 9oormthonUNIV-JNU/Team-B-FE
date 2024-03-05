import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import NotificationPage from "./pages/NotificationsPage";
import MyPage from "./pages/MyPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import FundingRegisterPage from "./pages/FundingRegisterPage";
import FundingNotificationPage from "./pages/FundingNotificationPage";
import FundingPage from "./pages/FundingPage";
import FundingShipmentPage from "./pages/FundingShipmentPage";
import FundingPaymentPage from "./pages/FundingPaymentPage";
import FundingPaymentResultPage from "./pages/FundingPaymentResultPage";
import MyHistoryPage from "./pages/MyHistoryPage";
import MyLikedPage from "./pages/MyLikedPage";
import MyRecentPage from "./pages/MyRecentPage";
import NavLayout from "./layouts/NavLayout";
import Layout from "./layouts/Layout";
import ReactModal from "react-modal";
import KakaoLoginFallback from "./components/KakaoLoginFallback";

function App() {
  ReactModal.setAppElement("#root");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>

        <Route element={<Layout />}>
          <Route
            path="/shop/product/:productId"
            element={<ProductDetailPage />}
          />
          <Route
            path="/shop/product/:productId/funding"
            element={<FundingRegisterPage />}
          />
          <Route
            path="/notifications/:notificationId"
            element={<FundingNotificationPage />}
          />
          <Route path="/funding/:fundingId" element={<FundingPage />} />
          <Route
            path="/funding/:fundingId/shipment"
            element={<FundingShipmentPage />}
          />
          <Route
            path="/funding/:fundingId/payment"
            element={<FundingPaymentPage />}
          />
          <Route
            path="/funding/:fundingId/payment/result"
            element={<FundingPaymentResultPage />}
          />
          <Route path="/mypage/history" element={<MyHistoryPage />} />
          <Route path="/mypage/liked" element={<MyLikedPage />} />
          <Route path="/mypage/recent" element={<MyRecentPage />} />

          <Route path="/auth" element={<KakaoLoginFallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
