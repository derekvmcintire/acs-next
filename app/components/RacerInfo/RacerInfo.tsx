import { mockRacer } from '@/app/mock-data/mock';
import { IRacerInfo } from '@/app/types';
import classes from './RacerInfo.module.css';

export default function RacerInfo() {
  const racerInfo: IRacerInfo = mockRacer;

  return (
    <div className={classes.racerInfo}>
      <h2>
        <span>{`${racerInfo?.name?.first || ''} ${racerInfo?.name?.last || ''} - `}</span>
        <span>{racerInfo.teams[racerInfo.teams.length - 1]?.name || 'n/a'}</span>
      </h2>
    </div>
  );
}
