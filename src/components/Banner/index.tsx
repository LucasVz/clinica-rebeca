import { Container, Button } from "./style";

export default function Banner() {
  return (
    <>
      <Container id="Inicio">
        <h1>
          Realço sua beleza
          <br /> valorizando o que já
          <br /> existe de melhor em você!
        </h1>
        <h2>
          Rebeca Vaz - Fisioterapeuta <br />
          Especialista em Harmonização Corporal
        </h2>
        <Button>
          <a
            target="blank"
            href="https://api.whatsapp.com/send?phone=5586999348656&text=agendando%20consulta"
          >
            ENTRAR EM CONTATO
          </a>
        </Button>
      </Container>
    </>
  );
}
