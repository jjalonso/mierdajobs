import cls from "classnames";

import Props from "./props"
import styles from './styles.module.css';

const NavButton: React.FC<Props> = ({ children, active }) =>
    <button className={cls(
        [styles.btn, styles.btnNav],
        { [styles.btnNavActive]: active })}>
        {children}
    </button>

export { NavButton };