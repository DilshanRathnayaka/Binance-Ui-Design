import { BsTelegram,BsFacebook } from "react-icons/bs";
import { FaDiscord,FaTiktok } from "react-icons/fa";
import { AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div>
    <div className='footer'>
      <div className="aboutus"> <h2>About Us</h2>
        <div>About</div>
        <div>Careers</div>
        <div>Business Contacts</div>
        <div>Community</div>
        <div>Binance Blog</div>
        <div>Terms</div>
        <div>Privacy</div>
        <div>Risk Warning</div>
        <div>Announcement</div>
        <div>News</div>
        <div>Notices</div>
        <div>Cookie Preferences</div>
      </div>
      <div className="Products"> 
      <h2>Products</h2>
        <div>Exchange</div>
        <div>Academy</div>
        <div>Binance Live</div>
        <div>Charit</div>
        <div>Card</div>
        <div>Labs</div>
        <div>Launchpad</div>
        <div>Research</div>
        <div>Trust Wallet</div>
        <div>NFT</div>
        <div>Binance Pay</div>
        <div>Binance Gift Card</div>
      </div>
      <div className="Service"> <h2>Service</h2>
        <div>Downloads</div>
        <div>Desktop Applycation</div>
        <div>Buy Crypto</div>
        <div>Institutional & VIP Services</div>
        <div>Referral</div>
        <div>Execution Solutons</div>
        <div>Affiliate</div>
        <div>BNB</div>
        <div>OTC Trading</div>
        <div>Listing Application</div>
        <div>P2P Merchant Application</div>
        <div>P2P ProMerchant Application</div>
        <div>Historical Market Data</div>
        <div>Proof of Asset</div>
      </div>
      <div className="support"> <h2>Support</h2>
        <div>Give Us Feedback</div>
        <div>Support Center</div>
        <div>Submit a request</div>
        <div>APIs</div>
        <div>Fees</div>
        <div>Trading Rules</div>
        <div>Binance Verify</div>
        <div>Low Enforcement Requests</div>
      </div>
      <div className="learn"> <h2>Learn</h2>
        <div>Learn & Earn</div>
        <div>Browse Crypto Prices</div>
        <div>Buy BNB</div>
        <div>Buy BUSD</div>
        <div>Buy Bitcoin</div>
        <div>Buy Ethereum</div>
        <div>Buy Litecoin</div>
        <div>Buy Ripple</div>
        <div>Buy Bitcoin Cash</div>
        <div>Buy Degecoin</div>
        <div>Buy DeFi</div>
        <div>Buy SHIB</div>
        <div>Buy Tradable Altcoins</div>
      </div>
      <div >
        <h2>Community</h2> <br />
        <div className="community">
          <div> <FaDiscord/></div>
       <div><BsTelegram/></div>
        <div> <FaTiktok/></div>
       <div> <BsFacebook/></div>
       <br />
       <div> <AiFillTwitterCircle/></div>
       <div> <AiFillInstagram/></div>
       
        </div>
        
      </div>
      
    </div><div className="binance">Binance@2022</div></div>
    
  )
}

export default Footer