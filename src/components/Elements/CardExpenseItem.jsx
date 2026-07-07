import Icon from "./Icon";

const iconMap = {
  housing: Icon.House,
  food: Icon.Food,
  transportation: Icon.Transport,
  entertainment: Icon.Movie,
  shopping: Icon.Shopping,
  others: Icon.Other,
};

function CardExpenseItem(props) {
  const { icon, category, amount, percentage, trend, items = [] } = props;

  const isUp = trend === "up";
  const CategoryIcon = iconMap[icon?.toLowerCase()] || Icon.Other;
  const TrendIcon = isUp ? Icon.ArrowUp : Icon.ArrowDown;

  return (
    <div className="bg-white rounded-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="bg-gray-06 p-2 rounded-md">
            <CategoryIcon size={20} />
          </div>
          <div className="ms-3">
            <div className="text-gray-02 text-sm">{category}</div>
            <div className="font-bold text-lg">${amount}</div>
          </div>
        </div>
        <div className="text-right">
          <div
            className={`flex items-center justify-end font-semibold text-sm ${
              isUp ? "text-red-500" : "text-green-500"
            }`}
          >
            {percentage}%
            <TrendIcon size={14} className="ms-1" />
          </div>
          <div className="text-gray-03 text-xs">Compare to the last month</div>
        </div>
      </div>

      <div className="border-t border-gray-05">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center px-4 py-3 ${
              index !== items.length - 1 ? "border-b border-gray-05" : ""
            }`}
          >
            <span className="text-gray-01">{item.name}</span>
            <div className="text-right">
              <div className="font-semibold">${item.amount}</div>
              <div className="text-gray-03 text-xs">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardExpenseItem;
