import { formatTimeToAMPM } from "../../utilities";
import { ApiTrip } from "./entities";

export async function getInitialDataRequest(page: number): Promise<ApiTrip[]> {
  try {
    const response = await fetch(
      `https://648fff8a1e6aa71680ca579b.mockapi.io/trips?l=10&p=${page}`
    );
    const data = (await response.json()) as ApiTrip[];

    return data.map((trip) => ({
      id: trip.id,
      arrCode: trip.arrCode,
      arrivalTime: `${formatTimeToAMPM(new Date(trip.arrivalTime))}`,
      confirmationNumber: trip.confirmationNumber,
      depCode: trip.depCode,
      departureTime: `${formatTimeToAMPM(new Date(trip.departureTime))}`,
      description: trip.description,
    }));
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
  return [];
}
