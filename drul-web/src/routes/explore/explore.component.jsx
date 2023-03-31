import Accordion from "../../components/accordion/accordion.component";
import FilterBar from "../../components/filter-bar/filter-bar.component";

const Explore = () => {
  return (
    <>
      {/* <FilterBar /> */}
      <Accordion title="Cuisine" />
      <Accordion title="Tags" />
      <Accordion title="Location" />
    </>
  );
};

export default Explore;
