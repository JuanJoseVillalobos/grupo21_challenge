import React from "react";

function NavBar() {
	return (
		<>
			<section className="search-wrap">
				<div className="search">
					<label for="search">
						<i className="bi bi-search" style="font-size: 1.5rem; color: cornflowerblue;"></i>
						<input type="text" id="search" />
					</label>
				</div>

				<div className="user-actions">
					<button>
						<a href="#"><i className="bi bi-person-add" style="font-size: 1.5rem; color: cornflowerblue;"></i></a>
					</button>
					<button>
						<a href="#"><i className="bi bi-person"
							style="font-size: 1.5rem; color: cornflowerblue;"></i></a>
					</button>
					<button>
						<a href="#"><i className="bi bi-box-arrow-right"
							style="font-size: 1.5rem; color: cornflowerblue;"></i></a>
					</button>
				</div>
			</section>
		</>
	)
}

export default NavBar