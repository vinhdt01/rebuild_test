// import React, { useRef } from "react";
// import Logo from "@components/ui/logo";
// import { useUI } from "@contexts/ui.context";
// import { ROUTES } from "@lib/routes";
// import { addActiveScroll } from "@utils/add-active-scroll";
// import dynamic from "next/dynamic";
// import { useTranslation } from "next-i18next";
// import { useAtom } from "jotai";
// import { authorizationAtom } from "@store/authorization-atom";
// import { menu } from "@data/static/menus";
// import HeaderMenu from "@components/layout/header/header-menu";
// const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
// const CartButton = dynamic(() => import("@components/cart/cart-button"), {
// 	ssr: false,
// });

// interface Props {
// 	variant?: "default" | "modern";
// }

// type DivElementRef = React.MutableRefObject<HTMLDivElement>;
// const Header: React.FC<Props> = ({
// 	variant = "default"
// }) => {
// 	const {
// 		openSidebar,
// 		setDrawerView,
// 		openSearch,
// 		openModal,
// 		setModalView,
// 	} = useUI();
//   const [ isAuthorize ] = useAtom(authorizationAtom);
// 	const { t } = useTranslation("common");
// 	const siteHeaderRef = useRef() as DivElementRef;
// 	addActiveScroll(siteHeaderRef);

// 	function handleLogin() {
// 		setModalView("LOGIN_VIEW");
// 		return openModal();
// 	}
// 	function handleMobileMenu() {
// 		setDrawerView("MOBILE_MENU");
// 		return openSidebar();
// 	}

//   return (
// 		<header
// 			id="siteHeader"
// 			ref={siteHeaderRef}
// 			className="w-full h-16 sm:h-20 lg:h-24 relative z-20"
// 		>
// 			<div className="innerSticky text-gray-700 body-font fixed bg-white w-full h-16 sm:h-20 lg:h-24 z-20 ltr:pl-4 ltr:lg:pl-6 ltr:pr-4 ltr:lg:pr-6 rtl:pr-4 rtl:lg:pr-6 rtl:pl-4 rtl:lg:pl-6 transition duration-200 ease-in-out">
// 				<div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
// 					<button
// 						aria-label="Menu"
// 						className={`menuBtn md:flex ${variant !== "modern" ? "hidden lg:hidden px-5 2xl:px-7" : "ltr:pr-7 rtl:pl-7 hidden md:block"} flex-col items-center justify-center flex-shrink-0 h-full outline-none focus:outline-none`}
// 						onClick={handleMobileMenu}
// 					>
// 						<span className="menuIcon">
// 							<span className="bar" />
// 							<span className="bar" />
// 							<span className="bar" />
// 						</span>
// 					</button>
// 					<Logo />

// 					{variant !== "modern" ?
// 					<HeaderMenu data={menu}
// 						className="hidden lg:flex ltr:md:ml-6 ltr:xl:ml-10 rtl:md:mr-6 rtl:xl:mr-10"
// 					/>
// 					:
// 					""
//   					}


// 					<div className="hidden md:flex justify-end items-center space-x-6 lg:space-x-5 xl:space-x-8 2xl:space-x-10 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto flex-shrink-0">
// 						<button
// 							className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
// 							onClick={openSearch}
// 							aria-label="search-button"
// 						>
// 							<SearchIcon />
// 						</button>
// 						<div className="-mt-0.5 flex-shrink-0">
// 							{/* <AuthMenu
// 								isAuthorized={isAuthorize}
// 								href={ROUTES.ACCOUNT}
// 								className="text-sm xl:text-base text-heading font-semibold"
// 								btnProps={{
// 									className:
// 										"text-sm xl:text-base text-heading font-semibold focus:outline-none",
// 									children: t("text-sign-in"),
// 									onClick: handleLogin,
// 								}}
// 							>
// 								Đăng Nhập
// 							</AuthMenu> */}
// 							<div>Đăng nhập</div>
// 						</div>
// 						<CartButton />
// 					</div>
// 				</div>
// 			</div>
// 		</header>
// 	);
// };

// export default Header;



// import React, { useRef } from "react";
// import SearchIcon from "@components/icons/search-icon";
// import Logo from "@components/ui/logo";
// import { useUI } from "@contexts/ui.context";
// import { ROUTES } from "@lib/routes";
// import { addActiveScroll } from "@utils/add-active-scroll";
// import dynamic from "next/dynamic";
// import { useTranslation } from "next-i18next";
// import { useAtom } from "jotai";
// import { authorizationAtom } from "@store/authorization-atom";
// import { menu } from "@data/static/menus";
// import HeaderMenu from "@components/layout/header/header-menu";
// const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
// const CartButton = dynamic(() => import("@components/cart/cart-button"), {
// 	ssr: false,
// });

// interface Props {
// 	variant?: "default" | "modern";
// }

// type DivElementRef = React.MutableRefObject<HTMLDivElement>;
// const Header: React.FC<Props> = ({
// 	variant = "default"
// }) => {
// 	const {
// 		openSidebar,
// 		setDrawerView,
// 		openSearch,
// 		openModal,
// 		setModalView,
// 	} = useUI();
//   const [ isAuthorize ] = useAtom(authorizationAtom);
// 	const { t } = useTranslation("common");
// 	const siteHeaderRef = useRef() as DivElementRef;
// 	addActiveScroll(siteHeaderRef);

// 	function handleLogin() {
// 		setModalView("LOGIN_VIEW");
// 		return openModal();
// 	}
// 	function handleMobileMenu() {
// 		setDrawerView("MOBILE_MENU");
// 		return openSidebar();
// 	}

