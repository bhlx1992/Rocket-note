import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";

import { Button} from "../../components/Button"
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { Form } from "./styles";
import { Avatar } from "./styles";

import { Link } from "react-router-dom";

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                <FiArrowLeft/>

                </Link>
            </header>

            <Form>
            <Avatar>
                <img src="https://github.com/bhlx1992.png" alt="Foto do usuário"/>
                <label htmlFor="avatar">
                    <FiCamera/>

                    <input id="avatar" type="file">

                    </input>
                </label>
            </Avatar>
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
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
            />
            <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
            />

            <Button nameBtn="Salvar"/>
            </Form>
        </Container>

    )
}