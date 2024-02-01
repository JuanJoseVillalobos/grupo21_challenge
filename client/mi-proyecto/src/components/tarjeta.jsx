import React from "react";

function Tarjeta() {
	return (
		<>
			<section class="content aspirantes">
				<h2>Aspirantes</h2>
				<article class="person-boxes">
					<div class="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div class="box-avatar">
							<img src="./src/assets/images/foto1.jpg" alt="Gloria" />
						</div>
						<div class="box-bio">
							<h2 class="bio-name">Gloria Medina</h2>
							<p class="bio-position">Administrador</p>
						</div>
						<div class="box-actions">
							<button>
								<i class="bi bi-star"></i>
							</button>
							<button>
								<i class="bi bi-chat"></i>
							</button>
							<button>
								<i class="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div class="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div class="box-avatar">
							<img src="./src/assets/images/foto2.jpg" alt="Daniel Fuentes" />
						</div>
						<div class="box-bio">
							<h2 class="bio-name">Daniel Fuentes</h2>
							<p class="bio-position">Técnico de sonido</p>
						</div>
						<div class="box-actions">
							<button>
								<i class="bi bi-star"></i>
							</button>
							<button>
								<i class="bi bi-chat"></i>
							</button>
							<button>
								<i class="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div class="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div class="box-avatar">
							<img src="./src/assets/images/foto3.jpg" alt="Lee Chim" />
						</div>
						<div class="box-bio">
							<h2 class="bio-name">Tim Tim</h2>
							<p class="bio-position">Linguista</p>
						</div>
						<div class="box-actions">
							<button>
								<i class="bi bi-star"></i>
							</button>
							<button>
								<i class="bi bi-chat"></i>
							</button>
							<button>
								<i class="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div class="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div class="box-avatar">
							<img src="./src/assets/images/foto4.jpg" alt="Rocio" />
						</div>
						<div class="box-bio">
							<h2 class="bio-name">Rocio Carle</h2>
							<p class="bio-position">Profesor</p>
						</div>
						<div class="box-actions">
							<button>
								<i class="bi bi-star"></i>
							</button>
							<button>
								<i class="bi bi-chat"></i>
							</button>
							<button>
								<i class="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div class="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div class="box-avatar">
							<img src="./src/assets/images/foto5.jpg" alt="Vctor" />
						</div>
						<div class="box-bio">
							<h2 class="bio-name">Victor Fuentes</h2>
							<p class="bio-position">Computista</p>
						</div>
						<div class="box-actions">
							<button>
								<i class="bi bi-star"></i>
							</button>
							<button>
								<i class="bi bi-chat"></i>
							</button>
							<button>
								<i class="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div class="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div class="box-avatar">
							<img src="./src/assets/images/foto6.jpg" alt="Luis" />
						</div>
						<div class="box-bio">
							<h2 class="bio-name">Luis Fuentes</h2>
							<p class="bio-position">Economista</p>
						</div>
						<div class="box-actions">
							<button>
								<i class="bi bi-star"></i>
							</button>
							<button>
								<i class="bi bi-chat"></i>
							</button>
							<button>
								<i class="bi bi-envelope"></i>
							</button>
						</div>
					</div>
				</article>
			</section>
		</>
	)
}

export default Tarjeta;