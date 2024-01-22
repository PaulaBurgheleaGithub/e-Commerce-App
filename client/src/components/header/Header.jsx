import { Link, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
// context
import CartContext from "../../context/cart/CartContext";
import authContext from "../../context/auth/authContext";

// assets
import "./Header.css";
import Logo from "../svg/logo";

//components
import CartDropDown from "../cardDropDown/cardDropDown";
import Menu from "../menu/Menu";


export default function NFT() {

	const { cartItems, showHideCart } = useContext(CartContext);
	const auth = useContext(authContext);

	return (
		<header className="header rounded-full p-1 my-7 mx-auto shadow-lg shadow-indigo-500/40">
			<nav className="px-4 mx-2 max-w-8xl">
				<ul className="text-[1.3rem]">
						<li>
						<Menu />
						</li>
						<li>
							<Link to="/">
								<Logo/>
							</Link>
						</li>
						<li>
							<div className="align-middle">
								<Link to="/Shop">Shop</Link>
							</div>
						</li>
						<li>
							<div className="align-middle">
								<Link to="/Brands">Brands</Link>
							</div>
						</li>
						<li>
							<div className="align-middle">
							<Link to="/Contact">Contact</Link>
							</div>
						</li>
					</ul>
					<div className="nav-svg m-2">
					<div>
						<Link to={auth ? "/Profile" : "/Login"}>
							<svg width="30px" height="30px" viewBox="0 0 48 48">
								<path d="M0 0h48v48H0z" fill="none" />
								<g>
									<path d="M33.843,26.914L24,36l-9.843-9.086C8.674,30.421,5,36.749,5,44h38C43,36.749,39.326,30.421,33.843,26.914z" />
									<path d="M24,28c3.55,0,6.729-1.55,8.926-4C34.831,21.876,36,19.078,36,16c0-6.627-5.373-12-12-12S12,9.373,12,16   c0,3.078,1.169,5.876,3.074,8C17.271,26.45,20.45,28,24,28z" />
								</g>
							</svg>
							<span className="sr-only">Profile Icon</span>
						</Link>
					</div>
					<div className="cart-svg">
						<i
							className="shoping-cart"
							aria-hidden="true"
							onClick={showHideCart}
						>
							<svg
							className="icon cart"
							width="30"
							height="30"
							viewBox="0 0 61 49"
							>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H13.6362C14.3878 0.5 15.0234 1.05632 15.123 1.80135L16.431 11.5916H59C59.5122 11.5916 59.989 11.8529 60.2645 12.2847C60.54 12.7165 60.5762 13.2591 60.3604 13.7236L50.182 35.632C49.9361 36.1614 49.4054 36.5 48.8217 36.5H18.0453C17.2937 36.5 16.6581 35.9437 16.5585 35.1987L12.3233 3.5H2C1.17157 3.5 0.5 2.82843 0.5 2ZM16.8319 14.5916L19.3582 33.5H47.8646L56.6491 14.5916H16.8319Z"
							></path>
							<path d="M18.589 35H49.7083L60 13H16L18.589 35Z"></path>
							<path d="M21 49C23.2091 49 25 47.2091 25 45C25 42.7909 23.2091 41 21 41C18.7909 41 17 42.7909 17 45C17 47.2091 18.7909 49 21 49Z"></path>
							<path d="M45 49C47.2091 49 49 47.2091 49 45C49 42.7909 47.2091 41 45 41C42.7909 41 41 42.7909 41 45C41 47.2091 42.7909 49 45 49Z"></path>
							</svg>
							<span className="sr-only">Cart Icon</span>
						</i>
						{cartItems.length > 0 && (
							<div className="item_count">
							<span>{cartItems.length}</span>
							</div>
						)}
					</div>
					</div>
			</nav>
		</header>
	);
}
