import Link from "next/link";

interface NavItemProps {
    name: string;
    link: string;
}

export default function NavItem({ name, link }: NavItemProps) {
    return (
        <div className="flex flex-col bg-black bg-opacity-35 w-5/6 ml-8 py-2 mt-2 hover:bg-opacity-75 rounded-md">
            <Link href={`/${link}`} className="ml-2">
                <div className="blur-item">{name}</div>
            </Link>
        </div>
    )
}