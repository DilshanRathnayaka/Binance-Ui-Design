import React from 'react'
import { FiGift } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";

function index() {
  return (
    <div className='main'>
    <div className='container'>
      <div className="container-left">
        <h1>Buy,trade,and <br /> hold 600+ <br></br>cryptocurrencies <br /> on Binance</h1>
        <div className='freegift'><div className='gift'><FiGift/></div><div className='free'> Trade Bitcoin for free </div><div className='arrowico'><FaChevronRight/></div></div>
        <div className='emailregister'><input className='inputemail' type="text" name="name" placeholder='Email/Phone number'/>  <button className="getstarted">Get Started</button></div> 
       
      </div>
      <div className="container right">
      <img className="right-image" src="https://i.ibb.co/vsjbnJJ/Web-capture-12-8-2022-20204-www-binance-com.jpg" alt="" />
      </div>

      

    </div>
    <div className='baar'>
        <div className='bilion'><h1 className='baarh1'>$76 billion </h1><br />24h trading volume on binance <br /> exchange</div>
        <div className='crypto'><h1 className='baarh1'>600+ </h1><br />Cryptocurrencies listed</div>
        <div className='90million'><h1 className='baarh1'>90 million </h1><br />Registered users who trust <br /> Binance</div>
        <div className='lowest'><h1 className='baarh1'>{"<"}.10%</h1><br />Lowest transaction fees</div>
      </div>
    </div>
  )
}

export default index

