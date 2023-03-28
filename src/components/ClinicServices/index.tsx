import { Container, Service, Services, Button } from "./style";
import Bumbum from "../../assets/bumbum.jpg";
import Gordura from "../../assets/Gordura.jpg";
import Estrias from "../../assets/Estrias.jpg";
import Limpeza from "../../assets/Limpeza-de-pele.jpg";
import Flacidez from "../../assets/Flacidez.jpg";
import Dor from "../../assets/Dor.jpg";
import Depilacao from "../../assets/Depilacao.jpg";

export default function ClinicServices() {
  return (
    <Container id="Servicos">
      <h1>O que te incomoda?</h1>
      {/* <h2>Descubra o tratamento ideal para você!</h2> */}
      <Services>
        <Service>
          <h4>Bumbum</h4>
          <img src={Bumbum} alt="Bumbum" />
        </Service>
        <Service>
          <h4>Gordura localizada e celulite</h4>
          <img src={Gordura} alt="Gordura localizada e celulite" />
        </Service>
        <Service>
          <h4>Estrias</h4>
          <img src={Estrias} alt="Estrias" />
        </Service>
        <Service>
          <h4>Rugas, acne e pele oleosa</h4>
          <img src={Limpeza} alt="Rugas, acne e pele oleosa" />
        </Service>
        <Service>
          <h4>Flacidez</h4>
          <img src={Flacidez} alt="Flacidez" />
        </Service>
        <Service>
          <h4>Dor e inchaço</h4>
          <img src={Dor} alt="Dor e inchaço" />
        </Service>
        <Service>
          <h4>Pelos e foliculites</h4>
          <img src={Depilacao} alt="Pelos e foliculites" />
        </Service>
        <Service>
          <h4>Bumbum</h4>
          <img src={Bumbum} alt="Bumbum" />
        </Service>
        <Button>
          <a
            target="blank"
            href="https://api.whatsapp.com/send?phone=5586999348656&text=agendando%20consulta"
          >
            ENTRAR EM CONTATO
          </a>
        </Button>
      </Services>
    </Container>
  );
}
