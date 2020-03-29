import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import MoviesList from "../movies-list/movies-list";
import Footer from "../footer/footer";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {getFavoriteFilms} from "../../reducer/data/selectors";
import {AppRoute} from "../../const";
import {Film} from "../../types";

interface Props {
  favoriteFilms?: Film[];
}

const WrappedMoviesList = withActiveItem(MoviesList);

const MyList: React.FunctionComponent<Props> = (props: Props) => {
  const {favoriteFilms} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.MAIN} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">My list</h1>
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </div>
        </div>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <WrappedMoviesList
          films={favoriteFilms}
        />
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state)
});

export {MyList};
export default connect(mapStateToProps)(MyList);
