import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { FiMail, FiLock} from "react-icons/fi";
import { Container, Form, BgImg } from "./styles";

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>Rockect Notes</h1>
                <p> Uma aplicaçao para salvar e gerenciar seus links</p>
                <h2>Faça seu login</h2>

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

                <Button nameBtn="Entrar"/>

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>
            <BgImg/>
        </Container>
    );
}