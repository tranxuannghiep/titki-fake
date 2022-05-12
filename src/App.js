import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductFeature from './features/Product';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListPage from './features/Product/pages/ListPage';
import DetailPage from './features/Product/pages/DetailPage';
import Header from './components/Header';
import Main from 'components/Main/Main';
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
      </Routes>
    </ThemeProvider>
  );
}

export default App;
