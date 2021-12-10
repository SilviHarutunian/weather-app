export interface RootStateTypeHome {
  selectedScale: string;
  locationCity?: string;
  cityWeather?: { [key: string]: any[] };
  selectedDate: Date;
}
