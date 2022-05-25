import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "@src/features/common/util/ScrollToTop";
import { Layout } from "@src/layout/Layout";
import LoginPage from "@src/pages/LoginPage";
import HomePage from "@src/pages/HomePage";
import NewsPage from "@src/pages/NewsPage/index";
import StyleGuide from "@src/pages/StyleGuide";
import "./styles/variable.css";
import "./styles/font.css";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/news" element={<NewsPage />}>
            <Route path=":id" element={<NewsPage />} />
          </Route>
          <Route path="/style" element={<StyleGuide />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
