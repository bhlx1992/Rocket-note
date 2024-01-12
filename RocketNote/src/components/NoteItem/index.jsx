import { FiPlus, FiX} from "react-icons/fi";

import { Container } from "./styles";

export function NoteItem ({ isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
            <input 
                type="text" 
                value={value} 
                readOnly={!isNew} //pra nao editar o link criado. *!* é uma negaçao
                {...rest}
            />

            <button
                type="button"
                onClick={onClick}
                className={isNew ? "button_add" : "button_del"}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}