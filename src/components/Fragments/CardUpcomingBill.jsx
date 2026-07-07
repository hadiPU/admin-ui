import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

const getIconByName = (name = "") => {
  const lower = name.toLowerCase();
  if (lower.includes("figma")) return Icon.Figma;
  if (lower.includes("adobe")) return Icon.Adobe;
  return Icon.Bill; // fallback default icon
};

function CardUpcomingBill(props) {
  const { data } = props;

  return (
    <>
      <Card
        title="Upcoming Bill"
        link="/bill"
        desc={
          data.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full text-primary">
              <CircularProgress color="inherit" size={50} enableTrackSlot />
              Loading Data
            </div>
          ) : (
            <div className="flex flex-col justify-around h-full">
              {data.map((item) => {
                const ItemIcon = getIconByName(item.name);
                return (
                  <div key={item.id} className="flex justify-between pt-3 pb-3">
                    <div className="flex">
                      <div className="bg-gray-06 p-4 rounded-lg flex flex-col">
                        <span className="text-xs">{item.month}</span>
                        <span className="text-2xl font-bold">{item.date}</span>
                      </div>
                      <div className="ms-10">
                        <ItemIcon size={30} />
                        <span className="font-bold">{item.name}</span>
                        <br />
                        <span className="text-xs">
                          Last Charge - {item.lastCharge}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="py-2 px-4 border border-gray-05 rounded-lg font-bold">
                        ${item.amount}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        }
      />
    </>
  );
}

export default CardUpcomingBill;