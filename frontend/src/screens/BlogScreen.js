import blog1 from '../assets/img/blog1.jpg';
import blog2 from '../assets/img/blog2.jpg';
import blog3 from '../assets/img/blog3.jpg';

const BlogScreen = {
	render: () => {
		return `
      <div class="contenedor seccion contenido-centrado">
        <h1 class="fw-300 centrar-texto">Nuestro Blog</h1>
        <article class="entrada-blog">
					<div class="imagen">
						<img src="${blog1}" alt="Entrada de blog">
					</div>
					<div class="texto-entrada">
						<a href="entrada.html">
							<h4>Nuestras artesanias estan hechas de piedra nativa de huamanga</h4>
						</a>
						<p>Escrito el: <span> 15/07/2021 </span> por: <span> Maestro Artesano </span> </p>
						<p>Como usamos la piedra nativa de huamanga para nuestras hermosas artesanias</p>
					</div>
        </article>

        <article class="entrada-blog">
					<div class="imagen">
						<img src="${blog2}" alt="Entrada de blog" height="250px">
					</div>
					<div class="texto-entrada">
						<a href="entrada.html">
							<h4>Como usamos horno artesanal para hacer nuestras piezas personales unicas </h4>
						</a>
						<p>Escrito el: <span> 15/07/2021 </span> por: <span> Maestro Artesano </span> </p>
						<p>Una de las formas mas antiguas es el horneado para las artesanias</p>
					</div>
        </article>

			<article class="entrada-blog">
				<div class="imagen">
					<img src="${blog3}" alt="Entrada de blog" height="250px">
				</div>
				<div class="texto-entrada">
					<a href="entrada.html">
						<h4>Utilizamos todo tipo de piedras artesanales y autoctonas de nuestra region</h4>
					</a>
					<p>Escrito el: <span> 20/10/2021 </span> por: <span> Maestro Artesano </span> </p>
					<p>Hacemos una cuidadosa seleccion de hermosas nativas de nuestra localidad para su posterior uso</p>
			</article>
    </div>`;
	},
};

export default BlogScreen;
