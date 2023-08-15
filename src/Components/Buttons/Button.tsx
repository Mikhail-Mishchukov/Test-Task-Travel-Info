import classes from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
}
export function Button({ text, onClick }: ButtonProps) {
  return (
    <button className={classes.button} onClick={onClick}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            d="M7 1.75C4.10492 1.75 1.75 4.1055 1.75 7H2.91667C2.91667 4.74833 4.74892 2.91667 7 2.91667C8.27464 2.91667 9.40637 3.5098 10.1548 4.42855L8.75 5.83333H12.25V2.33333L10.9865 3.59684C10.0245 2.46847 8.59627 1.75 7 1.75ZM11.0833 7C11.0833 9.25108 9.25108 11.0833 7 11.0833C5.72536 11.0833 4.59363 10.4902 3.84521 9.57145L5.25 8.16667H1.75V11.6667L3.01351 10.4032C3.97551 11.5315 5.40373 12.25 7 12.25C9.89508 12.25 12.25 9.89508 12.25 7H11.0833Z"
            fill="#5B6373"
          />
        </g>
      </svg>
      {text}
    </button>
  );
}
