import icono1SVG from '../assets/img/icono1.svg'
import icono2SVG from '../assets/img/icono2.svg'
import icono3SVG from '../assets/img/icono3.svg'
import nosotros from '../assets/img/nosotros.jpg'
const NosotrosScreen = {
	render: () => {

		return `
			<h1 class="fw-300 centrar-texto">Conoce Sobre Nosotros</h1>

        <div class="contenido-nosotros">
					<div class="imagen">
							<img src="${nosotros}" alt="Imagen Sobre Nosotros" width="150%" height="475px">
					</div>
					<div class="texto-nosotros">
						<blockquote>15 Años de Experiencia brindando hermosas artesanias</blockquote>

						<p>Nos ubicamos en la hermosa ciudad de Ayacucho el distrito de Quinua "Capital de la artesania". Nuestro objetivo primordial es de brindar los mejores diseños  de cerámica a base de piedra ayacuchana, entre otros materiales, revalorando nuestra cultura antepasada y mostrando a las personas el gran valor que existe hacia la humanidad.</p>
						<p>Para asi lograr posesionarse como principales importadores y exportadores de artesanía ayacuchana a nivel local, nacional y mundial, asegurándonos que cada uno de nuestros visitantes puedan disfrutar de lo mejor de nuestra cultura ayacuchana reflejado en piezas únicas de nuestra región. </p>
						<p>Debemos tener una gran cultura de amor hacia lo nuestro porque revalora nuestros antepasados y con proximas al bicentenario se tiene un valor muy importante a estas Hermosas Artesanias</p>
					</div>
        </div>

			<section class="contenedor seccion">
      <h2 class="fw-300 centrar-texto">Más Sobre Nosotros</h2>

      <div class="iconos-nosotros">
        <div class="icono">
          <img src="${icono1SVG}" alt="Icono Seguridad" />
          <h3>CALIDAD</h3>
          <p>
            Utilizamos los mejores materiales autoctonos de la region, como la
            piedra blanca, arcilla, entro otros y un horno artesanal para
            elaborar nuestra hermosa artesania.
          </p>
        </div>

        <div class="icono">
          <img src="${icono2SVG}" alt="Icono Mejor Precio" />
          <h3>El Mejor Precio</h3>
          <p>
            Contamos con los mejores precios de acuerdo a la calidad del
            material y el tamaño o acabado de la artesania para el adorno de su
            local, oficina o hogar .
          </p>
        </div>

        <div class="icono">
          <img src="${icono3SVG}" alt="Icono a Tiempo" />
          <h3>A TIEMPO</h3>
          <p>
            Contamos con un servicio de Delivery rapido para que cualquier
            pedido que sea dentro de la ciudad de Ayacucho sea puntual y
            eficiente, igualmente contamos con envios a toda el Peru y el mundo.
          </p>
        </div>
      </div>
    </section>
		`

	}
}

export default NosotrosScreen