import { useState } from "react";
import { LuArrowDownSquare } from "react-icons/lu";
const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#6a5def] rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5def] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="5">5</option>
            <option value="5">10</option>
            <option value="5">20</option>
          </select>
          <input
            type="text"
            placeholder="search"
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5def] border border-slate-700 rounded-md text-[#d0d2d6]"
          />
        </div>
        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left">
            <div className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">Order id</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action</div>
                <div className="py-3 w-[8%] font-bold">
                  <LuArrowDownSquare />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
