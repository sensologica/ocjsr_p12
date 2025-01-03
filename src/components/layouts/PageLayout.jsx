import { Outlet } from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import iconCycling from "../../assets/images/icon_cycling.svg"
import iconMeditation from "../../assets/images/icon_meditation.svg"
import iconSwimming from "../../assets/images/icon_swimming.svg"
import iconWeightlifting from "../../assets/images/icon_weightlifting.svg"

export default function PageLayout() {
  return (
    <>
      <div className="navigation">
        <ul>
          <li><a href="/" className="navigation__link">
            <img className="logo" src={logo} alt=""/>
          </a></li>
          <li><a href="#" className="navigation__link">Accueil</a></li>
          <li><a href="#" className="navigation__link">Profil</a></li>
          <li><a href="#" className="navigation__link">Réglages</a></li>
          <li><a href="#" className="navigation__link">Communauté</a></li>
        </ul>
      </div>
      
      <div className="sidebar">
        <ul>
          <li><a href="#" className="sidebar__link">
            <img src={iconMeditation} alt=""/>
          </a></li>
          <li><a href="#" className="sidebar__link">
            <img src={iconSwimming} alt=""/>
          </a></li>
          <li><a href="#" className="sidebar__link">
            <img src={iconCycling} alt=""/>
          </a></li>
          <li><a href="#" className="sidebar__link">
            <img src={iconWeightlifting} alt=""/>
          </a></li>
        </ul>
        <p className="sidebar__copyright">&copy; SportSee 2023</p>
      </div>
      <Outlet />
    </>
  )
}