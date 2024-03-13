import Card2 from "./components/Card-2/Card2";
import Promo2 from "./components/Promo-2/Promo2";
import Promo from "./components/Promo/Promo";
import Arrivals2 from "./components/arrivals-2/Arrivals-2";
import Arrivals from "./components/arrivals/Arrivals";
import Brands from "./components/brands/Brands";
import Footer from "./components/footer/Footer";
import Footer2 from "./components/footer2/footer2";
import Header from "./components/header/Header";
import Mobile from "./components/mobile/Mobile";

function App() {
  const project = "AFGHANISTAN";
  return (
    <div className="App">
      <h1>{project}</h1>
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Promo2 />
      <Arrivals2 />
      <Card2 />
      <Mobile />
      <Footer2 />
      <Footer />
    </div>
  );
}

export default App;
