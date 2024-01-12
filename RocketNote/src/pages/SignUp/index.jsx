import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

import { FiMail, FiLock, FiUser} from "react-icons/fi";
import { Container, Form, BgImg } from "./styles";

export function SignUp() {
    return(
        <Container>
        <BgImg/>
            <Form>
                <h1>Rockect Notes</h1>
                <p>Aplicaçao para salvar e gerenciar seus links</p>
                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button nameBtn="Cadastrar"/>

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
            
        </Container>
    );
}