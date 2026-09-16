import AgencyTop from "../../components/AgencyTop/AgencyTop";
import SecondNavbar from "../../components/SecondNavbar/SecondNavbar";
import "./Agency.css";

const Agency = () => {
  return (
    <>
      <div className="ag-nav">
        <SecondNavbar />
      </div>
      <AgencyTop />
    </>
  );
};

export default Agency;
