export interface TvShow {
    adult: boolean;
    backdrop_path: string;
    first_air_date: Date;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    original_name: string;
}

export interface TvShDto {
    page: number;
    results: TvShow[];
    total_pages: number;
    total_results: number;
}
