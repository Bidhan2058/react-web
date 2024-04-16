import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.item);

  return (
    <div className="items-container">
      {items.map((i) => (
        <HomeItem key={i.id} item={i} />
      ))}
    </div>
  );
};

export default Home;
