import React from "react";

function NavBar() {
	return (
		<>
			<section class="search-wrap">
				<div class="search">
					<label for="search">
						<i class="bi bi-search" style="font-size: 1.5rem; color: cornflowerblue;"></i>
						<input type="text" id="search" />
					</label>
				</div>

				<div class="user-actions">
					<button>
						<a href="#"><i class="bi bi-person-add" style="font-size: 1.5rem; color: cornflowerblue;"></i></a>
					</button>
					<button>
						<a href="#"><i class="bi bi-person"
							style="font-size: 1.5rem; color: cornflowerblue;"></i></a>
					</button>
					<button>
						<a href="#"><i class="bi bi-box-arrow-right"
							style="font-size: 1.5rem; color: cornflowerblue;"></i></a>
					</button>
				</div>
			</section>
		</>
	)
}

export default NavBar