export interface Film {
  name: string;
  poster_image: string;
  background_image: string;
  background_color: string;
  description: string;
  rating: number;
  director: string;
  run_time: number;
  genre: string;
  released: number;
  id: number;
  video_link: string;
  image: string;
  numberOfVotes: number;
  actors: string[];
  preview: string;
  favorite: boolean;
  reviews: Review[];
};

interface Review {
  id: number;
  rating: number;
  date: string;
  author: {
    id: number;
    name: string;
  };
  comment: string;
};
