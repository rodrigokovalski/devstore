import isPropValid from "@emotion/is-prop-valid";
import { styled } from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button.withConfig({
    shouldForwardProp: isPropValid
}) <ButtonProps>` 
    margin-top: 32px;
    display: flex;
    justify-content: center;
    background-color: #009966;
    border-radius: 24px;
    padding: 16px;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

export { StyledButton };