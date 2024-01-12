import { Container } from "./styles";

//isActive define a cor do menu selecionado
export function ButtonText ({ title, isActive = false, ...rest}) {
    return (
        <Container
            type="button"
            $isactive={isActive.toString()}//toString() precisa ser usado pra q o DOM reconheça
            {...rest}
        >
            {title}
        </Container>
    );
}