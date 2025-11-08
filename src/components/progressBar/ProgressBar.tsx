import React, { useEffect, useRef, useState } from 'react';
import * as styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  step: number;
  total: number;
}

export const ProgressBar = ({ step, total }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    const progressPercent = (step / total) * 100;
    const barWidth = barRef.current.clientWidth;
    const progressWidth = (barWidth / 100) * progressPercent;

    setProgress(progressWidth);
  }, [step, total, barRef]);

  return (
    <div className={styles.container}>
      <div className={styles.bar} ref={barRef} />
      <div className={styles.progress} style={{ width: progress }} />
    </div>
  );
};
