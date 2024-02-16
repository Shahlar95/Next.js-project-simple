import Image from 'next/image';
import rectangle from '@/public/image/Rectangle.png'
import rectangle2 from '@/public/image/Rectangle2.png'
import rectangle3 from '@/public/image/Rectangle3.png'

import '@/app/scss/page/_appworks.scss'

function Appworks() {
    return (
        <>
            <section className='app-account'>
                <div className="container">
                    <div className="how-app">
                        <div className="app-header">
                            <h2>How the app works</h2>
                        </div>
                        <div className="app-content">
                            <div className="app-img">
                                <Image
                                    width={300}
                                    height={300}
                                    src={rectangle}
                                    alt='app-img'
                                />
                            </div>
                            <div className="app-text">
                                <h3>Create an account</h3>
                                <h2>Create login to an existing account to get started</h2>
                                <p>An account is created with your emailand a desired password</p>
                                <p>iPhone 11 Frame</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='app-shop'>
                <div className="container">
                    <div className="app-shop-explore">
                    <div className="shop-content">
                        <h3>Explore varieties</h3>
                        <h2>Shop for your favoritesmeal as e dey hot.</h2>
                        <p>Shop for your favorite meals or drinks
                            and enjoy while doing it.</p>
                    </div>
                    <div className="shop-img">
                        <Image
                        width={300}
                        height={300}
                        src={rectangle2}
                        alt='app-image'
                        />
                    </div>
                    </div>
                   
                </div>
            </section>
            <section className='app-checkout'>
                <div className="container">
                    <div className="app-payment">
                        <div className="payment-img">
                            <Image 
                            src={rectangle3}
                            alt='payment-img'
                            width={300}
                            height={300}
                            />
                        </div>
                        <div className="payment-content">
                            <h3>Checkout</h3>
                            <h2>When you done check out and get it delivered.</h2>
                            <p>When you done check out and get it delivered with ease.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Appworks;