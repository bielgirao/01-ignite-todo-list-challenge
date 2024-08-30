import styled from 'styled-components';

export const NoTaskMessageContainer = styled.div`
    width: 100%;
    padding: 4rem 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    p {
        line-height: 1.4;
    }
    
    svg {
        margin-bottom: 1rem;
    }
    
    @media (max-width: 400px) {
        padding: 2rem 0;
    }
`