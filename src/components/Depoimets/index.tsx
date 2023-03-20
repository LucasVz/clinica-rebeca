import { Container, Cards, Card } from "./style";

export default function Depoiments() {
  return (
    <Container id="Depoimentos">
      <h1>Depoimentos dos nossos clientes</h1>
      <Cards>
        <Card>
          <h4>Fulano</h4>
          <p>
            Ótimo atendimento. As atendentes tiram todas suas dúvidas em relação
            aos procedimentos. Lugar muito limpo também."
          </p>
        </Card>
        <Card>
          <h4>Fulano</h4>
          <p>
            Ótimo atendimento. As atendentes tiram todas suas dúvidas em relação
            aos procedimentos. Lugar muito limpo também."
          </p>
        </Card>
        <Card>
          <h4>Fulano</h4>
          <p>
            Ótimo atendimento. As atendentes tiram todas suas dúvidas em relação
            aos procedimentos. Lugar muito limpo também."
          </p>
        </Card>
      </Cards>
    </Container>
  );
}
