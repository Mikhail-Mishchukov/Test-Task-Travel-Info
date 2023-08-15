import { useLayoutEffect, useRef, useState } from "react";
import classes from "./Card.module.scss";
interface CardProps {
  departureTime: string;
  confirmationNumber: string;
  depCode: string;
  arrCode: string;
  arrivalTime: string;
  description: string;
}

export function Card({
  depCode,
  departureTime,
  confirmationNumber,
  arrCode,
  arrivalTime,
  description,
}: CardProps) {
  const [isTextHidden, setIsTextHidden] = useState(true);
  const [isButtonShown, setIsButtonShown] = useState(false);

  const descriptionRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    setIsTextHidden(!isTextHidden);
  };

  useLayoutEffect(() => {
    if (!descriptionRef.current) return;

    if (descriptionRef.current.offsetHeight <= 120) {
      setIsButtonShown(false);
    } else {
      setIsButtonShown(true);
    }
  }, []);
  return (
    <div className={classes.grid}>
      <div className={classes.tooltip}>{departureTime}</div>
      <div className={classes.infoContainer}>
        <div className={classes.conformationInfoContainer}>
          <div className={classes.confirmationNumber}>
            <svg
              viewBox="0 0 18 18"
              className={classes.planeIcon}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 12.75H6L3.75 15H3V14.25L5.25 12V11.25L15.75 0.75L18 0L17.25 2.25L6.75 12.75Z"
                fill="#BEC2CC"
              />
              <path
                d="M13.5 18L10.5 7.5L14.25 3.75V17.25L13.5 18Z"
                fill="#BEC2CC"
              />
              <path d="M0 4.5L10.5 7.5L14.25 3.75H0.75L0 4.5Z" fill="#BEC2CC" />
              <path
                d="M6 16.5L5.25 12.75L6.75 11.25V15.75L6 16.5Z"
                fill="#BEC2CC"
              />
              <path
                d="M1.5 12L5.25 12.75L6.75 11.25H2.25L1.5 12Z"
                fill="#BEC2CC"
              />
            </svg>
            <div>{confirmationNumber}</div>
          </div>
          <div className={classes.flightContainer}>
            <div className={classes.departureCode}>{depCode}</div>
            <div className={classes.arrowContainer}>
              <svg
                width="4"
                height="6"
                viewBox="0 0 4 6"
                xmlns="http://www.w3.org/2000/svg"
                fill="rgba(81, 87, 103, 0.4)"
              >
                <path d="M0.179937 1.11719C0.106687 1.19044 0.106687 1.30907 0.179937 1.38232L1.79744 2.99982L0.179937 4.61719C0.106687 4.69044 0.106687 4.80907 0.179937 4.88232L0.992438 5.69482C1.06569 5.76807 1.18431 5.76807 1.25756 5.69482L3.82006 3.13232C3.85681 3.09582 3.87506 3.04782 3.87506 2.99982C3.87506 2.95182 3.85681 2.90382 3.82019 2.86719L1.25769 0.304694C1.18444 0.231443 1.06581 0.231443 0.992562 0.304694L0.179937 1.11719Z" />
              </svg>
            </div>
            <div className={classes.arrivalInfo}>
              <span className={classes.arrivalCode}>{arrCode}</span>
              <div className={classes.arrivalTime}>{arrivalTime}</div>
            </div>
          </div>
        </div>
      </div>
      {description && (
        <div className={classes.description}>
          <div
            ref={descriptionRef}
            className={isTextHidden ? classes.hideDescriptionText : ""}
          >
            {description}
          </div>
          {isButtonShown && (
            <button onClick={onClick} className={classes.readMoreButton}>
              {isTextHidden ? "Read more" : "Hide text"}
              <svg
                style={{ transform: isTextHidden ? "" : "rotate(180deg)" }}
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.51043 1.57319C6.41276 1.47552 6.25459 1.47552 6.15693 1.57319L4.00026 3.72986L1.84376 1.57319C1.7461 1.47552 1.58793 1.47552 1.49026 1.57319L0.406929 2.65652C0.309263 2.75419 0.309263 2.91236 0.406929 3.01002L3.8236 6.42669C3.87226 6.47569 3.93626 6.50002 4.00026 6.50002C4.06426 6.50002 4.12826 6.47569 4.1771 6.42686L7.59376 3.01019C7.69143 2.91252 7.69143 2.75436 7.59376 2.65669L6.51043 1.57319Z"
                  fill="#0168CA"
                />
              </svg>
            </button>
          )}

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -2,
              width: "100%",
              height: "100%",
            }}
          >
            <svg
              width="100%"
              height="100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="100%"
                height="100%"
                rx="5.25"
                fill="#F8F9FA"
                stroke="#EFF2F4"
                strokeWidth="2"
              />
            </svg>
          </div>
          <svg
            style={{ position: "absolute", top: 0, right: 0 }}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 0H0L14 14V0Z"
              fill="#F8F9FA"
            />
            <path d="M0 9C0 11.7614 2.23858 14 5 14H14L0 0V9Z" fill="#DFE1E6" />
          </svg>
        </div>
      )}
    </div>
  );
}
