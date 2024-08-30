import styled from "styled-components";

export const TaskCardContainer = styled.div`
    display: flex;
    padding: 1rem;
    gap: 0.75rem;
    width: 100%;
    background: ${props => props.theme['gray-500']};
    border: 1px solid ${props => props.theme['gray-400']};
    border-radius: 8px;
`

export const TaskContent = styled.p<{ $isCompleted?: boolean }>`
    flex: 1;
    font-size: 0.875rem;
    line-height: 1.4rem;
    color: ${props => props.$isCompleted ? props.theme['gray-300'] : props.theme['gray-100']};
    text-decoration: ${props => props.$isCompleted ? 'line-through' : 'none'};
`

export const IconWrapper  = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    box-shadow: none;
    border: none;
`

export const EmptyCheckmark = styled(IconWrapper)`
    color: ${props=>props.theme['blue']};
    
    &:hover {
        color: ${props=>props.theme['blue-dark']};
    }
`

export const FilledCheckmark = styled(IconWrapper)`
    color: ${props=>props.theme['purple-dark']};
    
    &:hover {
        color: ${props=>props.theme['purple']};
    }
`

export const TrashIcon = styled(IconWrapper)`
    color: ${props=>props.theme['gray-300']};
    
    &:hover {
        background: ${props=>props.theme['gray-400']};
        color: ${props=>props.theme['danger']};
        border-radius: 4px;
    }
`