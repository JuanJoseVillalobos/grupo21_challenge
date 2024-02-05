import React from 'react';
import '../assets/css/style.css'

function CajaCostado() {
	return (
		<>
			<header className="menu-wrap">
				<figure className="user">
					<div className="user-avatar">
						<img src="./src/assets/images/logo-dh.png" alt="Logo Digital House	" />
					</div>
					<figcaption>
						Digital House
					</figcaption>
				</figure>
				<nav>
					<section className="menu">
						<h3>Opciones</h3>
						<ul>
							<li>
								<a href="#">
									<i className="bi bi-building" />
									- Empresas
								</a>
							</li>
							<li>
								<a href="#">
									<i className="bi bi-person" />
									- Aspirantes
								</a>
							</li>
							<li>
								<a href="#">
									<i className="bi bi-list-check"/>
									- Profesiones
								</a>
							</li>
							<li>
								<a href="#">
									<i className="bi bi-person-vcard"/>
									- Postulate aquí
								</a>
							</li>
							<li>
								<a href="#">
									<i className="bi bi-chat-left-text"/>
									- Contacto
								</a>
							</li>
						</ul>
					</section>
				</nav>
			</header>
		</>
	);
};

export default CajaCostado;