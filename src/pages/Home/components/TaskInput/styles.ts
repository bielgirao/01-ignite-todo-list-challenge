import styled from 'styled-components';

export const TaskInputContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 0.5rem;
    margin-top: -1.656rem;
    
    input {
        flex: 1;
        padding: 1rem;
        border: 1px solid ${props => props.theme['gray-700']};
        background: ${props => props.theme['gray-500']};
        border-radius: 8px;
        color: ${props => props.theme['gray-100']}; 
        
        &::placeholder {
            color: ${props => props.theme['gray-300']};
        }
        
        &:focus {
            border-color: ${props=> props.theme['purple-dark']};
        }
    }
    
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        
        border: 0;
        border-radius: 8px;
        padding: 1rem;
        background: ${props => props.theme['blue-dark']};
        color: ${props => props.theme['gray-100']};
        cursor: pointer;
        
        &:not(:disabled):hover {
            background: ${props => props.theme['blue']};
        }
        
        &:disabled {
            opacity: 0.8;
            cursor: not-allowed;
        }
    }
    
    @media (max-width: 450px) {
        flex-direction: column;
    }   
`