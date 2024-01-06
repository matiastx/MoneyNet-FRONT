import React from 'react'
import { StyledButton, StyledCryptoButton, TrashStyledButton } from './Button.Styled'
import { TbTrashXFilled } from 'react-icons/tb';

export const Button = ({
    children, 
    radius = `20`, 
    disabled = false,
    onClick = (e) => e.preventDefault()}) => {
        return (
            <StyledButton
            whileTap={{ scale: 0.9 }}
            disabled={disabled} 
            radius={radius}
            onClick={onClick}
        >{children}</StyledButton>
    )
}

export const OrdersButton = ({
    children,
    radius = "32",
    secondary,
    disabled = false,
    onClick = (e) => e.preventDefault(),}) => {
        return (
            <StyledButton
            disabled={disabled}
            onClick={onClick}
            secondary={secondary}
            radius={radius}
            whileTap={{ scale: 0.95 }}
        >{children}</StyledButton>
    );
};

export const TrashButton = ({
    disabled = false,
    onClick = (e) => e.preventDefault()
}) => {
    return (
        <TrashStyledButton
            whileTap={{ scale: 0.9 }}
            disabled={disabled} 
            onClick={onClick}
        ><TbTrashXFilled/>
        </TrashStyledButton>
    )
}

export const CryptoButton = ({
    children, 
    radius = `30`, 
    disabled = false,
    onClick = (e) => e.preventDefault()
}) => {
    return (
        <StyledCryptoButton
            whileTap={{ scale: 0.9 }}
            disabled={disabled} 
            radius={radius}
            onClick={onClick}
        >{children}
        </StyledCryptoButton>
    )
}

export const ButtonLogin = ({
    children, 
    radius = `60`, 
    disabled = false,
    onClick = (e) => e.preventDefault()
}) => {
    return (
        <StyledButton
            whileTap={{ scale: 0.9 }}
            disabled={disabled} 
            radius={radius}
            onClick={onClick}
        >{children}
        </StyledButton>
    )
}
