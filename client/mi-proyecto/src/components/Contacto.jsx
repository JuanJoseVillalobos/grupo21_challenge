import React from "react";

function Contacto(props) {
	return (
		<>
			<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
				<div className="box-avatar">
					<img src="./src/assets/images/foto1.jpg" alt="Gloria" />
				</div>
				<div className="box-bio">
					<h2 className="bio-name">{props.nombre}</h2>
					<p className="bio-position">{props.numero}</p>
					{props.children}
				</div>
				<div className="box-actions">
					<button>
						<i className="bi bi-star"></i>
					</button>
					<button>
						<i className="bi bi-chat"></i>
					</button>
					<button>
						<i className="bi bi-envelope"></i>
					</button>
				</div>
			</div>
		</>
	)
}

export default Contacto;