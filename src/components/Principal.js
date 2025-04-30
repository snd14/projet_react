import '../styles/Description.css'
import logo from '../assets/logos.png'

function Principal(){
    const title="La maison jungle"
    return <div className='lmj-banner'>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
    <h1 className="lmj-logo">{title}</h1>
</div> 
}
export default Principal