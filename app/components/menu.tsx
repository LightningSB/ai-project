import Link from "next/link";
import NavItem from "./nav-item";
export default function Menu() {
    return (
        <div className="h-screen w-1/6 bg-slate-800 shadow-black bg-opacity-80 backdrop-filter backdrop-blur-lg">
            <nav className="">
                <ul className="flex flex-col">
                    <li>
                        <div className="w-full bg-slate-900  py-4">
                            Hime
                        </div>
                    </li>
                    <li>
                        <NavItem name={"Home"} link={""}/>
                    </li>
                    <li>
                        <NavItem name={"About"} link={"about"} />
                    </li>
                </ul>
            </nav>
        </div>
    )
}