import React from "react";

const RiskManagement: React.FC = () => {
  return (
    <div className="card p-4 mt-4">
      <h5>🧮 Риск-менеджмент</h5>

      <div className="mb-2">
        <label>Макс. риск на сделку (%)</label>
        <input type="range" className="form-range" min="1" max="10" />
      </div>

      <div className="mb-2">
        <label>Стоп-лосс (%)</label>
        <input type="number" className="form-control" defaultValue={2} />
      </div>

      <div className="mb-2">
        <label>Тейк-профит (%)</label>
        <input type="number" className="form-control" defaultValue={5} />
      </div>

      <button className="btn btn-outline-primary mt-2">
        Применить стратегию
      </button>
    </div>
  );
};

export default RiskManagement;
