import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p> This is Dashboard</p>
      <Link to="/products" className="underline">
        Go to products
      </Link>
    </div>
  );
};

export default Dashboard;
