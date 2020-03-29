import * as React from "react";
import {connect} from "react-redux";
import {getFormBlock, getSendingStatusText} from "../../reducer/data/selectors";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import {Film} from "../../types";

interface Props {
  onSubmit: ({rating: number, comment: string}, id: number) => void;
  film: Film;
  formBlock: boolean;
  sendingStatusText: string;
  reviewText?: string;
  isCommentValid: boolean;
  onChange: () => void;
};

class AddReview extends React.PureComponent<Props, {}> {
  private ratingInputRef: React.RefObject<HTMLInputElement>

  constructor(props) {
    super(props);

    this.ratingInputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit, film, reviewText} = this.props;
    evt.preventDefault();

    onSubmit({
      rating: this.ratingInputRef.current.value,
      comment: reviewText
    }, film.id);
  }

  render() {
    const {film,
      formBlock, sendingStatusText,
      reviewText, isCommentValid, onChange
    } = this.props;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.background_image} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <div className="logo">
              <Link to={AppRoute.MAIN} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${AppRoute.FILMS}/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </div>
          </header>
          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.poster_image} alt={film.name} width={218} height={327} />
          </div>
        </div>
        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" defaultValue={1} ref={this.ratingInputRef} />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>
                <input className="rating__input" id="star-2" type="radio" name="rating" defaultValue={2} ref={this.ratingInputRef} />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>
                <input className="rating__input" id="star-3" type="radio" name="rating" defaultValue={3} ref={this.ratingInputRef} defaultChecked />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>
                <input className="rating__input" id="star-4" type="radio" name="rating" defaultValue={4} ref={this.ratingInputRef} />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>
                <input className="rating__input" id="star-5" type="radio" name="rating" defaultValue={5} ref={this.ratingInputRef} />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>
            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                disabled={formBlock}
                value={reviewText}
                onChange={onChange}
              />
              <div className="add-review__submit">
                <p style={{margin: `0 auto`}}>{sendingStatusText}</p>
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={formBlock || !isCommentValid}
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  formBlock: getFormBlock(state),
  sendingStatusText: getSendingStatusText(state)
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
