import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductFeature from './features/Product';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListPage from './features/Product/pages/ListPage';
import DetailPage from './features/Product/pages/DetailPage';
const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Header</h1>
      <Routes>
        <Route path="products" element={<ProductFeature />}>
          <Route index element={<ListPage />} />
          <Route path=":productId" element={<DetailPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
