import { Route, Routes } from 'react-router-dom';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from 'components/Main/Main';
import CartFeature from 'features/Carts';
import PrivateRoute from 'private/PrivateRoute';
import MyAccount from 'features/Auth/components/MyAccount/MyAccount';
import SkeletonMyAccount from 'private/SkeletonMyAccount';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header';
import ProductFeature from 'features/Product';
import DetailPage from 'features/Product/pages/DetailPage';
import SkeletonCart from 'private/SkeletonCart';
import ListPage from 'features/Product/pages/ListPage';
const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="products" element={<ProductFeature />}>
          <Route index element={<ListPage />} />
          <Route path=":productId/*" element={<DetailPage />} />
        </Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute Skeleton={<SkeletonCart />}>
              <CartFeature />
            </PrivateRoute>
          }
        />
        <Route
          path="my-account"
          element={
            <PrivateRoute Skeleton={<SkeletonMyAccount />}>
              <MyAccount />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
