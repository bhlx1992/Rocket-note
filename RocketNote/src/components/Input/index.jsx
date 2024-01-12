import {Container} from "./styles"

export function Input ({icon: Icon, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={20} />} {/*comprovando com && se o icone existe*/}

            <input {...rest}/>
        </Container>
    )

}