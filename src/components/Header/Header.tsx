import { useDispatch } from "react-redux";
import classes from "./Header.module.scss";
import { ButtonBlock, HeaderBlock, HeaderBlockContainer, HeaderButton, HeaderLink } from "./Header.styled";
import { toggleThemeAction } from "../../feature/themeReducer";

export const Header = () => {
    const dispatch = useDispatch();

    const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? `${classes.active} ${classes.link}` : classes.link;
    };
    return (
        <HeaderBlock>
            <HeaderBlockContainer>
                <HeaderLink to="/" className={getActiveClass}>
                    ToDo
                </HeaderLink>

                <HeaderLink to="/list" className={getActiveClass}>
                    List
                </HeaderLink>

                <ButtonBlock>
                    <HeaderButton onClick={() => dispatch(toggleThemeAction())}>Change Theme</HeaderButton>
                </ButtonBlock>
            </HeaderBlockContainer>
        </HeaderBlock>
    );
};
