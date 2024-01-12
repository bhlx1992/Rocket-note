import { IoMdCreate, IoIosSearch } from "react-icons/io";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocket note</h1>
            </Brand>
        <Header/> {/* import */}
            <Menu>
            <li><ButtonText title="Todos" isActive /></li>
            <li><ButtonText title="Favoritos"/></li>
            <li><ButtonText title="Lixeira"/></li>
            
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={IoIosSearch}/>

                
            </Search>
            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: "React",
                        tags: [
                            { id: "1", name: "react" },
                            { id: "2", name: "rockect" },                          
                        ]
                    }}/>
                    

                </Section>
            </Content>
            <NewNote to="/new">
                <IoMdCreate />
                Criar nota
            </NewNote>
        </Container>
    )
}