import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Agencias de Marketing Pengrafic",
  description: "Webdeveloper en Peru, freelance full stack",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="La Agencia Pengrafic"
        description="Somos una agencia de Marketing Digital enfocada a ayudar a alcanzar los objetivos de negocio de nuestros clientes a través de estrategias de Marketing en medios online."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
