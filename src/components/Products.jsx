import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <p>This is products page</p>
      <Link to="/" className="underline">
        Go to dashboard
      </Link>
    </div>
  );
};

export default Products;
