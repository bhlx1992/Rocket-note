import { Container } from "./styles";

export function Tag({ title, ...rest }) { //"title"- pra q cada Tag tenha seu proprio titulo
    
    return(
        <Container {...rest}> {/* neste caso o ...rest esta pegando a key do Note*/}
            {title}
        </Container>
    );
}

