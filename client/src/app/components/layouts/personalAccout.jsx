import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getCurrentUserId } from "../../store/usersSlice";
import UsersLoader from "../ui/hoc/userLoader";
import UserPage from "../common/page/UserPage";
import ArticlePage from "../common/page/ArticlePage";
import RefreshUser from "../common/page/RefreshUser";
import FavoritePage from "../common/page/FavoritePage";

const PersonalAccount = (props) => {
  const { userId, edit } = useParams();
  const currentUserId = useSelector(getCurrentUserId());

  return (
    <UsersLoader>
      {userId ? (
        <section className="py-5 account-page">
          <div className="container">
            <div className="row">
              <ArticlePage />
              {edit === "edit" ? (
                userId === currentUserId ? (
                  <RefreshUser />
                ) : (
                  <Redirect to={`/account/${currentUserId}`} />
                )
              ) : edit === "favorite" ? (
                <FavoritePage />
              ) : (
                <div className="col-lg-9">
                  <UserPage />
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <Redirect to="/login" />
      )}
    </UsersLoader>
  );
};

export default PersonalAccount;
