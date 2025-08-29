import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ItemCards from "./Itemcard";

const RestaurentCategeory = ({ categeory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Accordion Header */}
      <div
        className="AccordianHeader px-5 py-6 text-lg font-medium flex justify-between items-center cursor-pointer hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {categeory?.title} ({categeory?.itemCards?.length})
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <div className="px-5 py-4 bg-white">
          <ItemCards itemCards={categeory?.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurentCategeory;
