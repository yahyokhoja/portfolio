import React, { useState } from "react";

const ApiKeyForm: React.FC = () => {
  const [apiKey, setApiKey] = useState("");
  const [secret, setSecret] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("🔒 API сохранён (демо режим)");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mt-4">
      <h5>🔐 Подключение API</h5>

      <input
        className="form-control mb-2"
        placeholder="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />

      <input
        className="form-control mb-3"
        placeholder="API Secret"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
      />

      <button className="btn btn-success w-100">
        Подключить (Demo)
      </button>
    </form>
  );
};

export default ApiKeyForm;
