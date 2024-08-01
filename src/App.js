import Recipe from "./component/main";
import Navbar from "./component/nav";
import Pagination from "./component/pagination";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Recipe />
      <Pagination />
    </>
  );
}
