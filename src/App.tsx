import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "@src/features/common/util/ScrollToTop";
import { Layout } from "@src/layout/Layout";
import LoginPage from "@src/pages/LoginPage";
import HomePage from "@src/pages/HomePage";
import NewsPage from "@src/pages/NewsPage/index";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StyleGuide from "@src/pages/StyleGuide";
import "./styles/variable.css";
import "./styles/font.css";
import TypeAhead from "@src/features/SearchForm/components/TypeAhead";

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

export function Example() {
  return (
    <>
      <h1>뭐지</h1>
      <h1>뭐지</h1>
      <h1>뭐지</h1>
      <h1>뭐지</h1>
      <h1>뭐지</h1>
      <h1>뭐지</h1>
      <h1>뭐지</h1>
      <h1>뭐지</h1>
      <h1>뭐지</h1>
      <h1>뭐지</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            assumenda!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
