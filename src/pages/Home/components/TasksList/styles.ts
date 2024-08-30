import styled from "styled-components";

export const TasksListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const TasksListHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    
    @media (max-width:390px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`

export const TasksListHeaderItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    span {
        font-weight: bold;
        font-size: 0.875rem;
    }
    
    &:first-child {
        color: ${props => props.theme['blue']};
    }
    
    &:last-child {
        color: ${props => props.theme['purple']};
    }
`
export const Badge = styled.div`
    padding: 0.125rem 0.5rem;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 999px;
    color: ${props => props.theme['gray-200']};
    background: ${props => props.theme['gray-400']};
`

export const TasksListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`