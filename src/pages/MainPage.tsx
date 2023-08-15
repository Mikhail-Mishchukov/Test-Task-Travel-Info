import { useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch } from "../store/store";
import { getTripData, setLoadingPageType } from "../store/MainPage/slice";
import { Button } from "../Components/Buttons/Button";
import { Card } from "../Components/Card/Card";
import { useSelector } from "react-redux";
import { getTripsInfoState } from "../store/MainPage/selectors";
import { Loader } from "../Components/Loader/Loader";
import { LoadingPageType } from "../store/MainPage/entities";

export function MainPage() {
  const dispatch = useAppDispatch();

  const [pageHeight, setPageHeight] = useState(0);
  const [pageScroll, setPageScroll] = useState(0);

  const tripsInfoState = useSelector(getTripsInfoState);

  useLayoutEffect(() => {
    if (tripsInfoState.loadingPageType === LoadingPageType.Previous) {
      document.documentElement.scrollTo({
        top: document.documentElement.scrollHeight - pageHeight + pageScroll,
      });
    }
  }, [tripsInfoState.trips]);

  const onLoadPastTrip = () => {
    setPageScroll(document.documentElement.scrollTop);
    setPageHeight(document.documentElement.scrollHeight);

    dispatch(setLoadingPageType(LoadingPageType.Previous));
    dispatch(getTripData()).catch((error) => {
      console.error(error);
    });
  };

  const onLoadFutureTrip = () => {
    dispatch(setLoadingPageType(LoadingPageType.Next));
    dispatch(getTripData()).catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    dispatch(getTripData()).catch((error) => {
      console.error(error);
    });
  }, [dispatch]);
  return (
    <div className="container">
      {tripsInfoState.initialLoading && <Loader />}
      {tripsInfoState.errorText && (
        <div
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {tripsInfoState.errorText}
        </div>
      )}
      <div className="contentContainer">
        {!tripsInfoState.initialLoading && !tripsInfoState.errorText && (
          <>
            <Button text={"Load past itineraries"} onClick={onLoadPastTrip} />
            {tripsInfoState.trips.map((trip, index) => (
              <Card
                key={index}
                arrCode={trip.arrCode}
                arrivalTime={trip.arrivalTime}
                confirmationNumber={trip.confirmationNumber}
                depCode={trip.depCode}
                departureTime={trip.departureTime}
                description={trip.description}
              />
            ))}
            <Button
              text={"Load future itineraries"}
              onClick={onLoadFutureTrip}
            />
          </>
        )}
      </div>
    </div>
  );
}
