import { useState } from "react";
import { ButtonAside } from "./ButtonAside";
export const Sidebar = () => {

	const [isOpen, setIsOpen] = useState(false);
	
	return (
	<aside className="fixed top-0 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0" ariaLabel="Sidenav">
		<div className="overflow-y-auto py-5 px-3 h-full bg-[#f6e4c5] dark:bg-amber-900">
			<ul className="space-y-2">
				<li className="list-none flex gap-2">
					<a href="/javascript-la-guia-definitiva" className="flex flex-1 items-center p-2 text-lg font-bold text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
						<img src="/javascript/favicon.png" alt="JavaScript" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
						<span className="ml-3">JavaScript: La guía definitiva</span>
					</a>
					<ButtonAside isOpen={isOpen} setIsOpen={setIsOpen} />
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-1" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
						<span className="ml-3 flex-1">1. Introducción a JavaScript</span>
						<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-2" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
						<span className="ml-3 flex-1">2. Estructura léxica</span>
						<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
					<ul id="dropdown-pages" className="hidden py-2 space-y-2">
						<li>
							<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Settings</a>
						</li>
						<li>
							<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Kanban</a>
						</li>
						<li>
							<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Calendar</a>
						</li>
					</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-3" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
							<span className="ml-3 flex-1">3. Tipos, valores y variables</span>
							<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
						<ul id="dropdown-sales" className="hidden py-2 space-y-2">
							<li>
								<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Products</a>
							</li>
							<li>
								<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Billing</a>
							</li>
							<li>
								<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Invoice</a>
							</li>
						</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-4" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
						<span className="ml-3 flex-1">4. Expresiones y operadores</span>
						<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-5" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
						<span className="ml-3 flex-1">5. Declaraciones</span>
						<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
							<li>
									<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
							</li>
							<li>
									<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
							</li>
							<li>
									<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
							</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-6" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
						<span className="ml-3 flex-1">6. Objetos</span>
						<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
							<li>
									<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
							</li>
							<li>
									<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
							</li>
							<li>
									<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
							</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-7" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
						<span className="ml-3 flex-1">7. Arrays</span>
						<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
							<li>
									<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
							</li>
							<li>
									<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
							</li>
							<li>
									<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
							</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-8" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
						<span className="ml-3 flex-1">8. Funciones</span>
						<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
							<li>
									<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
							</li>
							<li>
									<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
							</li>
							<li>
									<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
							</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-9" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
						<span className="ml-3 flex-1">9. Clases</span>
						<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
						<li>
							<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
						</li>
						<li>
							<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
						</li>
						<li>
							<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
						</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-10" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
						<span className="ml-3 flex-1">10. Módulos</span>
						<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
						<li>
							<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
						</li>
						<li>
							<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
						</li>
						<li>
							<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
						</li>
					</ul>
				</li>
				<li className="list-none">
					<a href="/javascript-la-guia-definitiva/capitulo-11" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
						<span className="ml-3 flex-1">11. La biblioteca estándar de JavaScript</span>
						<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
					<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
						<li>
							<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
						</li>
						<li>
							<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
						</li>
						<li>
							<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
						</li>
					</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-12" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
							<span className="ml-3 flex-1">12. Iteradores y generadores</span>
							<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
								</li>
						</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-13" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
							<span className="ml-3 flex-1">13. JavaScript asíncrono</span>
							<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
								</li>
						</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-14" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
							<span className="ml-3 flex-1">14. Metaprogramación</span>
							<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
								</li>
						</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-15" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
							<span className="ml-3 flex-1">15. JavaScript en los navegadores web</span>
							<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
								</li>
						</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-16" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
							<span className="ml-3 flex-1">16. JavaScript del lado del servidor con Node</span>
							<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg  group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
								</li>
						</ul>
				</li>
				<li className="list-none">
						<a href="/javascript-la-guia-definitiva/capitulo-17" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">
							<span className="ml-3 flex-1">17. Herramientas y extensiones de JavaScript</span>
							<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign In</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Sign Up</a>
								</li>
								<li>
										<a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFF8E8] transition-colors duration-500 dark:hover:text-amber-900">Forgot Password</a>
								</li>
						</ul>
				</li>
			</ul>
		</div>
	</aside>
	)
}


