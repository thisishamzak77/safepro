import React from "react";
import TrainingCard from "./TrainingCard";
import styles from "./TrainingCardGrid.module.css";

const TrainingCardGrid = ({ programs }) => {
  return (
    <div className={styles.grid}>
      {programs.map((program) => (
        <TrainingCard key={program.slug} {...program} />
      ))}
    </div>
  );
};

export default TrainingCardGrid;
