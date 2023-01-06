import { Container, Galery } from "./style";
import foto1 from "../../assets/1.png";
import foto2 from "../../assets/2.png";
import foto3 from "../../assets/3.png";
import foto4 from "../../assets/4.png";
export default function AboutUs() {
  return (
    <Container id="Sobre">
      <h1>CONHEÇA NOSSO ESPAÇO</h1>
      <h2>
        Estamos localizada no Centro Comercial Igara Clube, na Beira Rio, um dos
        principais pontos turísticos de Parnaíba. Nossa recepção conta com as
        melhores marcas de cosméticos home Care do mercado, sala de atendimento
        individual previamente pensada para proporcionar relaxamento,discrição e
        bem está. Devidamente equipada e climatizada para melhorar ainda mais
        sua experiência.
      </h2>
      <Galery>
        <img className="clinic-img" src={foto1} alt="" />
        <img className="clinic-img" src={foto2} alt="" />
        <img className="clinic-img" src={foto3} alt="" />
        <img className="clinic-img" src={foto4} alt="" />
      </Galery>
    </Container>
  );
}
