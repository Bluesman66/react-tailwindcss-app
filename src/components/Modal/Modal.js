import React, { useEffect, useRef } from 'react';

import s from './Modal.module.scss';

const Modal = () => {
	const bodyRef = useRef(null);
	const modalRef = useRef(null);

	const openModal = (event) => {
		event.preventDefault();
		toggleModal();
	};

	const toggleModal = () => {
		modalRef.current.classList.toggle('opacity-0');
		modalRef.current.classList.toggle('pointer-events-none');
		bodyRef.current.classList.toggle(s['modal-active']);
	};

	useEffect(() => {
		document.onkeydown = (evt) => {
			evt = evt || window.event;
			let isEscape = false;
			if ('key' in evt) {
				isEscape = evt.key === 'Escape' || evt.key === 'Esc';
			} else {
				isEscape = evt.keyCode === 27;
			}
			if (isEscape && bodyRef.current.classList.contains(s['modal-active'])) {
				toggleModal();
			}
		};
	}, []);

	return (
		<div
			ref={bodyRef}
			className="bg-gray-200 flex items-center justify-center h-screen"
		>
			<button
				onClick={openModal}
				className="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded"
			>
				Open Modal
			</button>
			{/* Modal */}
			<div
				ref={modalRef}
				className={`${s.modal} opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center`}
			>
				<div
					onClick={toggleModal}
					className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
				/>
				<div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
					<div
						onClick={toggleModal}
						className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
					>
						<svg
							className="fill-current text-white"
							xmlns="http://www.w3.org/2000/svg"
							width={18}
							height={18}
							viewBox="0 0 18 18"
						>
							<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
						</svg>
						<span className="text-sm">(Esc)</span>
					</div>
					{/* Add margin if you want to see some of the overlay behind the modal*/}

					<div className="modal-content py-4 text-left px-6">
						{/*Title*/}
						<div className="flex justify-between items-center pb-3">
							<p className="text-2xl font-bold">Simple Modal!</p>
							<div
								onClick={toggleModal}
								className="modal-close cursor-pointer z-50"
							>
								<svg
									className="fill-current text-black"
									xmlns="http://www.w3.org/2000/svg"
									width={18}
									height={18}
									viewBox="0 0 18 18"
								>
									<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
								</svg>
							</div>
						</div>
						{/*Body*/}
						<p>Modal content can go here</p>
						<p>...</p>
						<p>...</p>
						<p>...</p>
						<p>...</p>
						{/*Footer*/}
						<div className="flex justify-end pt-2">
							<button className="px-4 bg-transparent p-3 rounded text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
								Action
							</button>
							<button
								onClick={toggleModal}
								className="modal-close px-4 bg-indigo-500 p-3 rounded text-white hover:bg-indigo-400"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
