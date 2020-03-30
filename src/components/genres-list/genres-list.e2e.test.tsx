import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {GenresList} from "./genres-list";
import {films} from "../../mocks-for-tests";
import {noop} from "../../utils";

configure({
  adapter: new Adapter(),
});

it(`Change chosen genre`, () => {
  const genresList = shallow(
      <GenresList
        films={films}
        genre={`Dramas`}
        onGenreChange={noop}
      />
  );

  const activeGenre = genresList.find(`.catalog__genres-item--active`);
  expect(activeGenre.text()).toBe(`Dramas`);
});

it(`On genre change click`, () => {
  const onGenreChange = jest.fn();

  const genresList = shallow(
      <GenresList
        films={films}
        genre={`Dramas`}
        onGenreChange={onGenreChange}
      />
  );

  const anotherGenre = genresList.find(`.catalog__genres-link`).at(1);
  const linkPrevention = jest.fn();
  anotherGenre.simulate(`click`, {
    preventDefault: linkPrevention
  });

  expect(onGenreChange.mock.calls[0][0]).toBe(anotherGenre.text());
  expect(linkPrevention).toHaveBeenCalledTimes(1);
});
