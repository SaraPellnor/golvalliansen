"use client"
import logo from "@/public/assets/logo.png"
import Image from "next/image"
import HeaderMenu from "../HeaderMenu/page"
import { useEffect, useState } from "react"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        console.log("window.scrollY", window.scrollY);
        const handleScroll = () => {
            window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
            console.log(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return <div className={`fixed flex flex-row items-center justify-between bg-white w-full transition-all duration-500 ease-in-out 
    ${isScrolled ? "shadow-lg h-28" : "h-48"}`}>
        <Image className={`transition-all duration-500 ease-in-out 
            ${isScrolled && "w-1/6"}`} src={logo} width={250} height={100} alt="logo" />
        <HeaderMenu /> </div>
}

export default Header