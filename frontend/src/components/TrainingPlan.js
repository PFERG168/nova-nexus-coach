import React from 'react';

const TrainingPlan = ({ plan }) => {
  return (
    <div>
      <h3>Recommended Training Plan</h3>
      <ul>
        <li>Aim Drills: {plan.aimDrills}</li>
        <li>Movement Drills: {plan.movementDrills}</li>
        <li>Notes: {plan.notes}</li>
      </ul>
    </div>
  );
};

export default TrainingPlan;
