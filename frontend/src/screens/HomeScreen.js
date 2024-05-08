import icono1SVG from '../assets/img/icono1.svg'
import icono2SVG from '../assets/img/icono2.svg'
import icono3SVG from '../assets/img/icono3.svg'
import anuncio1 from '../assets/img/anuncio1.jpg'
import anuncio2 from '../assets/img/anuncio2.jpg'
import anuncio3 from '../assets/img/anuncio3.jpg'


const HomeScreen = {
	render: () => {
		return `
		<div class="seccion contenedor">
			<section class="contenedor seccion">
        <h2 class="fw-300 centrar-texto">Más Sobre Nosotros</h2>

        <div class="iconos-nosotros">
					<div class="icono">
							<img src="${icono1SVG}" alt="Icono Seguridad">
							<h3>CALIDAD</h3>
							<p>Utilizamos los mejores materiales autoctonos de la region, como la piedra blanca, arcilla, entro otros y un horno artesanal para elaborar nuestra hermosa artesania.</p>
					</div>

					<div class="icono">
							<img src="${icono2SVG}" alt="Icono Mejor Precio">
							<h3>El Mejor Precio</h3>
							<p>Contamos con los mejores precios de acuerdo a la calidad del material y el tamaño o acabado de la artesania para el adorno de su local, oficina o hogar .</p>
					</div>

					<div class="icono">
							<img src="${icono3SVG}" alt="Icono a Tiempo">
							<h3>A TIEMPO</h3>
							<p>Contamos con un servicio de Delivery rapido para que cualquier pedido que sea dentro de la ciudad de Ayacucho sea puntual y eficiente, igualmente contamos con envios a toda el Peru y el mundo.</p>
					</div>
        </div>
			</section>

    <main class="seccion contenedor">
			<h2 class="fw-300 centrar-texto">Alguno de nuestras hermosas artesanias</h2>

			<div class="contenedor-anuncios">
				<div class="anuncio">
					<img src="${anuncio1}" alt="Sendero Luminoso">
					<div class="contenido-anuncio">
						<h3>Sendero Luminoso contra militares</h3>
						<p>Esta artesania hace referencia a lo vivido en los años 80 donde viviamos una epoca de violencia en Ayacucho</p>
						<p class="precio">$30</p>

						<a href="anuncio.html" class="boton boton-amarillo d-block">Ver detalles</a>
					</div>
				</div>

				<div class="anuncio">
					<img src="${anuncio2}" alt="Buho Subliminal">
					<div class="contenido-anuncio">
						<h3>Buho subliminal color blanco escarchado </h3>
						<p>Bonito adorno hecho de piedra de huamanga con un diseño particular y rustico que brinda suerte y esperanza en un hogar</p>
						<p class="precio">$80</p>  
						<a href="anuncio.html" class="boton boton-amarillo d-block">Ver detalles</a>
					</div>
				</div>

					<div class="anuncio">
						<img src="${anuncio3}" alt="Adorno de varios pisos">
						<div class="contenido-anuncio">
							<h3>Adorno de varios pisos religioso</h3>
							<p>Adorno alusivo a la epoca antigua con relacion a la cultura y religion catolica de la ciudad de Huamanga</p>
							<p class="precio">$100</p>

							<a href="anuncio.html" class="boton boton-amarillo d-block">Ver Detalles</a>
						</div>
					</div>
				</div>

			<div class="ver-todas">
					<a href="/#/artesanias" class="boton boton-verde">Ver Todas</a>
			</div>
    </main>

			<section class="imagen-contacto">
				<div class="contenedor contenido-contacto">
					<h4>Adorna tu hogar, oficina o negocio con nuestras bellas artesanias</h4>
					<p>Llena el formulario de contacto y un asesor se pondrá en contacto contigo a la brevedad</p>
					<a href="/#/contacto" class="boton boton-amarillo">Contactános</a>
				</div>
			</section>
		</div>
		`;
	},
};

export default HomeScreen;
