import Color from "./Color";
import Font from "./Font";
import FontSize from "./FontSize";
import LineHeight from "./LineHeight";
import Template from "./Template";
import ZoomOut from "./ZoomOut";

const EditBar = () => {
  return (
    <div className="flex justify-between space-x-6 items-center px-4 py-4 bg-slate-100 shadow rounded">
      <Template />
      <div className="flex justify-center items-center space-x-8">
        <Font />
        <FontSize />
        <LineHeight />
        <Color />
      </div>
      <ZoomOut />
    </div>
  );
};

export default EditBar;
