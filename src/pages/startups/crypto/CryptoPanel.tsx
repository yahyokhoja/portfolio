import PriceChart from "./PriceChart";
import ApiKeyForm from "./ApiKeyForm";
import RiskManagement from "./RiskManagement";

const CryptoPanel = () => {
  return (
    <div className="container py-5">
      <h2>💹 Криптотрейдинг панель</h2>

      <PriceChart />
      <ApiKeyForm />
      <RiskManagement />
    </div>
  );
};

export default CryptoPanel;
