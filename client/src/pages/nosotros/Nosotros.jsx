import "./nosotros.css";

export default function Nosotros() {
 
  
  return (
    <div className="nosotros">
       
       <div className="headerTitles">
        <span className="headerTitleSm"> Caminos Hukniray</span>
        <span className="headerTitleLg"> Nosotros </span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/2676589/pexels-photo-2676589.jpeg"
        alt=""
      />

      <div className="sidebarItem">

        <span className="sidebarTitle">Caminos Hukniray es el sitio perfecto para compartir con todo el mundo experiencias únicas e inolvidables de lugares ocultos. Buscamos hacer crecer nuestra comunidad de viajeros y dar a conocer sitios singulares, que son poco conocidos.</span>
         <i>***</i>
          <i className="sidebarItem"><h2>Nuestra Misión</h2> <p>Satisfacer las expectativas de compartición de experiencias de lugares poco conocidos entre viajeros.</p></i>
        
          <i>***</i>

          <i className="sidebarItem"><h2>Nuestra Visión</h2><p>Ser reconocidos a nivel mundial e hacer crecer nuestra comunidad con el objetivo de permitir a mas personas conocer y dar a conocer lugares inusuales.</p></i>
   
       
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
  
    </div>
  );
}
