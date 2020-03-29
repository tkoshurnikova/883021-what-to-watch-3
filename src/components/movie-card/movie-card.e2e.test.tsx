import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";
import {films} from "../../mocks-for-tests";
import {noop} from "../../utils";

configure({
  adapter: new Adapter(),
});

it(`Should film details be shown`, () => {
  const onCardHover = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film={films[0]}
        onCardHover={onCardHover}
        onCardHoverOut={noop}
        activeCard={films[0]}
      />
  );

  const card = movieCard.find(`article`);
  card.simulate(`mouseOver`);

  setTimeout(() => {
    expect(onCardHover.mock.calls.length).toBe(1);
    expect(onCardHover.mock.calls[0][0]).toMatchObject(films[0]);
  }, 1100);
});
