export interface Ciudad{
    weather: ClimaCiudad[];
    main: {
        temp: number;
        humidity: number;
        sea_level: number;
    };
    wind: {
        speed: number;
    }
    sys: {
        sunrise: number;
        sunset: number;
    }
    name: string;
} 

export interface ClimaCiudad {
    main: string;
    description: string;
    icon: string;
}