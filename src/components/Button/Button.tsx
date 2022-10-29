import React from "react"
import styled from 'styled-components'


const StyledButton = styled.button<ButtonProps>
    `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 228px;
    height: 49px;
    background: #1DA1F2;
    border-radius: 99999px;
    border: 1px solid #1DA1F2;
    margin-top: 50px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    text-align: center;

    ${({ theme, variant })=> {
        

        return {
            backgroundColor: '#1DA1F2',
            color: '#FFFFFF',
            ':hover': {
                backgroundColor: '#1da0f278'
            }
        }
    }}
`
interface ButtonProps {
    variant?: 'primary' | 'accent'
    primary?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

export default function Button({ children, ...props}: ButtonProps) {
    return (
        <StyledButton
        {...props}
        >
            {children}
        </StyledButton>
    )
}

Button.defaultProps = {
    disabled: false,
    variant:'primary'
}

