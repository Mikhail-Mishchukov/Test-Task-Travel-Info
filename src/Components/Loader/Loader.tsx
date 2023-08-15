import classes from "./Loader.module.scss";

export function Loader() {
  return (
    <div className={classes.overlay}>
      <div className={classes.loaderContainer}>
        <div className={classes.loader}></div>
        <div className={classes.loader}></div>
      </div>
    </div>
  );
}
