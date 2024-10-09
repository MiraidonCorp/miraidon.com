import React from "react";

const SearchForm = ({ onSearchModal }) => {
	return (
		<>
			<div className="modal fade searchModal show">
				<div className="modal-dialog">
					<div className="modal-content">
						<form>
							<label className="d-block">
								<input
									type="text"
									className="form-control"
									placeholder="Search here...."
								/>
							</label>
							<button type="submit">
								<i className="flaticon-search"></i>
							</button>
						</form>
						<button
							type="button"
							className="btn-close"
							onClick={onSearchModal}
						></button>
					</div>
				</div>
			</div>
			<div className="modal-backdrop fade show"></div>
		</>
	);
};

export default SearchForm;