//   return (
// 		<header
// 			id="siteHeader"
// 			ref={siteHeaderRef}
// 			className="w-full h-16 sm:h-20 lg:h-24 relative z-20"
// 		>
// 			<div className="innerSticky text-gray-700 body-font fixed bg-white w-full h-16 sm:h-20 lg:h-24 z-20 ltr:pl-4 ltr:lg:pl-6 ltr:pr-4 ltr:lg:pr-6 rtl:pr-4 rtl:lg:pr-6 rtl:pl-4 rtl:lg:pl-6 transition duration-200 ease-in-out">
// 				<div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
// 					<button
// 						aria-label="Menu"
// 						className={`menuBtn md:flex ${variant !== "modern" ? "hidden lg:hidden px-5 2xl:px-7" : "ltr:pr-7 rtl:pl-7 hidden md:block"} flex-col items-center justify-center flex-shrink-0 h-full outline-none focus:outline-none`}
// 						onClick={handleMobileMenu}
// 					>
// 						<span className="menuIcon">
// 							<span className="bar" />
// 							<span className="bar" />
// 							<span className="bar" />
// 						</span>
// 					</button>
// 					<Logo />

// 					{variant !== "modern" ?
// 					<HeaderMenu data={menu}
// 						className="hidden lg:flex ltr:md:ml-6 ltr:xl:ml-10 rtl:md:mr-6 rtl:xl:mr-10"
// 					/>
// 					:
// 					""
//   					}


// 					<div className="hidden md:flex justify-end items-center space-x-6 lg:space-x-5 xl:space-x-8 2xl:space-x-10 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto flex-shrink-0">
// 						<button
// 							className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
// 							onClick={openSearch}
// 							aria-label="search-button"
// 						>
// 							<SearchIcon />
// 						</button>
// 						<div className="-mt-0.5 flex-shrink-0">
// 							<AuthMenu
// 								isAuthorized={isAuthorize}
// 								href={ROUTES.ACCOUNT}
// 								className="text-sm xl:text-base text-heading font-semibold"
// 								btnProps={{
// 									className:
// 										"text-sm xl:text-base text-heading font-semibold focus:outline-none",
// 									children: t("text-sign-in"),
// 									onClick: handleLogin,
// 								}}
// 							>
// 								{t("text-page-my-account")}
// 							</AuthMenu>
// 						</div>
// 						<CartButton />
// 					</div>
// 				</div>
// 			</div>
// 		</header>
// 	);
// };

// export default Header;
import Link from 'next/link'
import HeaderMenu from './header-menu'
import HeaderMobile from './header-mobile'
import { useUI } from "@contexts/ui.context";

import CartIcon from "@components/icons/cart-icon";
import { useCart } from "@store/quick-cart/cart.context";
import NewCartButton from '@components/cart/new-cart-button';
const Header:React.FC= () => {

	const { openCart } = useUI();
	const { totalItems } = useCart();
	function handleCartOpen() {
	  return openCart();
	}

		const {
		openSidebar,
		setDrawerView,
		openSearch,
		openModal,
		setModalView,
	} = useUI();
    return (
      <div>
      	<div className="xl:block hidden">
	      	<div className="flex w-[100%] h-[49px]  m-auto justify-center items-center px-25 bg-[#fff] text-[#000000] ">
		       <div className="flex justify-between w-[1200px] ">
		             <div className="flex cursor-pointer">
		            <div className="flex  items-center">
		                <img className="w-[19px] h-[14px]" src="https://cdn.pnj.io/images/image-update/layout/icon-relationship-new.svg" alt="Quan hệ cổ đông"/>
		                <div className="mx-2 ">Quan hệ cổ đông</div>
		            </div>
		           
		            <div className="flex  items-center">
		                <img className="w-[19px] h-[14px]" src="https://cdn.pnj.io/images/image-update/layout/icon-stores-new.svg" alt="Cửa hàng"/>
		                  <div className="mx-2">Cữa hàng</div>
		            </div>
		            <div className="flex  items-center">
		                <img className="w-[19px] h-[14px]" src="https://cdn.pnj.io/images/image-update/layout/icon-hotline-new.svg" alt="Hotline"/>
		                  <div className="mx-2">1800 54 54 57</div>
		            </div>
		            </div>
		            
		            <Link href="/">
		              <img className="w-[88px] h-[38.7px] cursor-pointer" src="https://cdn.pnj.io/images/logo/pnj.com.vn.png" />
		            </Link>
		            
		            <div className="flex cursor-pointer">
		            <div className="flex  items-center">
		            <img className="w-[19px] h-[14px]" src="https://cdn.pnj.io/images/image-update/layout/icon-relationship-new.svg" alt="Quan hệ cổ đông"/>
		            <div className="mx-2">Đặt lịch hẹn</div>
		            </div>
		            <div className="flex  items-center">
		                <img className="w-[19px] h-[14px]" src="https://cdn.pnj.io/images/image-update/layout/icon-stores-new.svg" alt="Cửa hàng"/>
		                  <div className="mx-2">Lịch sử đơn hàng</div>
		            </div>
		            <div className="flex  items-center"  onClick={handleCartOpen}>
		                {/* <img className="w-[19px] h-[14px]" src="https://cdn.pnj.io/images/image-update/layout/icon-cart-new.svg" alt="Giỏ hàng"/>
		               
					  
      <span className="cart-counter-badge flex items-center justify-center bg-red-600 text-white absolute  top-7 right-[420px]  rounded-full font-bold">
        {totalItems}
      </span> */}
	  <NewCartButton/>
					    <div className="mx-2">Giỏ hàng</div>
		            </div>
		            </div>
		       </div>
		      </div>
			  <div className="max-w-[1300px] m-auto border-b-[1px] border-slate-100"></div>
			  <HeaderMenu/>
	      </div>
		  <HeaderMobile openSearch={openSearch} />
      </div>
    );
  }
  export default Header;
  