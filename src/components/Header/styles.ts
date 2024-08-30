import styled  from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    padding-top: 4.5rem;
    padding-bottom: 5rem;
    background-color: ${props => props.theme['gray-700']};
    
    img {
        width: 8rem;
    }
`