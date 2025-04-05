export interface WeatherData {
    location: string;
    temperature: number;
    humidity: number;
    description: string;
    icon: string;
}

export interface SearchBarProps {
    onSearch: (city: string) => void;
}