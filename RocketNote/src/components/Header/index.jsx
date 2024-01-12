import {RiShutDownLine} from "react-icons/ri"

import { Container, Profile, Logout } from "./styles";

export function Header (){
    return(
        //componentes
        <Container>
            <Profile to="/profile">
                <img src= "https://github.com/bhlx1992.png"
                alt="Foto do usuário"/>

                <div>
                    <span>Bem-vindo</span>
                    <strong>Bruno Lima</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );  
}