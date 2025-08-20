export interface Character {
  uid: string;
  name: string;
  url: string;
}

export interface CharactersResponse {
  message: string;
  results: Character[];
  total_records?: number;
  total_pages?: number;
}

export interface SearchResponse {
  message: string;
  result: Character[];
}
