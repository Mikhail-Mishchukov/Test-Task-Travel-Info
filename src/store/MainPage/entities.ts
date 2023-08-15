export interface ApiTrip {
  arrCode: string;
  arrivalTime: string;
  confirmationNumber: string;
  depCode: string;
  departureTime: string;
  description: string;
  id: string;
}

export interface MainPageState {
  initialLoading: boolean;
  errorText: string;
  loadingPageType: LoadingPageType;
  trips: ApiTrip[];
}
export interface Trip {
  arrCode: string;
  arrivalTime: Date;
  confirmationNumber: string;
  depCode: string;
  departureTime: Date;
  description: string;
  id: number;
}
export enum LoadingPageType {
  Previous,
  Next,
}
