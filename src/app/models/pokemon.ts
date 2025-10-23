export interface Pokedex {
    results: {
        name: string;
        url: string;
    }[];
}

export interface Pokemon {
    id: number;
    types: {
        type: {
            name: string;
        }
    }[];
    sprites: {
        front_default: string;
    }
}