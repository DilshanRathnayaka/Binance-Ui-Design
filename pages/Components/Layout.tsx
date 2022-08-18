import { ReactNode } from "react";
import Footer from "./footer";
import NavBar from "./NavBar";

interface Props{
    children?:ReactNode
}

export default function Layout({children,...props}:Props){
    return (
      <>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }