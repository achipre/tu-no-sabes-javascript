import { useState } from "react";
import { ButtonAside } from "./ButtonAside";
export const Sidebar = ({direction}) => {

	const [isOpen, setIsOpen] = useState(true);
	const handleAside = () => setIsOpen(!isOpen)

	return (
		
	<aside className={`hidden sm:block fixed top-0 left-0 ${isOpen ? "translate-x-0": "-translate-x-[284px]"} z-40 w-[348px]  h-screen transition-transform`} ariaabel="Sidenav">
		
		<div className="overflow-y-auto py-5 px-3 h-full bg-[#f6e4c5] dark:bg-amber-900">
			<ul className="space-y-2">
				<div className="flex gap-2">
					<li className="list-none flex-1 gap-2">
						<a href="/" className={`group flex flex-1 items-center p-2 text-lg font-bold  rounded-sm dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900 `}>
							<svg className={`w-6 h-6 m-auto fill-[#FFF8E8] transition duration-500 group-hover:fill-[#FFF8E8] dark:group-hover:fill-amber-900`} width="64px" height="64px" viewBox="0 0 4.16 4.16" enableBackground="new 0 0 52 52" >
								<path d="M3.92 2.16h-0.4v1.76c0 0.048 -0.032 0.08 -0.08 0.08H2.64c-0.048 0 -0.08 -0.032 -0.08 -0.08V2.56H1.6v1.36c0 0.048 -0.032 0.08 -0.08 0.08H0.72c-0.048 0 -0.08 -0.032 -0.08 -0.08V2.16H0.24c-0.032 0 -0.064 -0.016 -0.072 -0.048 -0.016 -0.032 -0.008 -0.064 0.016 -0.088l1.84 -1.84c0.032 -0.032 0.088 -0.032 0.112 0l1.84 1.84c0.024 0.024 0.024 0.056 0.016 0.088s-0.04 0.048 -0.072 0.048"/>
							</svg>
						</a>
					</li>
					<li className="list-none flex-1 gap-2">
						<a href="/javascript-la-guia-definitiva" className={`group flex flex-1 items-center p-2 text-lg font-bold  rounded-sm dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900 `}>
							<svg version="1.1" x="0px" y="0px" className={`w-6 h-6 m-auto fill-[#FFF8E8] transition duration-500 group-hover:fill-[#FFF8E8] dark:group-hover:fill-amber-900`} viewBox="0 0 64 64"  width="64" height="64">
								<path d="M32 0c-2.977 0 -9.441 33.766 -9.441 38.698s4.509 8.93 9.441 8.93 9.441 -3.998 9.441 -8.93S34.977 0 32 0"/>
								<path d="M39.253 4.864c1.143 3.783 2.221 8.38 2.945 11.678 1.783 8.125 3.708 18.905 3.708 22.156 0 7.261 -6.368 13.395 -13.906 13.395s-13.906 -6.134 -13.906 -13.395c0 -3.25 1.925 -14.031 3.708 -22.156 0.724 -3.298 1.802 -7.895 2.945 -11.678 -8.056 1.729 -14.095 8.889 -14.095 17.462v23.814C10.652 56.004 18.648 64 28.513 64h6.975c9.864 0 17.86 -7.996 17.86 -17.86V22.326c0 -8.572 -6.04 -15.733 -14.095 -17.462M16.372 52.837h-0.001c-1.641 0 -2.976 -1.335 -2.976 -2.977 0.001 -1.642 1.336 -2.977 2.977 -2.977 1.641 0 2.977 1.335 2.977 2.977s-1.335 2.977 -2.977 2.977m9.908 6.698c0 -1.138 -0.36 -2.218 -1.04 -3.124l3.57 -2.682c1.266 1.686 1.936 3.693 1.936 5.806zm11.44 0h-4.465c0 -2.113 0.669 -4.12 1.936 -5.806l3.57 2.682c-0.681 0.906 -1.04 1.986 -1.04 3.124m9.908 -6.698h-0.001c-1.641 0 -2.976 -1.335 -2.976 -2.977 0.001 -1.642 1.336 -2.977 2.977 -2.977 1.641 0 2.977 1.335 2.977 2.977s-1.335 2.977 -2.977 2.977"/>
								<path d="M11.418 3.232c-2.325 -2.325 -6.094 -2.325 -8.419 0 -2.325 2.325 -2.325 6.095 0 8.419 1.386 1.385 3.284 1.945 5.084 1.679 0.806 -1.834 1.859 -3.563 3.139 -5.129 0.775 -0.948 1.625 -1.826 2.538 -2.628z"/>
								<path d="M61.001 3.232c-2.325 -2.325 -6.095 -2.325 -8.42 0L50.24 5.574a22.325 22.325 0 0 1 2.538 2.628c1.28 1.566 2.333 3.295 3.139 5.129 1.8 0.266 3.699 -0.294 5.084 -1.679 2.325 -2.325 2.325 -6.095 0 -8.419"/>
							</svg>
						</a>
					</li>
					<li className="list-none flex-1 gap-2">
						<a href="/como-superar-una-entrevista" className={`group flex flex-1 items-center p-2 text-lg font-bold  rounded-sm dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900 `}>
							<svg x="0px" y="0px" className={`w-6 h-6 m-auto fill-[#FFF8E8] transition duration-500 group-hover:fill-[#FFF8E8] dark:group-hover:fill-amber-900`} viewBox="0 0 64 64" fill="#FFF8E8">
								<path d="m43.857 3.997 1.604 -2.211c1.409 -1.94 4.13 -2.363 6.059 -0.954l5.257 3.837c1.929 1.409 2.352 4.13 0.943 6.059l-1.723 2.352c-3.208 -3.956 -7.37 -7.11 -12.139 -9.083M8.003 13.08c3.208 -3.956 7.37 -7.11 12.139 -9.083l-1.604 -2.211C17.129 -0.155 14.409 -0.577 12.48 0.832L7.223 4.669c-1.929 1.409 -2.352 4.13 -0.943 6.059zm44.59 19.444c0 11.356 -9.238 20.593 -20.593 20.593 -11.356 0 -20.593 -9.238 -20.593 -20.593s9.238 -20.593 20.593 -20.593 20.593 9.238 20.593 20.593m-7.045 0c0 -0.898 -0.728 -1.626 -1.626 -1.626h-9.767a2.694 2.694 0 0 0 -1.972 -1.066l-4.042 -11.225c-0.203 -0.562 -0.823 -0.86 -1.386 -0.653a1.083 1.083 0 0 0 -0.653 1.386l4.039 11.217c-0.521 0.495 -0.851 1.19 -0.851 1.965 0 1.497 1.213 2.71 2.71 2.71 0.883 0 1.66 -0.429 2.156 -1.084h9.767c0.897 0 1.626 -0.728 1.626 -1.626m6.319 23.639c1.994 3.122 2.547 6.178 1.138 7.359 -1.517 1.279 -4.834 -0.098 -7.76 -3.089a18.808 18.808 0 0 1 -0.965 -1.073l-0.531 -0.628c-3.588 1.626 -7.566 2.514 -11.749 2.514 -4.184 0 -8.161 -0.889 -11.749 -2.514l-0.531 0.628a18.649 18.649 0 0 1 -0.965 1.073c-2.926 2.991 -6.243 4.368 -7.76 3.089 -1.409 -1.181 -0.856 -4.238 1.138 -7.359 0.369 -0.585 0.802 -1.171 1.268 -1.756 -6.2 -5.268 -10.123 -13.115 -10.123 -21.883 0 -6.644 2.254 -12.757 6.048 -17.624 3.122 -4.032 7.316 -7.197 12.139 -9.094 3.262 -1.301 6.817 -2.005 10.535 -2.005 3.717 0 7.273 0.705 10.535 2.005 4.823 1.897 9.018 5.062 12.139 9.094 3.793 4.867 6.048 10.98 6.048 17.624 0 8.768 -3.924 16.615 -10.123 21.883 0.466 0.585 0.9 1.171 1.268 1.756m2.894 -23.639c0 -12.55 -10.211 -22.761 -22.761 -22.761 -12.551 0 -22.761 10.211 -22.761 22.761 0 12.55 10.21 22.761 22.761 22.761 12.55 0 22.761 -10.211 22.761 -22.761"/>
							</svg>
						</a>
					</li>
					<li className="list-none flex-1 gap-2">
						<a href="/descifra-la-carrera-tecnologica" className={`group flex flex-1 items-center p-2 text-lg font-bold  rounded-sm dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900 `}>
							<svg className={`w-6 h-6 m-auto fill-[#FFF8E8] transition duration-500 group-hover:fill-[#FFF8E8] dark:group-hover:fill-amber-900`} x="0px" y="0px" viewBox="0 0 64 64" width="64" height="64"><path d="M58.407 43.993h-18.288l-1.119 2.958h19.406c0.832 0 1.506 -0.674 1.506 -1.506s-0.674 -1.452 -1.506 -1.452"/><path d="M37.109 59.698h-6.454v-5.755h-8.39v5.755h-6.454c-1.188 0 -2.151 0.963 -2.151 2.151S14.624 64 15.812 64h21.298c1.188 0 2.151 -0.963 2.151 -2.151s-0.963 -2.151 -2.151 -2.151"/><path d="M37.109 24.847c3.084 0 5.593 -2.509 5.593 -5.593s-2.509 -5.593 -5.593 -5.593 -5.593 2.509 -5.593 5.593 2.509 5.593 5.593 5.593"/><path d="M45.714 19.254c0 4.041 -2.8 7.438 -6.561 8.358v9.39a1.506 1.506 0 0 0 1.506 1.506h10.649a1.506 1.506 0 0 0 1.506 -1.506V1.506A1.506 1.506 0 0 0 51.308 0h-10.649a1.506 1.506 0 0 0 -1.506 1.506v9.39c3.761 0.92 6.561 4.317 6.561 8.358"/><path d="m33.56 50.931 3.55 -6.938h-14.198c-5.881 0 -10.649 -4.714 -10.649 -10.595s4.768 -10.649 10.649 -10.649h6.338a8.555 8.555 0 0 1 -0.745 -3.496c0 -1.202 0.249 -2.348 0.696 -3.388h-7.58c-9.683 0 -17.533 7.85 -17.533 17.533s7.85 17.533 17.533 17.533z"/></svg>
						</a>
					</li>
					<ButtonAside handleAside={handleAside} />
				</div>
				<li className="list-none flex gap-2">
					<a href="/javascript-la-guia-definitiva" className={`group flex flex-1 items-center p-2 text-lg font-bold  rounded-sm dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
						<svg version="1.1" x="0px" y="0px" className={`w-6 h-6 transition duration-500 group-hover:fill-[#FFF8E8] dark:group-hover:fill-amber-900 ${direction === '/javascript-la-guia-definitiva' ? 'fill-[#fff8e8] dark:fill-amber-900' : 'fill-amber-900 dark:fill-[#fff8e8]'}`} viewBox="0 0 64 64"  width="64" height="64">
							<path d="M32 0c-2.977 0 -9.441 33.766 -9.441 38.698s4.509 8.93 9.441 8.93 9.441 -3.998 9.441 -8.93S34.977 0 32 0"/>
							<path d="M39.253 4.864c1.143 3.783 2.221 8.38 2.945 11.678 1.783 8.125 3.708 18.905 3.708 22.156 0 7.261 -6.368 13.395 -13.906 13.395s-13.906 -6.134 -13.906 -13.395c0 -3.25 1.925 -14.031 3.708 -22.156 0.724 -3.298 1.802 -7.895 2.945 -11.678 -8.056 1.729 -14.095 8.889 -14.095 17.462v23.814C10.652 56.004 18.648 64 28.513 64h6.975c9.864 0 17.86 -7.996 17.86 -17.86V22.326c0 -8.572 -6.04 -15.733 -14.095 -17.462M16.372 52.837h-0.001c-1.641 0 -2.976 -1.335 -2.976 -2.977 0.001 -1.642 1.336 -2.977 2.977 -2.977 1.641 0 2.977 1.335 2.977 2.977s-1.335 2.977 -2.977 2.977m9.908 6.698c0 -1.138 -0.36 -2.218 -1.04 -3.124l3.57 -2.682c1.266 1.686 1.936 3.693 1.936 5.806zm11.44 0h-4.465c0 -2.113 0.669 -4.12 1.936 -5.806l3.57 2.682c-0.681 0.906 -1.04 1.986 -1.04 3.124m9.908 -6.698h-0.001c-1.641 0 -2.976 -1.335 -2.976 -2.977 0.001 -1.642 1.336 -2.977 2.977 -2.977 1.641 0 2.977 1.335 2.977 2.977s-1.335 2.977 -2.977 2.977"/>
							<path d="M11.418 3.232c-2.325 -2.325 -6.094 -2.325 -8.419 0 -2.325 2.325 -2.325 6.095 0 8.419 1.386 1.385 3.284 1.945 5.084 1.679 0.806 -1.834 1.859 -3.563 3.139 -5.129 0.775 -0.948 1.625 -1.826 2.538 -2.628z"/>
							<path d="M61.001 3.232c-2.325 -2.325 -6.095 -2.325 -8.42 0L50.24 5.574a22.325 22.325 0 0 1 2.538 2.628c1.28 1.566 2.333 3.295 3.139 5.129 1.8 0.266 3.699 -0.294 5.084 -1.679 2.325 -2.325 2.325 -6.095 0 -8.419"/>
						</svg>
						<span className="ml-3 flex-1">JavaScript: La guía definitiva</span>
						{isOpen ? ""
						: <svg version="1.1" x="0px" y="0px" className={`w-6 h-6 transition duration-500 group-hover:fill-[#FFF8E8] dark:group-hover:fill-amber-900 ${direction === '/javascript-la-guia-definitiva' ? 'fill-[#fff8e8] dark:fill-amber-900' : 'fill-amber-900 dark:fill-[#fff8e8]'}`} viewBox="0 0 64 64"  width="64" height="64">
							<path d="M32 0c-2.977 0 -9.441 33.766 -9.441 38.698s4.509 8.93 9.441 8.93 9.441 -3.998 9.441 -8.93S34.977 0 32 0"/>
							<path d="M39.253 4.864c1.143 3.783 2.221 8.38 2.945 11.678 1.783 8.125 3.708 18.905 3.708 22.156 0 7.261 -6.368 13.395 -13.906 13.395s-13.906 -6.134 -13.906 -13.395c0 -3.25 1.925 -14.031 3.708 -22.156 0.724 -3.298 1.802 -7.895 2.945 -11.678 -8.056 1.729 -14.095 8.889 -14.095 17.462v23.814C10.652 56.004 18.648 64 28.513 64h6.975c9.864 0 17.86 -7.996 17.86 -17.86V22.326c0 -8.572 -6.04 -15.733 -14.095 -17.462M16.372 52.837h-0.001c-1.641 0 -2.976 -1.335 -2.976 -2.977 0.001 -1.642 1.336 -2.977 2.977 -2.977 1.641 0 2.977 1.335 2.977 2.977s-1.335 2.977 -2.977 2.977m9.908 6.698c0 -1.138 -0.36 -2.218 -1.04 -3.124l3.57 -2.682c1.266 1.686 1.936 3.693 1.936 5.806zm11.44 0h-4.465c0 -2.113 0.669 -4.12 1.936 -5.806l3.57 2.682c-0.681 0.906 -1.04 1.986 -1.04 3.124m9.908 -6.698h-0.001c-1.641 0 -2.976 -1.335 -2.976 -2.977 0.001 -1.642 1.336 -2.977 2.977 -2.977 1.641 0 2.977 1.335 2.977 2.977s-1.335 2.977 -2.977 2.977"/>
							<path d="M11.418 3.232c-2.325 -2.325 -6.094 -2.325 -8.419 0 -2.325 2.325 -2.325 6.095 0 8.419 1.386 1.385 3.284 1.945 5.084 1.679 0.806 -1.834 1.859 -3.563 3.139 -5.129 0.775 -0.948 1.625 -1.826 2.538 -2.628z"/>
							<path d="M61.001 3.232c-2.325 -2.325 -6.095 -2.325 -8.42 0L50.24 5.574a22.325 22.325 0 0 1 2.538 2.628c1.28 1.566 2.333 3.295 3.139 5.129 1.8 0.266 3.699 -0.294 5.084 -1.679 2.325 -2.325 2.325 -6.095 0 -8.419"/>
						</svg>
						}
					</a>
					
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-1" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-1' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
						<span className="ml-3 flex-1">1. Introducción a JavaScript</span>
						{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						: <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" >
						<path d="M21.75 0H1.75C1.28587 0 0.840752 0.184375 0.512563 0.512563C0.184375 0.840752 0 1.28587 0 1.75V21.75C0 22.2141 0.184375 22.6592 0.512563 22.9874C0.840752 23.3156 1.28587 23.5 1.75 23.5H21.75C22.2141 23.5 22.6592 23.3156 22.9874 22.9874C23.3156 22.6592 23.5 22.2141 23.5 21.75V1.75C23.5 1.28587 23.3156 0.840752 22.9874 0.512563C22.6592 0.184375 22.2141 0 21.75 0ZM22 21.75C22 21.8163 21.9737 21.8799 21.9268 21.9268C21.8799 21.9737 21.8163 22 21.75 22H1.75C1.6837 22 1.62011 21.9737 1.57322 21.9268C1.52634 21.8799 1.5 21.8163 1.5 21.75V1.75C1.5 1.6837 1.52634 1.62011 1.57322 1.57322C1.62011 1.52634 1.6837 1.5 1.75 1.5H21.75C21.8163 1.5 21.8799 1.52634 21.9268 1.57322C21.9737 1.62011 22 1.6837 22 1.75V21.75ZM13 5.75V17.75C13 17.9489 12.921 18.1397 12.7803 18.2803C12.6397 18.421 12.4489 18.5 12.25 18.5C12.0511 18.5 11.8603 18.421 11.7197 18.2803C11.579 18.1397 11.5 17.9489 11.5 17.75V7.15125L9.66625 8.375C9.50049 8.4854 9.29766 8.52542 9.10239 8.48627C8.90712 8.44713 8.7354 8.33201 8.625 8.16625C8.5146 8.00049 8.47458 7.79766 8.51373 7.60239C8.55287 7.40712 8.66799 7.2354 8.83375 7.125L11.8337 5.125C11.9468 5.04959 12.0782 5.00631 12.2139 4.99976C12.3496 4.99321 12.4845 5.02365 12.6043 5.08783C12.724 5.15201 12.8241 5.24751 12.8938 5.36414C12.9635 5.48076 13.0002 5.61413 13 5.75Z" />
						</svg> }
					</a>
					<ul id="dropdown-pages" className={`${isOpen && (direction === '/javascript-la-guia-definitiva/capitulo-1') ? "": "hidden"} py-2 space-y-2`}>
						<li className="list-none">
							<a href="/javascript-la-guia-definitiva/capitulo-1#1" className="flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">1.1 Explorar JavaScript</a>
						</li>
						<li className="list-none">
							<a href="/javascript-la-guia-definitiva/capitulo-1#2" className="flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">1.2 Hola Mundo</a>
						</li>
						<li className="list-none">
							<a href="/javascript-la-guia-definitiva/capitulo-1#3" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">1.3 Un recorrido por JavaScript</a>
						</li>
						<li className="list-none">
							<a href="/javascript-la-guia-definitiva/capitulo-1#4" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">1.4 Ejemplo: Histogramas de frecuencia de caracteres</a>
						</li>
						<li className="list-none">
							<a href="/javascript-la-guia-definitiva/capitulo-1#5" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">1.5 Resumen</a>
						</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-2" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-2' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
						<span className="ml-3 flex-1">2. Estructura léxica</span>
						{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						: <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.75 0H1.75C1.28587 0 0.840752 0.184375 0.512563 0.512563C0.184375 0.840752 0 1.28587 0 1.75V21.75C0 22.2141 0.184375 22.6592 0.512563 22.9874C0.840752 23.3156 1.28587 23.5 1.75 23.5H21.75C22.2141 23.5 22.6592 23.3156 22.9874 22.9874C23.3156 22.6592 23.5 22.2141 23.5 21.75V1.75C23.5 1.28587 23.3156 0.840752 22.9874 0.512563C22.6592 0.184375 22.2141 0 21.75 0ZM22 21.75C22 21.8163 21.9737 21.8799 21.9268 21.9268C21.8799 21.9737 21.8163 22 21.75 22H1.75C1.6837 22 1.62011 21.9737 1.57322 21.9268C1.52634 21.8799 1.5 21.8163 1.5 21.75V1.75C1.5 1.6837 1.52634 1.62011 1.57322 1.57322C1.62011 1.52634 1.6837 1.5 1.75 1.5H21.75C21.8163 1.5 21.8799 1.52634 21.9268 1.57322C21.9737 1.62011 22 1.6837 22 1.75V21.75ZM15.5 17.75C15.5 17.9489 15.421 18.1397 15.2803 18.2803C15.1397 18.421 14.9489 18.5 14.75 18.5H8.75C8.61072 18.5 8.47418 18.4612 8.3557 18.388C8.23722 18.3148 8.14147 18.21 8.07918 18.0854C8.01689 17.9608 7.99052 17.8214 8.00303 17.6826C8.01554 17.5439 8.06643 17.4114 8.15 17.3L13.5462 10.105C13.7398 9.84565 13.8751 9.54761 13.943 9.23121C14.0108 8.91481 14.0096 8.58749 13.9395 8.27158C13.8693 7.95568 13.7319 7.65863 13.5365 7.40069C13.341 7.14275 13.0923 6.93 12.8072 6.77694C12.5221 6.62389 12.2073 6.53413 11.8843 6.51381C11.5614 6.49348 11.2378 6.54305 10.9358 6.65914C10.6337 6.77524 10.3603 6.95512 10.1341 7.18652C9.90785 7.41792 9.73421 7.69539 9.625 8C9.59394 8.09507 9.54417 8.18297 9.47864 8.25852C9.4131 8.33407 9.33312 8.39575 9.24339 8.43993C9.15366 8.48411 9.056 8.50989 8.95616 8.51577C8.85632 8.52165 8.75631 8.5075 8.66202 8.47415C8.56772 8.4408 8.48105 8.38893 8.40711 8.32159C8.33316 8.25425 8.27343 8.1728 8.23143 8.08203C8.18943 7.99126 8.166 7.89301 8.16254 7.79305C8.15907 7.6931 8.17564 7.59346 8.21125 7.5C8.39404 6.99337 8.68381 6.53205 9.06087 6.14744C9.43792 5.76284 9.89339 5.46396 10.3963 5.27116C10.8992 5.07836 11.4377 4.99615 11.9753 5.03013C12.5128 5.06411 13.0367 5.21348 13.5113 5.46808C13.986 5.72267 14.4002 6.07652 14.7258 6.50555C15.0514 6.93458 15.2808 7.42871 15.3983 7.95433C15.5158 8.47995 15.5188 9.02472 15.4069 9.55157C15.295 10.0784 15.071 10.575 14.75 11.0075L10.25 17H14.75C14.9489 17 15.1397 17.079 15.2803 17.2197C15.421 17.3603 15.5 17.5511 15.5 17.75Z" /></svg>
						}
					</a>
					<ul id="dropdown-pages" className={`${isOpen && (direction === '/javascript-la-guia-definitiva/capitulo-2') ? "": "hidden"} py-2 space-y-2`}>
						<li className="list-none">
							<a href="#1" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">2.1 El texto de un programa JavaScript</a>
						</li>
						<li className="list-none">
							<a href="#2" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">2.2 Comentarios</a>
						</li>
						<li className="list-none">
							<a href="#3" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">2.3 Literales</a>
						</li>
						<li className="list-none">
							<a href="#4" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">2.4 Identificadores y palabras reservadas</a>
						</li>
						<li className="list-none">
							<a href="#4-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">2.4.1 Palabras reservadas</a>
						</li>
						<li className="list-none">
							<a href="#5" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">2.5 Unicode</a>
						</li>
						<li className="list-none">
							<a href="#5-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">2.5.1 Secuencias de Escape Unicode</a>
						</li>
						<li className="list-none">
							<a href="#5-2" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">2.5.2 Normalización Unicode</a>
						</li>
						<li className="list-none">
							<a href="#6" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">2.6 Punto y coma opcional</a>
						</li>
						<li className="list-none">
							<a href="#7" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">2.7 Resumen</a>
						</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-3" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-3' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
						<span className="ml-3 flex-1">3. Tipos, valores y variables</span>
						{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						:  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.75 0H1.75C1.28587 0 0.840752 0.184375 0.512563 0.512563C0.184375 0.840752 0 1.28587 0 1.75V21.75C0 22.2141 0.184375 22.6592 0.512563 22.9874C0.840752 23.3156 1.28587 23.5 1.75 23.5H21.75C22.2141 23.5 22.6592 23.3156 22.9874 22.9874C23.3156 22.6592 23.5 22.2141 23.5 21.75V1.75C23.5 1.28587 23.3156 0.840752 22.9874 0.512563C22.6592 0.184375 22.2141 0 21.75 0ZM22 21.75C22 21.8163 21.9737 21.8799 21.9268 21.9268C21.8799 21.9737 21.8163 22 21.75 22H1.75C1.6837 22 1.62011 21.9737 1.57322 21.9268C1.52634 21.8799 1.5 21.8163 1.5 21.75V1.75C1.5 1.6837 1.52634 1.62011 1.57322 1.57322C1.62011 1.52634 1.6837 1.5 1.75 1.5H21.75C21.8163 1.5 21.8799 1.52634 21.9268 1.57322C21.9737 1.62011 22 1.6837 22 1.75V21.75ZM15.5 14.25C15.5 15.0943 15.2485 15.9195 14.7776 16.6203C14.3067 17.3211 13.6377 17.8658 12.856 18.1848C12.0742 18.5039 11.2152 18.5828 10.3884 18.4117C9.56161 18.2405 8.80454 17.8269 8.21375 17.2237C8.14489 17.1533 8.09057 17.07 8.0539 16.9786C8.01723 16.8872 7.99892 16.7895 8.00002 16.691C8.00113 16.5925 8.02162 16.4952 8.06033 16.4046C8.09904 16.314 8.1552 16.232 8.22563 16.1631C8.29605 16.0943 8.37934 16.0399 8.47075 16.0033C8.56217 15.9666 8.65991 15.9483 8.7584 15.9494C8.85689 15.9505 8.95419 15.971 9.04476 16.0097C9.13533 16.0484 9.21739 16.1046 9.28625 16.175C9.60364 16.4988 9.99616 16.7391 10.4289 16.8745C10.8616 17.0099 11.3211 17.0362 11.7664 16.9511C12.2118 16.866 12.6292 16.6721 12.9814 16.3866C13.3337 16.1012 13.61 15.733 13.7855 15.315C13.9611 14.897 14.0306 14.442 13.9879 13.9906C13.9451 13.5392 13.7914 13.1054 13.5404 12.7278C13.2895 12.3502 12.949 12.0405 12.5494 11.8263C12.1498 11.6121 11.7034 11.5 11.25 11.5C11.1128 11.5001 10.9781 11.4625 10.8608 11.3914C10.7434 11.3203 10.6478 11.2183 10.5844 11.0966C10.521 10.9749 10.4922 10.8382 10.5011 10.7012C10.51 10.5643 10.5563 10.4324 10.635 10.32L13.31 6.5H8.75C8.55109 6.5 8.36032 6.42098 8.21967 6.28033C8.07902 6.13968 8 5.94891 8 5.75C8 5.55109 8.07902 5.36032 8.21967 5.21967C8.36032 5.07902 8.55109 5 8.75 5H14.75C14.8872 4.99991 15.0219 5.03747 15.1392 5.10859C15.2566 5.17971 15.3522 5.28167 15.4156 5.40336C15.479 5.52506 15.5078 5.66182 15.4989 5.79876C15.49 5.9357 15.4437 6.06757 15.365 6.18L12.5487 10.2025C13.4053 10.4786 14.1524 11.0191 14.6826 11.7463C15.2129 12.4735 15.499 13.35 15.5 14.25Z" />
						</svg>
					}
					</a>
					<ul id="dropdown-pages" className={`${isOpen && (direction === '/javascript-la-guia-definitiva/capitulo-3') ? "": "hidden"} py-2 space-y-2`}>
						<li className="list-none">
							<a href="#1" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">3.1 Visión general y definiciones</a>
						</li>
						<li className="list-none">
							<a href="#2" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">3.2 Números</a>
						</li>
						<li className="list-none">
							<a href="#2-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.2.1 Literales enteros</a>
						</li>
						<li className="list-none">
							<a href="#2-2" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.2.2 Literales en coma flotante</a>
						</li>
						<li className="list-none">
							<a href="#2-3" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.2.3 Aritmética en JavaScript</a>
						</li>
						<li className="list-none">
							<a href="#2-4" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.2.4 Errores de redondeo y de Punto flotante binaria</a>
						</li>
						<li className="list-none">
							<a href="#2-5" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.2.5 Enteros de precisión arbitraria con BigInt</a>
						</li>
						<li className="list-none">
							<a href="#2-6" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.2.6 Fechas y horarios</a>
						</li>
						<li className="list-none">
							<a href="#3" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">3.3 Texto</a>
						</li>
						<li className="list-none">
							<a href="#3-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.3.1 Literales de cadena</a>
						</li>
						<li className="list-none">
							<a href="#3-2" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.3.2 Secuencias de escape en literales de cadena</a>
						</li>
						<li className="list-none">
							<a href="#3-3" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.3.3 Trabajar con cuerdas</a>
						</li>
						<li className="list-none">
							<a href="#3-4" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.3.4 Literales de plantilla</a>
						</li>
						<li className="list-none">
							<a href="#3-5" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.3.5 Coincidencia de patrones</a>
						</li>
						<li className="list-none">
							<a href="#4" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">3.4 Valores booleanos</a>
						</li>
						<li className="list-none">
							<a href="#5" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">3.5 null e undefined</a>
						</li>
						<li className="list-none">
							<a href="#6" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">3.6 Symbols</a>
						</li>
						<li className="list-none">
							<a href="#7" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">3.7 El objeto global</a>
						</li>
						<li className="list-none">
							<a href="#8" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">3.8 Valores primitivos inmutables y referencias a objetos mutables</a>
						</li>
						<li className="list-none">
							<a href="#9" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">3.9 Conversiones de tipo</a>
						</li>
						<li className="list-none">
							<a href="#9-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.9.1 Conversiones e igualdad</a>
						</li>
						<li className="list-none">
							<a href="#9-2" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.9.2 Conversiones explícitas</a>
						</li>
						<li className="list-none">
							<a href="#9-3" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.9.3 Conversiones de objeto a primitivo</a>
						</li>
						<li className="list-none">
							<a href="#10" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">3.10 Declaración y asignación de variables</a>
						</li>
						<li className="list-none">
							<a href="#10-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.10.1 Declaraciones con let y const</a>
						</li>
						<li className="list-none">
							<a href="#10-2" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.10.2 Declaraciones de variables con var</a>
						</li>
						<li className="list-none">
							<a href="#10-3" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">3.10.3 Desestructuración Asignación</a>
						</li>
						<li className="list-none">
							<a href="#11" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">3.11 Resumen</a>
						</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-4" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-4' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
						<span className="ml-3 flex-1">4. Expresiones y operadores</span>
						{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.75 0H1.75C1.28587 0 0.840752 0.184375 0.512563 0.512563C0.184375 0.840752 0 1.28587 0 1.75V21.75C0 22.2141 0.184375 22.6592 0.512563 22.9874C0.840752 23.3156 1.28587 23.5 1.75 23.5H21.75C22.2141 23.5 22.6592 23.3156 22.9874 22.9874C23.3156 22.6592 23.5 22.2141 23.5 21.75V1.75C23.5 1.28587 23.3156 0.840752 22.9874 0.512563C22.6592 0.184375 22.2141 0 21.75 0ZM22 21.75C22 21.8163 21.9737 21.8799 21.9268 21.9268C21.8799 21.9737 21.8163 22 21.75 22H1.75C1.6837 22 1.62011 21.9737 1.57322 21.9268C1.52634 21.8799 1.5 21.8163 1.5 21.75V1.75C1.5 1.6837 1.52634 1.62011 1.57322 1.57322C1.62011 1.52634 1.6837 1.5 1.75 1.5H21.75C21.8163 1.5 21.8799 1.52634 21.9268 1.57322C21.9737 1.62011 22 1.6837 22 1.75V21.75ZM15.75 14H14.5V5.75C14.5 5.59363 14.4512 5.44116 14.3603 5.31391C14.2694 5.18667 14.141 5.09101 13.9931 5.04032C13.8452 4.98964 13.6851 4.98646 13.5353 5.03122C13.3855 5.07599 13.2534 5.16647 13.1575 5.29L6.1575 14.29C6.07141 14.4009 6.01816 14.5337 6.0038 14.6733C5.98944 14.8129 6.01456 14.9538 6.07629 15.0798C6.13802 15.2059 6.23388 15.3121 6.35298 15.3864C6.47208 15.4607 6.60964 15.5 6.75 15.5H13V17.75C13 17.9489 13.079 18.1397 13.2197 18.2803C13.3603 18.421 13.5511 18.5 13.75 18.5C13.9489 18.5 14.1397 18.421 14.2803 18.2803C14.421 18.1397 14.5 17.9489 14.5 17.75V15.5H15.75C15.9489 15.5 16.1397 15.421 16.2803 15.2803C16.421 15.1397 16.5 14.9489 16.5 14.75C16.5 14.5511 16.421 14.3603 16.2803 14.2197C16.1397 14.079 15.9489 14 15.75 14ZM13 14H8.28375L13 7.93625V14Z" />
						</svg>
						}
					</a>
					<ul id="dropdown-pages" className={`${isOpen && (direction === '/javascript-la-guia-definitiva/capitulo-4') ? "": "hidden"} py-2 space-y-2`}>
						<li className="list-none">
							<a href="#1" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.1 Expresiones primarias</a>
						</li>
						<li className="list-none">
							<a href="#2" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.2 Inicializadores de objetos y arrays</a>
						</li>
						<li className="list-none">
							<a href="#3" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.3 Definir expresiones de funciones</a>
						</li>
						<li className="list-none">
							<a href="#4" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.4 Expresiones de acceso a la propiedad</a>
						</li>
						<li className="list-none">
							<a href="#4-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.4.1 Acceso condicional a la propiedad</a>
						</li>
						<li className="list-none">
							<a href="#5" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.5 Expresiones de invocación</a>
						</li>
						<li className="list-none">
							<a href="#5-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.5.1 Invocación condicional</a>
						</li>
						<li className="list-none">
							<a href="#6" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.6 Expresiones de creación de objetos</a>
						</li>
						<li className="list-none">
							<a href="#7" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.7 Visión general del operador</a>
						</li>
						<li className="list-none">
							<a href="#7-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.7.1 Número de operandos</a>
						</li>
						<li className="list-none">
							<a href="#7-2" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.7.2 Tipo de operando y resultado</a>
						</li>
						<li className="list-none">
							<a href="#7-3" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.7.3 Efectos secundarios del operador</a>
						</li>
						<li className="list-none">
							<a href="#7-4" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.7.4 Precedencia del operador</a>
						</li>
						<li className="list-none">
							<a href="#7-5" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.7.5 Asociatividad de operadores</a>
						</li>
						<li className="list-none">
							<a href="#7-6" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.7.6 Orden de evaluación</a>
						</li>
						<li className="list-none">
							<a href="#8" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.8 Expresiones aritméticas</a>
						</li>
						<li className="list-none">
							<a href="#8-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.8.1 Operador de +</a>
						</li>
						<li className="list-none">
							<a href="#8-2" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.8.2 Operadores aritméticos unarios</a>
						</li>
						<li className="list-none">
							<a href="#8-3" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.8.3 Operadores bit a bit</a>
						</li>
						<li className="list-none">
							<a href="#9" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.9 Expresiones relacionales</a>
						</li>
						<li className="list-none">
							<a href="#9-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.9.1 Operadores de igualdad y desigualdad</a>
						</li>
						<li className="list-none">
							<a href="#9-2" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">9.2 Operadores de comparación</a>
						</li>
						<li className="list-none">
							<a href="#9-3" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.9.3 El operador in</a>
						</li>
						<li className="list-none">
							<a href="#9-4" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.9.4 El operador instanceof</a>
						</li>
						<li className="list-none">
							<a href="#10" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.10 Expresiones lógicas</a>
						</li>
						<li className="list-none">
							<a href="#10-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.10.1 Expresión lógica AND (&&)</a>
						</li>
						<li className="list-none">
							<a href="#10-2" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.10.2 Expresión lógica OR (||)</a>
						</li>
						<li className="list-none">
							<a href="#10-3" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.10.3 Expresión lógica NOT (!)</a>
						</li>
						<li className="list-none">
							<a href="#11" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.11 Expresiones de asignación</a>
						</li>
						<li className="list-none">
							<a href="#11-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.11.1 Asignación con operación</a>
						</li>
						<li className="list-none">
							<a href="#12" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.12 Expresiones de evaluación</a>
						</li>
						<li className="list-none">
							<a href="#12-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.12.1 eval()</a>
						</li>
						<li className="list-none">
							<a href="#12-2" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.12.2 Global eval()</a>
						</li>
						<li className="list-none">
							<a href="#12-3" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.12.3 eval() estricto</a>
						</li>
						<li className="list-none">
							<a href="#13" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.13 Operadores varios</a>
						</li>
						<li className="list-none">
							<a href="#13-1" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.13.1 El operador condicional (?:)</a>
						</li>
						<li className="list-none">
							<a href="#13-2" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.13.2 El primero definido (??)</a>
						</li>
						<li className="list-none">
							<a href="#13-3" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.13.3 El operador typeof</a>
						</li>
						<li className="list-none">
							<a href="#13-4" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.13.4 El operador delete</a>
						</li>
						<li className="list-none">
							<a href="#13-5" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.13.5 El operador await</a>
						</li>
						<li className="list-none">
							<a href="#13-6" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.13.6 El operador void</a>
						</li>
						<li className="list-none">
							<a href="#13-7" className="group flex items-center p-2 pl-16 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#fadf9f] hover:bg-amber-900">4.13.7 El operador coma (,)</a>
						</li>
						<li className="list-none">
							<a href="#14" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">4.14 Resumen</a>
						</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-5" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-5' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
						<span className="ml-3 flex-1">5. Declaraciones</span>
						{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.75 0H1.75C1.28587 0 0.840752 0.184375 0.512563 0.512563C0.184375 0.840752 0 1.28587 0 1.75V21.75C0 22.2141 0.184375 22.6592 0.512563 22.9874C0.840752 23.3156 1.28587 23.5 1.75 23.5H21.75C22.2141 23.5 22.6592 23.3156 22.9874 22.9874C23.3156 22.6592 23.5 22.2141 23.5 21.75V1.75C23.5 1.28587 23.3156 0.840752 22.9874 0.512563C22.6592 0.184375 22.2141 0 21.75 0ZM22 21.75C22 21.8163 21.9737 21.8799 21.9268 21.9268C21.8799 21.9737 21.8163 22 21.75 22H1.75C1.6837 22 1.62011 21.9737 1.57322 21.9268C1.52634 21.8799 1.5 21.8163 1.5 21.75V1.75C1.5 1.6837 1.52634 1.62011 1.57322 1.57322C1.62011 1.52634 1.6837 1.5 1.75 1.5H21.75C21.8163 1.5 21.8799 1.52634 21.9268 1.57322C21.9737 1.62011 22 1.6837 22 1.75V21.75ZM10.385 6.5L9.76 10.25C10.239 10.0833 10.7428 9.99877 11.25 10C12.3772 10 13.4582 10.4478 14.2552 11.2448C15.0522 12.0418 15.5 13.1228 15.5 14.25C15.5 15.3772 15.0522 16.4582 14.2552 17.2552C13.4582 18.0522 12.3772 18.5 11.25 18.5C10.6877 18.5095 10.1292 18.406 9.60759 18.1955C9.08603 17.9851 8.61204 17.6721 8.21375 17.275C8.07451 17.1328 7.99747 16.9411 7.99958 16.742C8.00169 16.543 8.08278 16.353 8.225 16.2138C8.36722 16.0745 8.55893 15.9975 8.75795 15.9996C8.95698 16.0017 9.14701 16.0828 9.28625 16.225C9.54495 16.4792 9.85209 16.6788 10.1894 16.8119C10.5268 16.945 10.8874 17.009 11.25 17C11.9793 17 12.6788 16.7103 13.1945 16.1945C13.7103 15.6788 14 14.9793 14 14.25C14 13.5207 13.7103 12.8212 13.1945 12.3055C12.6788 11.7897 11.9793 11.5 11.25 11.5C10.8874 11.491 10.5268 11.555 10.1894 11.6881C9.85209 11.8212 9.54495 12.0208 9.28625 12.275C9.17456 12.3895 9.02918 12.4654 8.87133 12.4914C8.71349 12.5174 8.55145 12.4923 8.4089 12.4197C8.26634 12.3471 8.15074 12.2308 8.07897 12.0879C8.0072 11.9449 7.98304 11.7827 8.01 11.625L9.01 5.625C9.03955 5.45016 9.1301 5.29144 9.26557 5.17702C9.40105 5.0626 9.57268 4.99988 9.75 5H14.75C14.9489 5 15.1397 5.07902 15.2803 5.21967C15.421 5.36032 15.5 5.55109 15.5 5.75C15.5 5.94891 15.421 6.13968 15.2803 6.28033C15.1397 6.42098 14.9489 6.5 14.75 6.5H10.385Z" />
						</svg>
						}
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
							<li>
									<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
							</li>
							<li>
									<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
							</li>
							<li>
									<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
							</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-6" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-6' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
						<span className="ml-3 flex-1">6. Objetos</span>
						{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.75 0H1.75C1.28587 0 0.840752 0.184375 0.512563 0.512563C0.184375 0.840752 0 1.28587 0 1.75V21.75C0 22.2141 0.184375 22.6592 0.512563 22.9874C0.840752 23.3156 1.28587 23.5 1.75 23.5H21.75C22.2141 23.5 22.6592 23.3156 22.9874 22.9874C23.3156 22.6592 23.5 22.2141 23.5 21.75V1.75C23.5 1.28587 23.3156 0.840752 22.9874 0.512563C22.6592 0.184375 22.2141 0 21.75 0ZM22 21.75C22 21.8163 21.9737 21.8799 21.9268 21.9268C21.8799 21.9737 21.8163 22 21.75 22H1.75C1.6837 22 1.62011 21.9737 1.57322 21.9268C1.52634 21.8799 1.5 21.8163 1.5 21.75V1.75C1.5 1.6837 1.52634 1.62011 1.57322 1.57322C1.62011 1.52634 1.6837 1.5 1.75 1.5H21.75C21.8163 1.5 21.8799 1.52634 21.9268 1.57322C21.9737 1.62011 22 1.6837 22 1.75V21.75ZM11.75 10C11.5155 10.0005 11.2813 10.0202 11.05 10.0588L13.3937 6.135C13.4443 6.05046 13.4777 5.95679 13.4921 5.85934C13.5064 5.76189 13.5015 5.66256 13.4774 5.56704C13.4534 5.47151 13.4108 5.38165 13.352 5.30259C13.2933 5.22352 13.2195 5.15681 13.135 5.10625C13.0505 5.05569 12.9568 5.02228 12.8593 5.00792C12.7619 4.99356 12.6626 4.99854 12.567 5.02256C12.4715 5.04659 12.3816 5.0892 12.3026 5.14795C12.2235 5.20671 12.1568 5.28046 12.1063 5.365L8.07625 12.115C7.60599 12.9244 7.41613 13.8665 7.53613 14.7948C7.65614 15.7232 8.07931 16.586 8.73993 17.2493C9.40055 17.9125 10.2617 18.3391 11.1896 18.4627C12.1175 18.5864 13.0603 18.4003 13.8715 17.9332C14.6828 17.4662 15.3172 16.7443 15.6761 15.8798C16.0351 15.0152 16.0986 14.0564 15.8568 13.152C15.615 12.2477 15.0813 11.4485 14.3387 10.8786C13.5961 10.3086 12.6861 9.99977 11.75 10ZM11.75 17C11.2061 17 10.6744 16.8387 10.2222 16.5365C9.76995 16.2344 9.41747 15.8049 9.20933 15.3024C9.00119 14.7999 8.94673 14.2469 9.05284 13.7135C9.15895 13.1801 9.42086 12.6901 9.80546 12.3055C10.1901 11.9209 10.6801 11.6589 11.2135 11.5528C11.7469 11.4467 12.2999 11.5012 12.8024 11.7093C13.3049 11.9175 13.7344 12.2699 14.0365 12.7222C14.3387 13.1744 14.5 13.7061 14.5 14.25C14.5 14.9793 14.2103 15.6788 13.6945 16.1945C13.1788 16.7103 12.4793 17 11.75 17Z"/>
						</svg>
						}
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
							<li>
									<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
							</li>
							<li>
									<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
							</li>
							<li>
									<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
							</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-7" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-7' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
						<span className="ml-3 flex-1">7. Arrays</span>
						{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						: <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
						<path d="M21.75 0H1.75C1.28587 0 0.840752 0.184375 0.512563 0.512563C0.184375 0.840752 0 1.28587 0 1.75V21.75C0 22.2141 0.184375 22.6592 0.512563 22.9874C0.840752 23.3156 1.28587 23.5 1.75 23.5H21.75C22.2141 23.5 22.6592 23.3156 22.9874 22.9874C23.3156 22.6592 23.5 22.2141 23.5 21.75V1.75C23.5 1.28587 23.3156 0.840752 22.9874 0.512563C22.6592 0.184375 22.2141 0 21.75 0ZM22 21.75C22 21.8163 21.9737 21.8799 21.9268 21.9268C21.8799 21.9737 21.8163 22 21.75 22H1.75C1.6837 22 1.62011 21.9737 1.57322 21.9268C1.52634 21.8799 1.5 21.8163 1.5 21.75V1.75C1.5 1.6837 1.52634 1.62011 1.57322 1.57322C1.62011 1.52634 1.6837 1.5 1.75 1.5H21.75C21.8163 1.5 21.8799 1.52634 21.9268 1.57322C21.9737 1.62011 22 1.6837 22 1.75V21.75ZM15.3638 6.32C15.433 6.41864 15.4774 6.53251 15.4933 6.65197C15.5092 6.77142 15.496 6.89295 15.455 7.00625L11.455 18.0063C11.4024 18.151 11.3065 18.276 11.1804 18.3643C11.0542 18.4527 10.904 18.5 10.75 18.5C10.6648 18.4989 10.5803 18.4836 10.5 18.455C10.4074 18.4214 10.3224 18.3698 10.2497 18.3033C10.177 18.2368 10.1182 18.1566 10.0765 18.0673C10.0348 17.9781 10.0111 17.8815 10.0068 17.7831C10.0025 17.6846 10.0176 17.5863 10.0513 17.4937L13.6787 7.5H8.75C8.55109 7.5 8.36032 7.42098 8.21967 7.28033C8.07902 7.13968 8 6.94891 8 6.75C8 6.55109 8.07902 6.36032 8.21967 6.21967C8.36032 6.07902 8.55109 6 8.75 6H14.75C14.8705 6.00012 14.9892 6.02926 15.096 6.08496C15.2028 6.14067 15.2947 6.22129 15.3638 6.32Z" />
						</svg>
						}
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
							<li>
									<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
							</li>
							<li>
									<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
							</li>
							<li>
									<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
							</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-8" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-8' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
						<span className="ml-3 flex-1">8. Funciones</span>
						{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						: <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" >
						<path d="M21.75 0H1.75C1.28587 0 0.840752 0.184375 0.512563 0.512563C0.184375 0.840752 0 1.28587 0 1.75V21.75C0 22.2141 0.184375 22.6592 0.512563 22.9874C0.840752 23.3156 1.28587 23.5 1.75 23.5H21.75C22.2141 23.5 22.6592 23.3156 22.9874 22.9874C23.3156 22.6592 23.5 22.2141 23.5 21.75V1.75C23.5 1.28587 23.3156 0.840752 22.9874 0.512563C22.6592 0.184375 22.2141 0 21.75 0ZM22 21.75C22 21.8163 21.9737 21.8799 21.9268 21.9268C21.8799 21.9737 21.8163 22 21.75 22H1.75C1.6837 22 1.62011 21.9737 1.57322 21.9268C1.52634 21.8799 1.5 21.8163 1.5 21.75V1.75C1.5 1.6837 1.52634 1.62011 1.57322 1.57322C1.62011 1.52634 1.6837 1.5 1.75 1.5H21.75C21.8163 1.5 21.8799 1.52634 21.9268 1.57322C21.9737 1.62011 22 1.6837 22 1.75V21.75ZM14.0713 11.1925C14.6834 10.7101 15.13 10.0489 15.3489 9.30089C15.5679 8.5529 15.5484 7.75527 15.2931 7.01888C15.0378 6.2825 14.5594 5.64396 13.9244 5.19204C13.2894 4.74012 12.5294 4.49728 11.75 4.49728C10.9706 4.49728 10.2106 4.74012 9.5756 5.19204C8.94061 5.64396 8.46221 6.2825 8.2069 7.01888C7.9516 7.75527 7.93208 8.5529 8.15105 9.30089C8.37003 10.0489 8.81663 10.7101 9.42875 11.1925C8.66156 11.6927 8.07648 12.4274 7.76067 13.2871C7.44485 14.1468 7.4152 15.0855 7.67612 15.9634C7.93705 16.8413 8.47459 17.6114 9.20868 18.1591C9.94277 18.7067 10.8341 19.0026 11.75 19.0026C12.6659 19.0026 13.5572 18.7067 14.2913 18.1591C15.0254 17.6114 15.563 16.8413 15.8239 15.9634C16.0848 15.0855 16.0551 14.1468 15.7393 13.2871C15.4235 12.4274 14.8384 11.6927 14.0713 11.1925ZM9.5 8.25C9.5 7.80499 9.63196 7.36998 9.87919 6.99997C10.1264 6.62996 10.4778 6.34157 10.889 6.17127C11.3001 6.00097 11.7525 5.95642 12.189 6.04323C12.6254 6.13005 13.0263 6.34434 13.341 6.65901C13.6557 6.97368 13.8699 7.37459 13.9568 7.81105C14.0436 8.2475 13.999 8.6999 13.8287 9.11104C13.6584 9.52217 13.37 9.87357 13 10.1208C12.63 10.368 12.195 10.5 11.75 10.5C11.1533 10.5 10.581 10.2629 10.159 9.84099C9.73705 9.41903 9.5 8.84674 9.5 8.25ZM11.75 17.5C11.2061 17.5 10.6744 17.3387 10.2222 17.0365C9.76995 16.7344 9.41747 16.3049 9.20933 15.8024C9.00119 15.2999 8.94673 14.7469 9.05284 14.2135C9.15895 13.6801 9.42086 13.1901 9.80546 12.8055C10.1901 12.4209 10.6801 12.159 11.2135 12.0528C11.7469 11.9467 12.2999 12.0012 12.8024 12.2093C13.3049 12.4175 13.7344 12.7699 14.0365 13.2222C14.3387 13.6744 14.5 14.2061 14.5 14.75C14.5 15.4793 14.2103 16.1788 13.6945 16.6945C13.1788 17.2103 12.4793 17.5 11.75 17.5Z" />
						</svg>
						}

					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
							<li>
									<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
							</li>
							<li>
									<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
							</li>
							<li>
									<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
							</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-9" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-9' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
						<span className="ml-3 flex-1">9. Clases</span>
						{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						: <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
						<path d="M21.75 0H1.75C1.28587 0 0.840752 0.184375 0.512563 0.512563C0.184375 0.840752 0 1.28587 0 1.75V21.75C0 22.2141 0.184375 22.6592 0.512563 22.9874C0.840752 23.3156 1.28587 23.5 1.75 23.5H21.75C22.2141 23.5 22.6592 23.3156 22.9874 22.9874C23.3156 22.6592 23.5 22.2141 23.5 21.75V1.75C23.5 1.28587 23.3156 0.840752 22.9874 0.512563C22.6592 0.184375 22.2141 0 21.75 0ZM22 21.75C22 21.8163 21.9737 21.8799 21.9268 21.9268C21.8799 21.9737 21.8163 22 21.75 22H1.75C1.6837 22 1.62011 21.9737 1.57322 21.9268C1.52634 21.8799 1.5 21.8163 1.5 21.75V1.75C1.5 1.6837 1.52634 1.62011 1.57322 1.57322C1.62011 1.52634 1.6837 1.5 1.75 1.5H21.75C21.8163 1.5 21.8799 1.52634 21.9268 1.57322C21.9737 1.62011 22 1.6837 22 1.75V21.75ZM13.875 5.56875C13.3107 5.24318 12.6791 5.0517 12.029 5.0091C11.3789 4.96651 10.7278 5.07393 10.1258 5.32307C9.52386 5.57221 8.98723 5.95641 8.55741 6.44597C8.12758 6.93553 7.81605 7.51736 7.64689 8.14649C7.47774 8.77562 7.45548 9.43523 7.58184 10.0743C7.7082 10.7134 7.97979 11.3149 8.37564 11.8324C8.77149 12.3498 9.28099 12.7693 9.86478 13.0584C10.4486 13.3476 11.091 13.4987 11.7425 13.5C11.9801 13.4997 12.2172 13.4792 12.4513 13.4387L10.1062 17.3662C10.0041 17.537 9.97404 17.7413 10.0226 17.9342C10.0711 18.1271 10.1943 18.2929 10.365 18.395C10.5357 18.4971 10.74 18.5272 10.933 18.4787C11.1259 18.4302 11.2916 18.307 11.3938 18.1362L15.4312 11.375C15.7104 10.8916 15.8915 10.3579 15.9644 9.80449C16.0373 9.25105 16.0004 8.68869 15.8559 8.14951C15.7113 7.61033 15.462 7.1049 15.1221 6.66209C14.7823 6.21927 14.3585 5.84776 13.875 5.56875ZM14.1325 10.625C13.8614 11.097 13.4564 11.4779 12.9687 11.7195C12.481 11.9611 11.9326 12.0526 11.3929 11.9823C10.8532 11.9121 10.3464 11.6832 9.93685 11.3248C9.52727 10.9664 9.23326 10.4945 9.09204 9.96886C8.95082 9.44324 8.96875 8.88753 9.14356 8.3721C9.31836 7.85667 9.64218 7.4047 10.074 7.07342C10.5058 6.74214 11.0263 6.54645 11.5694 6.51113C12.1125 6.47581 12.6539 6.60244 13.125 6.875C13.7548 7.2397 14.2143 7.83918 14.403 8.54209C14.5916 9.24499 14.4939 9.994 14.1313 10.625H14.1325Z" />
						</svg>
						}
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
						<li>
							<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
						</li>
						<li>
							<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
						</li>
						<li>
							<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
						</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-10" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-10' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
						<span className="ml-3 flex-1">10. Módulos</span>
						{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						: <svg  width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.50093 6.25001V18.25C8.50093 18.4489 8.42191 18.6397 8.28126 18.7803C8.14061 18.921 7.94984 19 7.75093 19C7.55202 19 7.36125 18.921 7.2206 18.7803C7.07995 18.6397 7.00093 18.4489 7.00093 18.25V7.65126L5.16718 8.87501C5.00142 8.98541 4.79859 9.02544 4.60332 8.98629C4.40805 8.94714 4.23632 8.83202 4.12593 8.66626C4.01553 8.5005 3.97551 8.29768 4.01465 8.10241C4.0538 7.90713 4.16892 7.73541 4.33468 7.62501L7.33468 5.62501C7.4477 5.54961 7.57908 5.50632 7.71479 5.49977C7.8505 5.49323 7.98544 5.52367 8.10519 5.58784C8.22495 5.65202 8.32502 5.74752 8.39472 5.86415C8.46442 5.98078 8.50113 6.11415 8.50093 6.25001Z" />
						<path d="M14.75 5.48744C13.06 5.48744 11.6637 6.25244 10.7137 7.70119C9.93125 8.89244 9.5 10.5037 9.5 12.2374C9.5 13.9712 9.93125 15.5824 10.7125 16.7737C11.6637 18.2224 13.0588 18.9874 14.75 18.9874C16.4412 18.9874 17.8362 18.2224 18.7862 16.7737C19.5687 15.5824 20 13.9712 20 12.2374C20 10.5037 19.5688 8.89244 18.7875 7.70119C17.8363 6.25244 16.44 5.48744 14.75 5.48744ZM14.75 17.4874C12.16 17.4874 11 14.8512 11 12.2374C11 9.62369 12.16 6.98744 14.75 6.98744C17.34 6.98744 18.5 9.62369 18.5 12.2374C18.5 14.8512 17.34 17.4874 14.75 17.4874ZM21.75 0.487436H1.75C1.28587 0.487436 0.840752 0.671811 0.512563 1C0.184375 1.32819 0 1.77331 0 2.23744V22.2374C0 22.7016 0.184375 23.1467 0.512563 23.4749C0.840752 23.8031 1.28587 23.9874 1.75 23.9874H21.75C22.2141 23.9874 22.6592 23.8031 22.9874 23.4749C23.3156 23.1467 23.5 22.7016 23.5 22.2374V2.23744C23.5 1.77331 23.3156 1.32819 22.9874 1C22.6592 0.671811 22.2141 0.487436 21.75 0.487436ZM22 22.2374C22 22.3037 21.9737 22.3673 21.9268 22.4142C21.8799 22.4611 21.8163 22.4874 21.75 22.4874H1.75C1.6837 22.4874 1.62011 22.4611 1.57322 22.4142C1.52634 22.3673 1.5 22.3037 1.5 22.2374V2.23744C1.5 2.17113 1.52634 2.10754 1.57322 2.06066C1.62011 2.01378 1.6837 1.98744 1.75 1.98744H21.75C21.8163 1.98744 21.8799 2.01378 21.9268 2.06066C21.9737 2.10754 22 2.17113 22 2.23744V22.2374Z" />
						</svg>
						}
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
						<li>
							<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
						</li>
						<li>
							<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
						</li>
						<li>
							<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
						</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-11" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-11' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
						<span className="ml-3 flex-1">11. La biblioteca estándar de JavaScript</span>
						{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						: <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
						<path d="M8.50093 5.76259V17.7626C8.50093 17.9615 8.42191 18.1523 8.28126 18.2929C8.14061 18.4336 7.94984 18.5126 7.75093 18.5126C7.55202 18.5126 7.36125 18.4336 7.2206 18.2929C7.07995 18.1523 7.00093 17.9615 7.00093 17.7626V7.16384L5.16718 8.38759C5.00142 8.49798 4.79859 8.53801 4.60332 8.49886C4.40805 8.45971 4.23632 8.3446 4.12593 8.17884C4.01553 8.01308 3.97551 7.81025 4.01465 7.61498C4.0538 7.41971 4.16892 7.24798 4.33468 7.13759L7.33468 5.13759C7.4477 5.06218 7.57908 5.01889 7.71479 5.01235C7.8505 5.0058 7.98544 5.03624 8.10519 5.10042C8.22495 5.16459 8.32502 5.2601 8.39472 5.37672C8.46442 5.49335 8.50113 5.62672 8.50093 5.76259Z" />
						<path d="M17.5009 5.76259V17.7626C17.5009 17.9615 17.4219 18.1523 17.2813 18.2929C17.1406 18.4336 16.9498 18.5126 16.7509 18.5126C16.552 18.5126 16.3613 18.4336 16.2206 18.2929C16.0799 18.1523 16.0009 17.9615 16.0009 17.7626V7.16384L14.1672 8.38759C14.0014 8.49798 13.7986 8.53801 13.6033 8.49886C13.408 8.45971 13.2363 8.3446 13.1259 8.17884C13.0155 8.01308 12.9755 7.81025 13.0147 7.61498C13.0538 7.41971 13.1689 7.24798 13.3347 7.13759L16.3347 5.13759C16.4477 5.06218 16.5791 5.01889 16.7148 5.01235C16.8505 5.0058 16.9854 5.03624 17.1052 5.10042C17.2249 5.16459 17.325 5.2601 17.3947 5.37672C17.4644 5.49335 17.5011 5.62672 17.5009 5.76259Z" />
						<path d="M21.75 9.53674e-06H1.75C1.28587 9.53674e-06 0.840752 0.184384 0.512563 0.512573C0.184375 0.840761 0 1.28588 0 1.75001V21.75C0 22.2141 0.184375 22.6593 0.512563 22.9874C0.840752 23.3156 1.28587 23.5 1.75 23.5H21.75C22.2141 23.5 22.6592 23.3156 22.9874 22.9874C23.3156 22.6593 23.5 22.2141 23.5 21.75V1.75001C23.5 1.28588 23.3156 0.840761 22.9874 0.512573C22.6592 0.184384 22.2141 9.53674e-06 21.75 9.53674e-06ZM22 21.75C22 21.8163 21.9737 21.8799 21.9268 21.9268C21.8799 21.9737 21.8163 22 21.75 22H1.75C1.6837 22 1.62011 21.9737 1.57322 21.9268C1.52634 21.8799 1.5 21.8163 1.5 21.75V1.75001C1.5 1.68371 1.52634 1.62012 1.57322 1.57323C1.62011 1.52635 1.6837 1.50001 1.75 1.50001H21.75C21.8163 1.50001 21.8799 1.52635 21.9268 1.57323C21.9737 1.62012 22 1.68371 22 1.75001V21.75Z" />
						</svg>
						}
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
						<li>
							<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
						</li>
						<li>
							<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
						</li>
						<li>
							<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
						</li>
					</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-12" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-12' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
							<span className="ml-3 flex-1">12. Iteradores y generadores</span>
							{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							: <svg width="24" height="25" fill="currentColor" viewBox="0 0 24 25" >
							<path d="M8.50093 6.27516V18.2752C8.50093 18.4741 8.42191 18.6648 8.28126 18.8055C8.14061 18.9461 7.94984 19.0252 7.75093 19.0252C7.55202 19.0252 7.36125 18.9461 7.2206 18.8055C7.07995 18.6648 7.00093 18.4741 7.00093 18.2752V7.67641L5.16718 8.90016C5.00142 9.01056 4.79859 9.05058 4.60332 9.01144C4.40805 8.97229 4.23632 8.85717 4.12593 8.69141C4.01553 8.52565 3.97551 8.32282 4.01465 8.12755C4.0538 7.93228 4.16892 7.76056 4.33468 7.65016L7.33468 5.65016C7.4477 5.57475 7.57908 5.53147 7.71479 5.52492C7.8505 5.51837 7.98544 5.54881 8.10519 5.61299C8.22495 5.67717 8.32502 5.77267 8.39472 5.8893C8.46442 6.00592 8.50113 6.13929 8.50093 6.27516Z" />
							<path d="M21.75 0.512583H1.75C1.28587 0.512583 0.840752 0.696957 0.512563 1.02515C0.184375 1.35333 0 1.79845 0 2.26258V22.2626C0 22.7267 0.184375 23.1718 0.512563 23.5C0.840752 23.8282 1.28587 24.0126 1.75 24.0126H21.75C22.2141 24.0126 22.6592 23.8282 22.9874 23.5C23.3156 23.1718 23.5 22.7267 23.5 22.2626V2.26258C23.5 1.79845 23.3156 1.35333 22.9874 1.02515C22.6592 0.696957 22.2141 0.512583 21.75 0.512583ZM22 22.2626C22 22.3289 21.9737 22.3925 21.9268 22.4394C21.8799 22.4862 21.8163 22.5126 21.75 22.5126H1.75C1.6837 22.5126 1.62011 22.4862 1.57322 22.4394C1.52634 22.3925 1.5 22.3289 1.5 22.2626V2.26258C1.5 2.19628 1.52634 2.13269 1.57322 2.08581C1.62011 2.03892 1.6837 2.01258 1.75 2.01258H21.75C21.8163 2.01258 21.8799 2.03892 21.9268 2.08581C21.9737 2.13269 22 2.19628 22 2.26258V22.2626Z" />
							<path d="M19.2803 18.7577C19.421 18.617 19.5 18.4263 19.5 18.2273C19.5 18.0284 19.421 17.8377 19.2803 17.697C19.1397 17.5564 18.9489 17.4773 18.75 17.4773H14.25L18.75 11.4848C19.071 11.0523 19.295 10.5558 19.4069 10.0289C19.5188 9.50206 19.5158 8.95729 19.3983 8.43167C19.2808 7.90605 19.0514 7.41192 18.7258 6.98289C18.4002 6.55387 17.986 6.20002 17.5113 5.94542C17.0367 5.69082 16.5128 5.54145 15.9753 5.50747C15.4377 5.47349 14.8992 5.5557 14.3963 5.7485C13.8934 5.94131 13.4379 6.24018 13.0609 6.62479C12.6838 7.00939 12.394 7.47071 12.2113 7.97734C12.1756 8.0708 12.1591 8.17044 12.1625 8.2704C12.166 8.37035 12.1894 8.4686 12.2314 8.55937C12.2734 8.65014 12.3332 8.73159 12.4071 8.79893C12.4811 8.86627 12.5677 8.91814 12.662 8.95149C12.7563 8.98484 12.8563 8.99899 12.9562 8.99311C13.056 8.98724 13.1537 8.96145 13.2434 8.91727C13.3331 8.87309 13.4131 8.81141 13.4786 8.73586C13.5442 8.66031 13.5939 8.57241 13.625 8.47734C13.7342 8.17273 13.9078 7.89526 14.1341 7.66386C14.3603 7.43246 14.6337 7.25258 14.9358 7.13649C15.2378 7.02039 15.5614 6.97082 15.8843 6.99115C16.2073 7.01148 16.5221 7.10123 16.8072 7.25429C17.0923 7.40734 17.341 7.62009 17.5365 7.87803C17.7319 8.13597 17.8693 8.43303 17.9395 8.74893C18.0096 9.06483 18.0108 9.39215 17.943 9.70855C17.8751 10.025 17.7398 10.323 17.5462 10.5823L12.15 17.7773C12.0664 17.8888 12.0155 18.0213 12.003 18.16C11.9905 18.2987 12.0169 18.4382 12.0792 18.5628C12.1415 18.6873 12.2372 18.7921 12.3557 18.8653C12.4742 18.9386 12.6107 18.9773 12.75 18.9773H18.75C18.9489 18.9773 19.1397 18.8983 19.2803 18.7577Z" />
							</svg>
							}
						</a>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
								<li>
										<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
								</li>
								<li>
										<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
								</li>
								<li>
										<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
								</li>
						</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-13" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-13' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
							<span className="ml-3 flex-1">13. JavaScript asíncrono</span>
							{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							: <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
							<path d="M8.50093 5.78773V17.7877C8.50093 17.9866 8.42191 18.1774 8.28126 18.3181C8.14061 18.4587 7.94984 18.5377 7.75093 18.5377C7.55202 18.5377 7.36125 18.4587 7.2206 18.3181C7.07995 18.1774 7.00093 17.9866 7.00093 17.7877V7.18898L5.16718 8.41273C5.00142 8.52313 4.79859 8.56316 4.60332 8.52401C4.40805 8.48486 4.23632 8.36974 4.12593 8.20398C4.01553 8.03822 3.97551 7.8354 4.01465 7.64013C4.0538 7.44485 4.16892 7.27313 4.33468 7.16273L7.33468 5.16273C7.4477 5.08733 7.57908 5.04404 7.71479 5.03749C7.8505 5.03095 7.98544 5.06139 8.10519 5.12556C8.22495 5.18974 8.32502 5.28524 8.39472 5.40187C8.46442 5.5185 8.50113 5.65187 8.50093 5.78773Z" />
							<path d="M21.75 0.0251465H1.75C1.28587 0.0251465 0.840752 0.209521 0.512563 0.53771C0.184375 0.865898 0 1.31102 0 1.77515V21.7751C0 22.2393 0.184375 22.6844 0.512563 23.0126C0.840752 23.3408 1.28587 23.5251 1.75 23.5251H21.75C22.2141 23.5251 22.6592 23.3408 22.9874 23.0126C23.3156 22.6844 23.5 22.2393 23.5 21.7751V1.77515C23.5 1.31102 23.3156 0.865898 22.9874 0.53771C22.6592 0.209521 22.2141 0.0251465 21.75 0.0251465ZM22 21.7751C22 21.8415 21.9737 21.905 21.9268 21.9519C21.8799 21.9988 21.8163 22.0251 21.75 22.0251H1.75C1.6837 22.0251 1.62011 21.9988 1.57322 21.9519C1.52634 21.905 1.5 21.8415 1.5 21.7751V1.77515C1.5 1.70884 1.52634 1.64525 1.57322 1.59837C1.62011 1.55149 1.6837 1.52515 1.75 1.52515H21.75C21.8163 1.52515 21.8799 1.55149 21.9268 1.59837C21.9737 1.64525 22 1.70884 22 1.77515V21.7751Z" />
							<path d="M18.7776 16.6203C19.2485 15.9195 19.5 15.0943 19.5 14.25C19.499 13.35 19.2129 12.4735 18.6826 11.7463C18.1524 11.0191 17.4053 10.4786 16.5487 10.2025L19.365 6.18C19.4437 6.06757 19.49 5.9357 19.4989 5.79876C19.5078 5.66182 19.479 5.52506 19.4156 5.40336C19.3522 5.28167 19.2566 5.17971 19.1392 5.10859C19.0219 5.03747 18.8872 4.99991 18.75 5H12.75C12.5511 5 12.3603 5.07902 12.2197 5.21967C12.079 5.36032 12 5.55109 12 5.75C12 5.94891 12.079 6.13968 12.2197 6.28033C12.3603 6.42098 12.5511 6.5 12.75 6.5H17.31L14.635 10.32C14.5563 10.4324 14.51 10.5643 14.5011 10.7012C14.4922 10.8382 14.521 10.9749 14.5844 11.0966C14.6478 11.2183 14.7434 11.3203 14.8608 11.3914C14.9781 11.4625 15.1128 11.5001 15.25 11.5C15.7034 11.5 16.1498 11.6121 16.5494 11.8263C16.949 12.0405 17.2895 12.3502 17.5404 12.7278C17.7914 13.1054 17.9451 13.5392 17.9879 13.9906C18.0306 14.442 17.9611 14.897 17.7855 15.315C17.61 15.733 17.3337 16.1012 16.9814 16.3866C16.6292 16.6721 16.2118 16.866 15.7664 16.9511C15.3211 17.0362 14.8616 17.0099 14.4289 16.8745C13.9962 16.7391 13.6036 16.4988 13.2862 16.175C13.2174 16.1046 13.1353 16.0484 13.0448 16.0097C12.9542 15.971 12.8569 15.9505 12.7584 15.9494C12.6599 15.9483 12.5622 15.9666 12.4708 16.0033C12.3793 16.0399 12.296 16.0943 12.2256 16.1631C12.1552 16.232 12.099 16.314 12.0603 16.4046C12.0216 16.4952 12.0011 16.5925 12 16.691C11.9989 16.7895 12.0172 16.8872 12.0539 16.9786C12.0906 17.07 12.1449 17.1533 12.2137 17.2237C12.8045 17.8269 13.5616 18.2405 14.3884 18.4117C15.2152 18.5828 16.0742 18.5039 16.856 18.1848C17.6377 17.8658 18.3067 17.3211 18.7776 16.6203Z" />
							</svg>
							}
						</a>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
								<li>
										<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
								</li>
								<li>
										<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
								</li>
								<li>
										<a href="#" className="group flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
								</li>
						</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-14" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-14' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
							<span className="ml-3 flex-1">14. Metaprogramación</span>
							{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							: <svg width="24" height="25" fill="currentColor" viewBox="0 0 24 25" >
							<path d="M8.50093 6.30031V18.3003C8.50093 18.4992 8.42191 18.69 8.28126 18.8306C8.14061 18.9713 7.94984 19.0503 7.75093 19.0503C7.55202 19.0503 7.36125 18.9713 7.2206 18.8306C7.07995 18.69 7.00093 18.4992 7.00093 18.3003V7.70156L5.16718 8.92531C5.00142 9.0357 4.79859 9.07573 4.60332 9.03658C4.40805 8.99743 4.23632 8.88232 4.12593 8.71656C4.01553 8.5508 3.97551 8.34797 4.01465 8.1527C4.0538 7.95743 4.16892 7.7857 4.33468 7.67531L7.33468 5.67531C7.4477 5.5999 7.57908 5.55661 7.71479 5.55007C7.8505 5.54352 7.98544 5.57396 8.10519 5.63814C8.22495 5.70231 8.32502 5.79782 8.39472 5.91444C8.46442 6.03107 8.50113 6.16444 8.50093 6.30031Z" />
							<path d="M19.7482 14.5002H18.4982V6.25017C18.4982 6.0938 18.4494 5.94133 18.3585 5.81408C18.2676 5.68683 18.1392 5.59118 17.9913 5.54049C17.8434 5.48981 17.6833 5.48663 17.5335 5.53139C17.3836 5.57616 17.2516 5.66664 17.1557 5.79017L10.1557 14.7902C10.0696 14.901 10.0163 15.0338 10.002 15.1735C9.98762 15.3131 10.0127 15.4539 10.0745 15.58C10.1362 15.7061 10.2321 15.8123 10.3512 15.8866C10.4703 15.9608 10.6078 16.0002 10.7482 16.0002H16.9982V18.2502C16.9982 18.4491 17.0772 18.6398 17.2178 18.7805C17.3585 18.9212 17.5493 19.0002 17.7482 19.0002C17.9471 19.0002 18.1379 18.9212 18.2785 18.7805C18.4192 18.6398 18.4982 18.4491 18.4982 18.2502V16.0002H19.7482C19.9471 16.0002 20.1379 15.9212 20.2785 15.7805C20.4192 15.6398 20.4982 15.4491 20.4982 15.2502C20.4982 15.0513 20.4192 14.8605 20.2785 14.7198C20.1379 14.5792 19.9471 14.5002 19.7482 14.5002ZM16.9982 14.5002H12.2819L16.9982 8.43642V11.4683V14.5002Z" />
							<path d="M21.75 0.537729H1.75C1.28587 0.537729 0.840752 0.722104 0.512563 1.05029C0.184375 1.37848 0 1.8236 0 2.28773V22.2877C0 22.7519 0.184375 23.197 0.512563 23.5252C0.840752 23.8534 1.28587 24.0377 1.75 24.0377H21.75C22.2141 24.0377 22.6592 23.8534 22.9874 23.5252C23.3156 23.197 23.5 22.7519 23.5 22.2877V2.28773C23.5 1.8236 23.3156 1.37848 22.9874 1.05029C22.6592 0.722104 22.2141 0.537729 21.75 0.537729ZM22 22.2877C22 22.354 21.9737 22.4176 21.9268 22.4645C21.8799 22.5114 21.8163 22.5377 21.75 22.5377H1.75C1.6837 22.5377 1.62011 22.5114 1.57322 22.4645C1.52634 22.4176 1.5 22.354 1.5 22.2877V2.28773C1.5 2.22143 1.52634 2.15784 1.57322 2.11095C1.62011 2.06407 1.6837 2.03773 1.75 2.03773H21.75C21.8163 2.03773 21.8799 2.06407 21.9268 2.11095C21.9737 2.15784 22 2.22143 22 2.28773V22.2877Z" />
							</svg>
							}
						</a>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
								</li>
						</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-15" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-15' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
							<span className="ml-3 flex-1">15. JavaScript en los navegadores web</span>
							{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							: <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
							<path d="M8.50093 5.81288V17.8129C8.50093 18.0118 8.42191 18.2026 8.28126 18.3432C8.14061 18.4839 7.94984 18.5629 7.75093 18.5629C7.55202 18.5629 7.36125 18.4839 7.2206 18.3432C7.07995 18.2026 7.00093 18.0118 7.00093 17.8129V7.21413L5.16718 8.43788C5.00142 8.54828 4.79859 8.5883 4.60332 8.54915C4.40805 8.51001 4.23632 8.39489 4.12593 8.22913C4.01553 8.06337 3.97551 7.86054 4.01465 7.66527C4.0538 7.47 4.16892 7.29828 4.33468 7.18788L7.33468 5.18788C7.4477 5.11247 7.57908 5.06919 7.71479 5.06264C7.8505 5.05609 7.98544 5.08653 8.10519 5.15071C8.22495 5.21489 8.32502 5.31039 8.39472 5.42702C8.46442 5.54364 8.50113 5.67701 8.50093 5.81288Z" />
							<path d="M21.75 0.0503025H1.75C1.28587 0.0503025 0.840752 0.234677 0.512563 0.562866C0.184375 0.891054 0 1.33617 0 1.8003V21.8003C0 22.2644 0.184375 22.7096 0.512563 23.0377C0.840752 23.3659 1.28587 23.5503 1.75 23.5503H21.75C22.2141 23.5503 22.6592 23.3659 22.9874 23.0377C23.3156 22.7096 23.5 22.2644 23.5 21.8003V1.8003C23.5 1.33617 23.3156 0.891054 22.9874 0.562866C22.6592 0.234677 22.2141 0.0503025 21.75 0.0503025ZM22 21.8003C22 21.8666 21.9737 21.9302 21.9268 21.9771C21.8799 22.024 21.8163 22.0503 21.75 22.0503H1.75C1.6837 22.0503 1.62011 22.024 1.57322 21.9771C1.52634 21.9302 1.5 21.8666 1.5 21.8003V1.8003C1.5 1.734 1.52634 1.67041 1.57322 1.62353C1.62011 1.57664 1.6837 1.5503 1.75 1.5503H21.75C21.8163 1.5503 21.8799 1.57664 21.9268 1.62353C21.9737 1.67041 22 1.734 22 1.8003V21.8003Z" />
							<path d="M12.9599 10.25L13.5849 6.5H17.9499C18.1489 6.5 18.3396 6.42098 18.4803 6.28033C18.6209 6.13968 18.6999 5.94891 18.6999 5.75C18.6999 5.55109 18.6209 5.36032 18.4803 5.21967C18.3396 5.07902 18.1489 5 17.9499 5H12.9499C12.7726 4.99988 12.601 5.0626 12.4655 5.17702C12.3301 5.29144 12.2395 5.45016 12.2099 5.625L11.2099 11.625C11.183 11.7827 11.2072 11.9449 11.2789 12.0879C11.3507 12.2308 11.4663 12.3471 11.6088 12.4197C11.7514 12.4923 11.9134 12.5174 12.0713 12.4914C12.2291 12.4654 12.3745 12.3895 12.4862 12.275C12.7449 12.0208 13.052 11.8212 13.3894 11.6881C13.7267 11.555 14.0874 11.491 14.4499 11.5C15.1793 11.5 15.8788 11.7897 16.3945 12.3055C16.9102 12.8212 17.1999 13.5207 17.1999 14.25C17.1999 14.9793 16.9102 15.6788 16.3945 16.1945C15.8788 16.7103 15.1793 17 14.4499 17C14.0874 17.009 13.7267 16.945 13.3894 16.8119C13.052 16.6788 12.7449 16.4792 12.4862 16.225C12.347 16.0828 12.1569 16.0017 11.9579 15.9996C11.7589 15.9975 11.5672 16.0745 11.4249 16.2138C11.2827 16.353 11.2016 16.543 11.1995 16.742C11.1974 16.9411 11.2745 17.1328 11.4137 17.275C11.812 17.6721 12.286 17.9851 12.8075 18.1955C13.3291 18.406 13.8876 18.5095 14.4499 18.5C15.5771 18.5 16.6581 18.0522 17.4552 17.2552C18.2522 16.4582 18.6999 15.3772 18.6999 14.25C18.6999 13.1228 18.2522 12.0418 17.4552 11.2448C16.6581 10.4478 15.5771 10 14.4499 10C13.9427 9.99877 13.439 10.0833 12.9599 10.25Z" />
							</svg>
							}
						</a>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
								</li>
						</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-16" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-16' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
							<span className="ml-3 flex-1">16. JavaScript del lado del servidor con Node</span>
							{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							: <svg width="24" height="25" fill="currentColor" viewBox="0 0 24 25" >
							<path d="M8.50093 6.32545V18.3255C8.50093 18.5244 8.42191 18.7151 8.28126 18.8558C8.14061 18.9964 7.94984 19.0755 7.75093 19.0755C7.55202 19.0755 7.36125 18.9964 7.2206 18.8558C7.07995 18.7151 7.00093 18.5244 7.00093 18.3255V7.7267L5.16718 8.95045C5.00142 9.06085 4.79859 9.10088 4.60332 9.06173C4.40805 9.02258 4.23632 8.90746 4.12593 8.7417C4.01553 8.57594 3.97551 8.37312 4.01465 8.17784C4.0538 7.98257 4.16892 7.81085 4.33468 7.70045L7.33468 5.70045C7.4477 5.62505 7.57908 5.58176 7.71479 5.57521C7.8505 5.56867 7.98544 5.59911 8.10519 5.66328C8.22495 5.72746 8.32502 5.82296 8.39472 5.93959C8.46442 6.05622 8.50113 6.18959 8.50093 6.32545Z" />
							<path d="M15.4052 10.5372C15.1706 10.5377 14.9365 10.5574 14.7052 10.596L17.0489 6.6722C17.0995 6.58766 17.1329 6.494 17.1473 6.39655C17.1616 6.29909 17.1567 6.19977 17.1326 6.10424C17.1086 6.00871 17.066 5.91885 17.0072 5.83979C16.9485 5.76073 16.8747 5.69401 16.7902 5.64345C16.7057 5.59289 16.612 5.55948 16.5145 5.54512C16.4171 5.53076 16.3178 5.53574 16.2222 5.55977C16.1267 5.5838 16.0368 5.6264 15.9578 5.68516C15.8787 5.74391 15.812 5.81766 15.7614 5.9022L11.7314 12.6522C11.2612 13.4616 11.0713 14.4037 11.1913 15.332C11.3113 16.2604 11.7345 17.1232 12.3951 17.7865C13.0557 18.4497 13.9169 18.8763 14.8448 18.9999C15.7727 19.1236 16.7154 18.9375 17.5267 18.4704C18.338 18.0034 18.9724 17.2815 19.3313 16.417C19.6903 15.5524 19.7538 14.5936 19.512 13.6892C19.2701 12.7849 18.7365 11.9857 17.9939 11.4158C17.2513 10.8458 16.3413 10.537 15.4052 10.5372ZM15.4052 17.5372C14.8613 17.5372 14.3296 17.3759 13.8774 17.0737C13.4251 16.7716 13.0727 16.3421 12.8645 15.8396C12.6564 15.3371 12.6019 14.7841 12.708 14.2507C12.8141 13.7173 13.0761 13.2273 13.4606 12.8427C13.8452 12.4581 14.3352 12.1962 14.8687 12.09C15.4021 11.9839 15.9551 12.0384 16.4576 12.2465C16.9601 12.4547 17.3896 12.8071 17.6917 13.2594C17.9939 13.7116 18.1552 14.2433 18.1552 14.7872C18.1552 15.5165 17.8655 16.216 17.3497 16.7317C16.834 17.2475 16.1345 17.5372 15.4052 17.5372Z" />
							<path d="M21.75 0.562876H1.75C1.28587 0.562876 0.840752 0.74725 0.512563 1.07544C0.184375 1.40363 0 1.84875 0 2.31288V22.3129C0 22.777 0.184375 23.2221 0.512563 23.5503C0.840752 23.8785 1.28587 24.0629 1.75 24.0629H21.75C22.2141 24.0629 22.6592 23.8785 22.9874 23.5503C23.3156 23.2221 23.5 22.777 23.5 22.3129V2.31288C23.5 1.84875 23.3156 1.40363 22.9874 1.07544C22.6592 0.74725 22.2141 0.562876 21.75 0.562876ZM22 22.3129C22 22.3792 21.9737 22.4428 21.9268 22.4897C21.8799 22.5365 21.8163 22.5629 21.75 22.5629H1.75C1.6837 22.5629 1.62011 22.5365 1.57322 22.4897C1.52634 22.4428 1.5 22.3792 1.5 22.3129V2.31288C1.5 2.24657 1.52634 2.18298 1.57322 2.1361C1.62011 2.08921 1.6837 2.06288 1.75 2.06288H21.75C21.8163 2.06288 21.8799 2.08921 21.9268 2.1361C21.9737 2.18298 22 2.24657 22 2.31288V22.3129Z" />
							</svg>
							}
						</a>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-amber-900 rounded-sm  group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
								</li>
						</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-17" className={`group flex items-center p-2 text-base rounded-sm font-bold transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] dark:hover:bg-[#FFF8E8] hover:bg-amber-900 ${direction === '/javascript-la-guia-definitiva/capitulo-17' ? 'bg-amber-900 text-[#fff8e8] dark:bg-[#fff8e8] dark:text-amber-900' : 'dark:text-[#fff8e8] text-amber-900'}`}>
							<span className="ml-3 flex-1">17. Herramientas y extensiones de JavaScript</span>
							{isOpen ? <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
							: <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.50093 5.83803V17.838C8.50093 18.0369 8.42191 18.2277 8.28126 18.3684C8.14061 18.509 7.94984 18.588 7.75093 18.588C7.55202 18.588 7.36125 18.509 7.2206 18.3684C7.07995 18.2277 7.00093 18.0369 7.00093 17.838V7.23928L5.16718 8.46303C5.00142 8.57342 4.79859 8.61345 4.60332 8.5743C4.40805 8.53515 4.23632 8.42004 4.12593 8.25428C4.01553 8.08852 3.97551 7.88569 4.01465 7.69042C4.0538 7.49515 4.16892 7.32342 4.33468 7.21303L7.33468 5.21303C7.4477 5.13762 7.57908 5.09433 7.71479 5.08779C7.8505 5.08124 7.98544 5.11168 8.10519 5.17586C8.22495 5.24003 8.32502 5.33554 8.39472 5.45216C8.46442 5.56879 8.50113 5.70216 8.50093 5.83803Z" />
							<path d="M22.6755 0H1.82447C1.34059 0 0.876529 0.19222 0.534374 0.534374C0.19222 0.876529 0 1.34059 0 1.82447V22.6755C0 23.1594 0.19222 23.6235 0.534374 23.9656C0.876529 24.3078 1.34059 24.5 1.82447 24.5H22.6755C23.1594 24.5 23.6235 24.3078 23.9656 23.9656C24.3078 23.6235 24.5 23.1594 24.5 22.6755V1.82447C24.5 1.34059 24.3078 0.876529 23.9656 0.534374C23.6235 0.19222 23.1594 0 22.6755 0ZM22.9362 22.6755C22.9362 22.7447 22.9087 22.811 22.8598 22.8598C22.811 22.9087 22.7447 22.9362 22.6755 22.9362H1.82447C1.75534 22.9362 1.68905 22.9087 1.64017 22.8598C1.59129 22.811 1.56383 22.7447 1.56383 22.6755V1.82447C1.56383 1.75534 1.59129 1.68905 1.64017 1.64017C1.68905 1.59129 1.75534 1.56383 1.82447 1.56383H22.6755C22.7447 1.56383 22.811 1.59129 22.8598 1.64017C22.9087 1.68905 22.9362 1.75534 22.9362 1.82447V22.6755Z" />
							<path d="M19.8122 5.67971C19.7956 5.55517 19.7493 5.43646 19.6771 5.33362C19.6051 5.2307 19.5093 5.14665 19.398 5.08858C19.2866 5.03051 19.1628 5.00012 19.0372 5H12.7819C12.5745 5 12.3757 5.08238 12.229 5.22902C12.0824 5.37566 12 5.57454 12 5.78191C12 5.98929 12.0824 6.18817 12.229 6.33481C12.3757 6.48145 12.5745 6.56383 12.7819 6.56383H17.9204L13.9737 17.402C13.9386 17.4985 13.9228 17.601 13.9274 17.7036C13.9319 17.8062 13.9566 17.9069 14 18C14.0434 18.0931 14.1048 18.1767 14.1806 18.246C14.2563 18.3153 14.345 18.3691 14.4415 18.4042C14.5252 18.434 14.6133 18.4499 14.7022 18.4511C14.8627 18.4511 15.0194 18.4017 15.1509 18.3096C15.2824 18.2175 15.3823 18.0872 15.4372 17.9363L19.7722 6.04907C19.815 5.93094 19.8287 5.80425 19.8122 5.67971Z" />
							</svg>
							}
						</a>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign In</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Sign Up</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-sm group dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900 hover:text-[#FFF8E8] hover:bg-amber-900">Forgot Password</a>
								</li>
						</ul>
				</li>
			</ul>
		</div>
	</aside>
	)
}


