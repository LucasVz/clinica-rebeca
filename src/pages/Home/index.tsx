import AboutUs from "../../components/AboutUs";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ClinicServices from "../../components/ClinicServices";
import Depoiments from "../../components/Depoimets";
import { Container } from "./style";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Banner />
      <AboutUs />
      <Depoiments />
      <ClinicServices />
      <Footer />
    </Container>
  );
}
