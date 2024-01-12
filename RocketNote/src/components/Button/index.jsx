import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Button({ nameBtn, loading=false, }){

    return(
    <Container 
        type="button"
        disabled={loading}
        >
        {loading ? "Carregando..." : nameBtn} {/* %IF TERNARIO% esta perguntando se é V ou F */}

    </Container>
    );
}






/* 
        ***OU***
export function Button(props){

    return(
    <Container type="button">
        {props.name}
    </Container>
    );
} */