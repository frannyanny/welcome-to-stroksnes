import HamburgerMenu from "../components/HamburgerMenu";
import Link from "next/link";

export default function Header() {
    
    return (
        <header className="flex flex-row items-end justify-between" >
            <div className="text-2xl 700 font-extrabold italic md:w-full">
                <div className="hidden md:block items-stretch">
                    <Link href="/">
                        <h1>Welcome to <br/>Strøksnes</h1>
                    </Link>
                </div>
                <div className="block md:hidden">
                    <Link href="/">
                        <h1>Welcome to Strøksnes</h1>
                    </Link>
                </div>
            </div>
            <div className="block md:hidden">
                <HamburgerMenu  />
            </div>
        </header> 
    );
}
