import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItem = useSelector((state) => state.bag);
  const items = useSelector((state) => state.item);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <div class="bag-page">
      <div class="bag-items-container">
        {finalItems.map((item) => (
          <BagItem item={item} />
        ))}
      </div>
      <BagSummary />
    </div>
  );
};
export default Bag;
