import { Container, Img, Text, ContainerContact, Button } from "./style";
import picture from "../../assets/rebeca.png";

export default function Homepage() {
  return (
    <>
      <Container>
        <ContainerContact>
          <Text>Rebeca Vaz, especialista em armonização corporal</Text>
          <Button>
            <a
              target="blank"
              href="https://api.whatsapp.com/send?phone=5586999348656&text=agendando%20consulta"
            >
              Agende sua consulta
            </a>
          </Button>
        </ContainerContact>
        <Img src={picture} alt="foto da rebeca" />
      </Container>
    </>
  );
}
