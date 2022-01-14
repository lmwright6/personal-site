/// <reference types="react" />
import "./NavBar.css";
export declare type NavBarProps = {
    name: string;
    links: RouteObj[];
    backgroundColor: string;
    fontColor: string;
};
export interface RouteObj {
    title: string;
    path: string;
}
declare function NavBar({ name, links, backgroundColor, fontColor }: NavBarProps): JSX.Element;
export default NavBar;
//# sourceMappingURL=NavBar.d.ts.map