import "./App.css";
import { useQueryProductsQuery } from "./graphql/generated-types";

function App() {
  const { data, loading, error } = useQueryProductsQuery();

  if (loading || !data?.products?.data) {
    return <div>Loading...</div>;
  }

  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <div className="text-xl text-yellow-500">
        {data.products.data[0].attributes?.name}
      </div>
    </div>
  );
}

export default App;
