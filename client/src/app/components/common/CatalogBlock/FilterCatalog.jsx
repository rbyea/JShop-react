import React from "react";
import { useSelector } from "react-redux";
import { getListCategories } from "../../../store/categoriesSlice";
import { getListFeatures } from "../../../store/featuresSlice";
import AccordionCatalog from "./AccordionCatalog";
import SearchCatalog from "../../ui/Form/SearchCatalog";
// import { getListGames } from "../../../store/gamesSlice";

const FilterCatalog = () => {
  const categoriesList = useSelector(getListCategories());
  const featuresList = useSelector(getListFeatures());
  const [data, setData] = React.useState({ search: "" });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value.toLowerCase()
    }));
  };

  return (
    <div className="filters rounded mb-4">
      <SearchCatalog
        onChange={handleChange}
        name="search"
        value={data.search}
        type="text"
      />
      <div className="filters-body">
        <div id="accordion">
          <AccordionCatalog title="Категории" data={categoriesList} />
          <AccordionCatalog title="Особенности" data={featuresList} />
        </div>
      </div>
    </div>
  );
};

export default FilterCatalog;