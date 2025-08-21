export interface Character {
  uid: string;
  name: string;
  url: string;
  height?: string;
  gender?: string;
}

export interface CharactersResponse {
  data: Character[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface SearchItem {
  message: string;
  result: {
    uid: string;
    description: string;
    properties: {
      name: string;
      url: string;
      [key: string]: any; // allow extra properties
    };
  };
}

export interface SearchResponse {
  data: SearchItem[];
  total: number;
  searchTerm: string;
}

export interface Film {
  title: string;
  [key: string]: any;
}

export interface Homeworld {
  name: string;
  [key: string]: any;
}

export interface CharacterDetails {
  uid: string;
  description: string;
  properties: {
    name: string;
    height: string;
    gender: string;
    birth_year: string;
    homeworld: Homeworld;
    films: Film[];
    [key: string]: any;
  };
}
