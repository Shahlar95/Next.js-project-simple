import Image from "next/image"
import left from '../../../public/image/left.png'
import { FaBars } from "react-icons/fa";
import Link from "next/link"

import '@/app/scss/layout/_header.scss'

function Header() {
  return (
    <>
    <header className="nav">
       
       <div className="container">
            <div className="nav-menu">
            <div className="logo">
                <Image
                width={300}
                height={300}
                src={left}
                alt="LOGO"
                />
            </div>
            <div className="menu">
                <ul>
                    <li><Link href={''}>Home</Link></li>
                    <li><Link href={''}>Product</Link></li>
                    <li><Link href={''}>Faq</Link></li>
                    <li><Link href={''}>Contact</Link></li>
                </ul>
            </div>
            <div className="bars">
            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <FaBars />
           
            </button>

<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
  <div className="logo">
                <Image
                width={500}
                height={300}
                src={left}
                alt="LOGO"
                />
            </div>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
       
    </button>
  </div>
  <div className="offcanvas-body">
    <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Faq</li>
        <li>Contact</li>
    </ul>
  </div>
</div>
            </div>
            </div>
       </div>
       
    </header>
    </>
  )
}

export default Header