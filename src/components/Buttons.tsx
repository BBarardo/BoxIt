import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const BtnLinkPrimary = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 8px 14px;
    margin: 4px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #256ce1;
    }
`;

export const BtnPrimary = styled.button`
    border-radius: 4px;
    background: #256ce1;
    padding: 8px 14px;
    margin: 4px;
    color: #fff;
    border: 2px solid #256ce1;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #256ce1;
        border: 2px solid #256ce1;

    }
`;

export const BtnLinkSecundary = styled(Link)`
    border-radius: 4px;
    background: #fff;
    padding: 8px 14px;
    margin: 4px;
    color: #256ce1;
    border: 2px solid #256ce1;

    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #256ce1;
        color: #fff
    }
`;