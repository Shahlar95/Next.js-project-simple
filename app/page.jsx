
import Image from 'next/image';
import appImg from '@/public/image/Group 53.png'
import Appworks from './components/appworks/Appworks';
import Download from './components/app-download-now/Download';


import '@/app/scss/page/_page.scss'
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <section className="food-download">
      <div className="container">
        <div className="food-content">
          <h4>Food app</h4>
          <h1>Why stay hungry when <br/> you can order from Bella Onojie</h1>
          <p>Download the bella onojes food app nown on</p>
          <div className="dowload-app">
              <button className="playstore">Playstore</button>
              <button className="appstore">App store</button>
          </div>
        </div>
      </div>
     </section>
     <section className='app'>
      <div className="container">
        <div className="app-image">
        <div className="img">
            <Image
            width={300}
            height={300}
            src = {appImg}
            alt='image-app'
            />
          </div>
        </div>
         
      </div>
     </section>
     <Appworks/>
     <Download/>
    </main>
  );
}
