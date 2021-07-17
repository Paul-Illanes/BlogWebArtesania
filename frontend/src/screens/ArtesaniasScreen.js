import anuncio1 from '../assets/img/anuncio1.jpg';
import anuncio2 from '../assets/img/anuncio2.jpg';
import anuncio3 from '../assets/img/anuncio3.jpg';
import anuncio4 from '../assets/img/anuncio4.jpg';
import anuncio5 from '../assets/img/anuncio5.jpg';
import anuncio6 from '../assets/img/anuncio6.jpg';

const ArtesaniasScreen = {
	render: () => {
		return `
      <div class="seccion contenedor">
				<h2 class="fw-300 centrar-texto">Nuestras hermosas Artesanias</h2>

				<div class="contenedor-anuncios">
					<div class="anuncio">
						<img src="${anuncio1}" alt="Sendero Luminoso">
						<div class="contenido-anuncio">
							<h3>Sendero Luminoso contra militares</h3>
							<p>Esta artesania hace referencia a lo vivido en los años 80 donde viviamos una epoca de violencia en nuestra querida ciudad de Ayacucho</p>
							<p class="precio">$30</p>

							<a href="/#/anuncio" class="boton boton-amarillo d-block">Ver detalles</a>
						</div>
					</div>

					<div class="anuncio">
						<img src="${anuncio2}" alt="Buho Subliminal">
						<div class="contenido-anuncio">
							<h3>Buho subliminal color blanco escarchado </h3>
							<p>Bonito adorno hecho de piedra de huamanga con un diseño particular y rustico que brinda suerte y esperanza en un hogar</p>
							<p class="precio">$80</p>  
							<a href="/#/anuncio" class="boton boton-amarillo d-block">Ver detalles</a>
						</div>
					</div>

					<div class="anuncio">
						<img src="${anuncio3}" alt="Adorno de varios pisos">
						<div class="contenido-anuncio">
							<h3>Adorno de varios pisos religioso</h3>
							<p>Adorno alusivo a la epoca antigua con relacion a la cultura y religion catolica de la ciudad de Huamanga</p>
							<p class="precio">$100</p>

							<a href="/#/anuncio"  class="boton boton-amarillo d-block">Ver Detalles</a>
						</div>
					</div>

					<div class="anuncio">
						<img src="${anuncio4}" alt="Kit artesanias">
						<div class="contenido-anuncio">
							<h3>Kit de artesanias culturales</h3>
							<p>Variedad de adornos hechos en ceramica: Guitarristas, iglesias, etc. Cada uno al precio unitario mostrado</p>
							<p class="precio">$10</p>
							<a href="/#/anuncio" class="boton boton-amarillo d-block">Ver detalles</a>
						</div><!--contenido anuncio-->
					</div> <!--anuncio-->
			
				<div class="anuncio">
					<img src="${anuncio5}" alt="entierro antiguo"width="180%" height="260px" >
					<div class="contenido-anuncio">
						<h3>Adorno sobre el entierro antiguo </h3>
						<p>Hermosa artesania hecha de ceramica mostrando como se enterraban a las personas antiguamente en el distrito de Quinua </p>
						<p class="precio">$50</p>
						<a href="/#/anuncio" class="boton boton-amarillo d-block">Ver detalles</a>
					</div><!--contenido anuncio-->
				</div> <!--anuncio-->

				<div class="anuncio">
						<img src="${anuncio6}" alt="Jesus"width="180%" height="260px">
						<div class="contenido-anuncio">
								<h3>Adorno de Cristo Crucificado</h3>
								<p>Hermosa artesania hecha con horno artesanal con la imagen de Cristo crucificado con base una iglesia de tiempos antiguos </p>
								<p class="precio">$200</p>
								<a href="/#/anuncio" class="boton boton-amarillo d-block">Ver detalles</a>
						</div><!--contenido anuncio-->
				</div> <!--anuncio-->
			</div>
    </div>
    `;
	},
};

export default ArtesaniasScreen;
