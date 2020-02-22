import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const film = {
  title: `The No Flowers`,
  image: `http://placehold.it/280x175`,
  description: `qwerty`,
  rating: 1.0,
  numberOfVotes: 1982,
  director: `Taika Di Caprio`,
  actors: `Ashley Cooper`,
  genre: `Dramas`,
  year: 1900,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should film details be shown`, () => {
  const onCardHover = jest.fn();
  const onCardHoverOut = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film={film}
        onCardHover={onCardHover}
        onCardHoverOut={onCardHoverOut}
        onCardClick={() => {}}
      />
  );

  const card = movieCard.find(`article`);
  card.simulate(`mouseOver`);
  card.simulate(`mouseOut`);

  expect(onCardHover.mock.calls.length).toBe(1);
  expect(onCardHover.mock.calls[0][0]).toMatchObject(film);
});

it(`Should film card be clicked`, () => {
  const onCardClick = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film={film}
        onCardHover={() => {}}
        onCardHoverOut={() => {}}
        onCardClick={onCardClick}
      />
  );

  const cardLink = movieCard.find(`.small-movie-card__link`);
  const linkPrevention = jest.fn();
  cardLink.simulate(`click`, {
    preventDefault: linkPrevention
  });

  expect(onCardClick).toHaveBeenCalledTimes(1);
  expect(linkPrevention).toHaveBeenCalledTimes(1);
});
