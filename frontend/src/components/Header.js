import barrasSvg from '../assets/img/barras.svg';

const Header = {
	render: () => {
		const href = window.location.href.split('/#/')[1];
    const isBgHeader = href.length !== 0
		return `
      <div class="site-header ${!isBgHeader ? 'inicio' : ''}">
        <div class="contenedor contenido-header">
          <div class="barra">
            <h1>
              <a href="/#/" class="link-nav">
                  Galeria Artesanal "Limaco"
              </a>
            </h1>
                      
          <div class="mobile-menu"> 
            <a href="#navegacion">
              <img src="${barrasSvg}" alt="Icono Menu">
            </a>
          </div>

          <nav id="navegacion" class="navegacion">
            <div>
              <a href="/#/nosotros">Nosotros</a>
              <a href="/#/artesanias">Artesanias</a>
              <a href="/#/blog">Blog</a>
              <a href="/#/contacto">Contacto</a>
            </div> 
          </nav>
        </div>
      </div>
    </div>
    `;
	},
	after_render: () => {},
};

export default Header;
