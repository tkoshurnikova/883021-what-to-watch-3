// import React from "react";
// import Enzyme, {shallow} from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import Main from "./main";

// const FilmDetails = {
//   NAME: `Whispering Mist`,
//   GENRE: `Comedy`,
//   RELEASE_DATE: 1995
// };

// const allFilms = [
//   `The No Flowers`,
//   `Rings of Cloud`,
//   `The Sword's Memory`,
//   `The Voyagers of the Words`,
//   `Shores in the Heart`,
//   `Missing Illusion`,
//   `The Unwilling Man`,
//   `Thorn of Soul`,
//   `The Sons's Obsession`,
//   `The Crying of the Souls`,
//   `Sons in the Silk`,
//   `Living Heat`,
//   `The Prized Moon`,
//   `Destruction of Predator`,
//   `The Truth's Danger`,
//   `The Tears of the Wizard`,
//   `Teacher in the Hunter`,
//   `Hidden Husband`,
//   `The Luscious Truth`,
//   `Gift of Female`
// ];

// Enzyme.configure({
//   adapter: new Adapter(),
// });

// it(`Should film title be clicked`, () => {
//   const onFilmTitleClick = jest.fn();

//   const main = shallow(
//       <Main
//         filmName={FilmDetails.NAME}
//         filmGenre={FilmDetails.GENRE}
//         filmReleaseDate={FilmDetails.RELEASE_DATE}
//         allFilms={allFilms}
//         onFilmTitleClick={onFilmTitleClick}
//       />
//   );

//   const filmTitleLinks = main.find(`.small-movie-card__link`);

//   filmTitleLinks.forEach((filmTitleLink) => {
//     filmTitleLink.props().onClick();
//   });

//   expect(onFilmTitleClick.mock.calls.length).toBe(allFilms.length);
// });
