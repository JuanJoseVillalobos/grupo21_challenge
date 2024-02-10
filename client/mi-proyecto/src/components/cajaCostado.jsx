import React from 'react';
import '../assets/css/style.css'

import { Link , Route} from 'react-router-dom';
import Tarjeta from './Tarjeta';
import Profesiones from './Profesiones';

function CajaCostado() {
	return (
		<>
			<header className="menu-wrap">
				<button>
						<Link to='/'>
				<figure className="user">
					<div className="user-avatar">
							<img src="./src/assets/images/logo-dh.png" alt="Logo Digital House	" />	
	
					</div>
					<figcaption>
						Digital House
					</figcaption>
				</figure>	
						</Link>
				</button>
				
				<nav>
					<section className="menu">
						<h3>Opciones</h3>
						<ul>
							<li>
								<Link to='/empresas'>
									<i className="bi bi-building" />
									- Empresas
								</Link>
							</li>
							<li>
								<Link to="/aspirantes">
									<i className="bi bi-person" />
									- Aspirantes
								</Link>
							</li>
							<li>
								<Link to="/profesiones">
									<i className="bi bi-list-check"/>
									- Profesiones
								</Link>
							</li>
						
							<li>
								<Link to="/postulate">
									<i className="bi bi-person-vcard"/>
									- Postulate aquí
								</Link>
							</li>
							<li>
								<Link to="/contacto">
									<i className="bi bi-chat-left-text"/>
									- Contacto
								</Link>
							</li>
						</ul>
					</section>
				</nav>

				

			</header>
			
			
		</>
	);
};

export default CajaCostado;