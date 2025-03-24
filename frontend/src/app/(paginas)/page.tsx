import Curriculo from "@/components/curriculo";
import Principal from "@/components/landing/Principal";
import Container from "@/components/shared/Container";
import { obterTecnologias } from "@/functions/tecnologias";

export default async function Home() {
    const tecnologias = await obterTecnologias()

    return (
    <div>
      <Principal tecnologias={tecnologias.destaques}/>
      <Container className="py-16">
        <Curriculo tecnologias={tecnologias.todas}/>

      </Container>
    </div>
  )
}
