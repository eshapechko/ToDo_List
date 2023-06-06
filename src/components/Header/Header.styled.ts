import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBlock = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`;

export const HeaderBlockContainer = styled.div`
    position: relative;
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;

    &.active {
        color: #ffffff33;
    }
`;

export const ButtonBlock = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
`;

export const HeaderButton = styled.button`
    background-color: #2196f3ff;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    color: #fff;
`;
