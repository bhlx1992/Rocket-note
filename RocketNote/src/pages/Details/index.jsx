import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section/";
import { Tag } from "../../components/Tag";




export function Details(){ 
  return(
    <Container>
        <Header/>
          <main>
            <Content>

            <ButtonText title={"Excluir nota"}/>
            <Button nameBtn="voltar"/>
      {/* <Button nameBtn="login" loading /> /* "name" pode ser substituido por qualquer nome */ 
      /* <Button nameBtn="menu"/> */     
      /* <Button nameBtn={100}/>  numero sempre dentro de "{}" */}

      <h1>
        Introdiçao ao ReactJS
      </h1>
      <p> 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
            <Section title="Links úteis">
              <Links>
                <li><a href="#"/> www.google.com</li>
                <li><a href="#"/> Link 2</li>       
              </Links>
            </Section>
            <Section title="Marcadores">
              <Tag title="express"/>
              <Tag title="express 2"/>
            </Section>

          </Content>
        </main>

    </Container>
  )
}