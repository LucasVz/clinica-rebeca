import React from "react";
import { Container, Contato, Social } from "./style";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.714443450256!2d-41.77526798620207!3d-2.898394340324245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ec2fe0d196cc9f%3A0x617bd21a8c86df1c!2sCl%C3%ADnica%20Rebeca%20Vaz!5e0!3m2!1spt-BR!2sbr!4v1652665695979!5m2!1spt-BR!2sbr"
        width="100%"
        height="200"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
      <Container id="Footer">
        <Contato>
          <img src={Logo} alt="logo" />
          <p>email:rebecavazfisio@gmail.com</p>
          <p>Telefone:(86)99954-7775</p>
        </Contato>
        <Social>
          <h1>SOCIAL MEDIA</h1>
          <div>
            <a
              href="https://www.instagram.com/clinicarebecavaz/"
              target="blank"
            >
              <FaInstagram size="40px" color="black" />
            </a>
            <a
              href="https://www.facebook.com/Cl%C3%ADnica-Rebeca-Vaz-101129372575058/"
              target="blank"
            >
              <FaFacebookSquare size="40px" color="black" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5586999348656"
              target="blank"
            >
              <FaWhatsapp size="40px" color="black" />
            </a>
          </div>
        </Social>
      </Container>
    </>
  );
}
