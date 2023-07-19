import React from "react";
import { Link } from "react-router-dom";
import NavProfile from "./NavProfile";
import { FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import { getLengthBasket } from "../../store/basketSlice";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/usersSlice";

const Navbar = () => {
  const basketLength = useSelector(getLengthBasket());
  const isLoggedIn = useSelector(getIsLoggedIn());

  return (
    <>
      <ul className="navbar-nav ml-auto d-flex align-items-center">
        <li className="nav-item dropdown mr-2">
          <Link className="nav-link pr-0" to="/catalog">
            Каталог
          </Link>
        </li>
        <li className="nav-item dropdown mr-2">
          <Link className="nav-link pr-0" to="/news">
            Новости
          </Link>
        </li>
        {isLoggedIn && (
          <>
            <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
              <Link className="nav-link dropdown-toggle" to="/favorite">
                <FaRegHeart />

                <span className="badge badge-danger badge-counter">8</span>
              </Link>
            </li>
            <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
              <Link className="nav-link dropdown-toggle" to="/basket">
                <FaShoppingBasket />

                {basketLength > 0 && (
                  <span className="badge badge-info badge-counter">
                    {basketLength}
                  </span>
                )}
              </Link>
            </li>
          </>
        )}

        {!isLoggedIn && (
          <li className="nav-item dropdown mr-2">
            <Link className="nav-link pr-0" to="/login">
              Вход
            </Link>
          </li>
        )}
        {isLoggedIn && <NavProfile />}
      </ul>
    </>
  );
};

export default Navbar;
