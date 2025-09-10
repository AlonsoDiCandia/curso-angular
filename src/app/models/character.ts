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
    origin: Origin
}

export interface Origin {
    name: string;
}