export interface CharacterResponse {
    info: {
        count: number;
        pages: number;
    };
    results: Character[]
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    image: string;
    mostrar: boolean;
    episode: string[];
}

export interface Origin {
    name: string;
    url: string;
}

export interface Episode {
    name: string;
    air_date: string;
    procesed: boolean;
    episode_number: string;
    season: string;
}