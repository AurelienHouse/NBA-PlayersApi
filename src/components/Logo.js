import './Logo.css';


export default function Logo() {
  return (
    <div className="logo-container">
<img id="logo-basket" src={process.env.PUBLIC_URL + "/images/logobasket.png"} alt="logo-basket" />        <h1 className="logo-text">NBA</h1>  
    </div>
  )
}
