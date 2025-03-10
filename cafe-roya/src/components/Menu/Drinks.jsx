import { menu } from "./menuitems";
const Drinks = () => (
  <div className="text-center">
    <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
    <p className="text-xl text-red-700 font-semibold">Drinks</p>
    <div className="grid grid-cols-3 gap-x-32 gap-y-12 mt-12">
      {menu.map((item) => (
        <div key={item.id} className="text-center">
          <img src={item.image} alt="" />
          <div className="space-y-2 mt-5">
            <h4 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h4>
            <p className="text-lg text-gray-700">{item.des}</p>
            <span className="text-xl font-bold text-red-800">${item.cost}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Drinks;
