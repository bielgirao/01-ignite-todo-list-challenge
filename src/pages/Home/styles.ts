import styled from "styled-components";

export const HomeContainer = styled.main`
    max-width: 46rem;
    padding: 0 3rem;
    margin: auto;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    @media (max-width:390px) {
        gap: 2rem;
    }
`
