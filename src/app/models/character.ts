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
    residents: string[];
}

export interface EpisodeResponse {
    info: {
        count: number;
        pages: number;
    };
    results: Episode[]
}

export interface Episode {
    // Esto lo trae el endpoint
    id: number;
    name: string;
    air_date: string;
    episode: string;
    url: string;
    
    // Lo va a procesar y asignar el servicio luego de obtener la respuesta del endpoint
    season: string;
    episode_number: string;
}