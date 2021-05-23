export interface Data {
  rating: number;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;
}
//data received from api response
export interface APIResponse<Data> {
  results: Array<Data>;
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    name: string;
    slug:string;
  };
}

interface Publishers {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Screenshots {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}
