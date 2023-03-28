import { Container, Galery } from "./style";
import foto1 from "../../assets/1.png";
import foto2 from "../../assets/2.png";
import foto3 from "../../assets/3.png";
import foto4 from "../../assets/4.png";
export default function AboutUs() {
  return (
    <Container id="Sobre">
      <h1>CONHEÇA NOSSO ESPAÇO</h1>
      <p>
        Estamos localizada no <span>Centro Comercial Igara Clube</span>, na
        Beira Rio, um dos principais pontos turísticos de Parnaíba. Nossa
        recepção conta com as melhores marcas de cosméticos home care do
        mercado, sala de atendimento individual previamente pensada para
        proporcionar relaxamento e bem estar.
      </p>
      <Galery>
        <img className="clinic-img" src={foto1} alt="uma maca bem arrumada" />
        <img className="clinic-img" src={foto2} alt="entrada da clínica " />
        <img className="clinic-img" src={foto3} alt="entrada da clínica " />
        <img
          className="clinic-img"
          src={foto4}
          alt="sala de recepção da clínica "
        />
      </Galery>
    </Container>
  );
}
