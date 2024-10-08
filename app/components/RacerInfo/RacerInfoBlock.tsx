import classes from './RacerInfo.module.css';


export default function RacerInfoBlock() {
  return (
    <div className={classes.infoBlock}>
        <p>Some info</p>
        <p>Some more info</p>
        <p>A different piece of info</p>
    </div>
  );
}