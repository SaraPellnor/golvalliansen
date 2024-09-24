import Link from 'next/link';

const HeaderMenu = () => {
    return (
        <nav>
            <ul className="flex flex-row gap-20 text-xl">
                <li className="">
                    <Link href="/">Home</Link>
                </li>
                <li className="">
                    <Link href="/about">About</Link>
                </li>
                <li className="">
                    <Link href="/services">Services</Link>
                </li>
                <li className="">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderMenu;