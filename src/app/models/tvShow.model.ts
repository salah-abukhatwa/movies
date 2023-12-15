export interface TvShow {
    adult: boolean;
    backdrop_path: string;
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
    revenue: number;
    runtime: number;
    status: string;
    genres: Genre[];
    season_number: number;
    episode_run_time: number[];
    first_air_date: string;
    homepage: string;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: LastEpisod[];
    next_episode_to_air: string;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    seasons: Season[];
}

export interface TvShDto {
    page: number;
    results: TvShow[];
    total_pages: number;
    total_results: number;
}

export interface Genre {
    id: number;
    name: string;
    episode_numbe: number;
    season_number: number;
}
export interface LastEpisod {
    id: number;
    name: string;
}
export interface Network {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}
export interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
}

export interface TvShowVideosDto {
    id: number;
    results: TvShowVideo[];
}
export interface TvShowVideo {
    site: string;
    key: string;
}
export interface TvShowImages {
    backdrops: {
        file_path: string;
    }[];
}
export interface TvShowCredits {
    cast: {
        name: string;
        profile_path: string;
    }[];
}
