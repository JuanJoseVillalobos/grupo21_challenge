import React from "react";

function NavBar() {
	return (
		<>
			<section className="search-wrap">
				<div className="search">
					<label for="search">
						<i className="bi bi-search"/>
						<input type="text" id="search" />
					</label>
				</div>

				<div className="user-actions">
					<button>
						<a href="#"><i className="bi bi-person-add"/></a>
					</button>
					<button>
						<a href="#"><i className="bi bi-person"
							/></a>
					</button>
					<button>
						<a href="#"><i className="bi bi-box-arrow-right"
							/></a>
					</button>
				</div>
			</section>
		</>
	)
}

export default NavBar