import logo from "@/public/assets/logo.png"
import Image from "next/image"
import HeaderMenu from "../HeaderMenu/page"

const Header = () => {
    return <div className=" flex flex-row items-center justify-between mx-10 h-44">
        <Image src={logo} width={250} height={100} />
        <HeaderMenu /> </div>
}

export default Header