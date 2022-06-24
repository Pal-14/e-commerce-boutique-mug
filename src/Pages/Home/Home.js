import './Home.css';
import imgHomeShop from './shopimg.jpg'; 

export default function Home() {
  return (
    <div className='global-container'>
      <h1 className="home-title">Bienvenue au <span>Shop</span></h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic a repellendus assumenda veniam molestiae repudiandae sapiente cumque minus itaque, beatae cupiditate in, molestias obcaecati optio nam dolor impedit cum.</p>
      <img src={imgHomeShop} alt="accueil shop" />

    </div>
  )
}
