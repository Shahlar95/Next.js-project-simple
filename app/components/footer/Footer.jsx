import Image from "next/image"
import logo from '@/public/image/left.png'
import twitter from '@/public/image/twitter.png'
import instaqram from '@/public/image/instagram.png'
import facebook from '@/public/image/facebook.png'
import '@/app/scss/layout/_footer.scss'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
        <div className="footer-logo">
          <Image
            width={300}
            height={300}
            src={logo}
            alt="logo-image"
          />
        </div>
        <div className="footer-smm">
         <div className=""> 
          <Image
          width={100}
          height={100}
          src={twitter}
          alt="twitter"
          />
          </div>
         <div> 
          <Image
          width={100}
          height={100}
          src={instaqram}
          alt="instaqram"
          />
          </div>
         <div>
         <Image
          width={100}
          height={100}
          src={facebook}
          alt="instaqram"
          />
         </div>
        </div>  
        <div className="footer-text">
         Copywright 2020 Bella Onojie.com
        </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer