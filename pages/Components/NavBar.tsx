import Link from "next/link";
import { Button } from 'antd';
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";

export default function NavBar (){
    return(
        <div className="NavBar">
         <div className="left">
          <Link href='/'><img className="logo" src="https://i.ibb.co/rQmvLbH/1920px-Binance-logo-svg.png" alt="" /></Link>
          <a className="fath" href="" ><BsGrid3X3GapFill /></a>
         <a className="buycripto" href="">Buy Cripto <span className="USD">USD</span></a>
         <a className="Markets" href="">Markets</a>
         <a className="Trade" href="">Trade</a>
         <a className="Derivatives" href="">Derivatives</a>
         <a className="Earn" href="">Earn</a>
         <a className="Finance" href="">Finance</a>
         <a className="NFT" href="">NFT <span className="NEW" >NEW</span></a>
         </div>
         <div className="right">
          <a className="login" href="">Log In</a>
         <a href="" className="register">Register</a> 
          <a className="downloads" href="">Downloads</a>
          <a className="english" href="">English</a>
          <span className="line"><AiOutlineLine style = {{transform: 'rotate(90deg)' }}/></span>
          <span>USD</span>
          <span className="line"><AiOutlineLine style = {{transform: 'rotate(90deg)' }}/></span>
         </div>
        </div>
    )   
}