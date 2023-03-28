import { RiWhatsappFill } from "react-icons/ri";
import { Icon } from "./style";

export default function Contact() {
  return (
    <Icon>
      <a
        href="https://api.whatsapp.com/send?phone=5586999348656"
        target="blank"
      >
        <RiWhatsappFill size="50px" color="green" />
      </a>
    </Icon>
  );
}
