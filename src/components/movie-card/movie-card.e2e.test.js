import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const film = {
  title: `The No Flowers`,
  image: `http://placehold.it/280x175`
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
      />
  );

  const card = movieCard.find(`article`);
  card.simulate(`mouseOver`);
  card.simulate(`mouseOut`);

  expect(onCardHover.mock.calls.length).toBe(1);
  expect(onCardHover.mock.calls[0][0]).toMatchObject(film);
});
