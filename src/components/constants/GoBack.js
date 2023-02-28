import { useNavigate} from "react-router-dom";

  export const GoBack = () => {
      let navigate = useNavigate();
      return (
          <>
            <button className="goBack" onClick={() => navigate(-1)}>{"<"}</button> 
          </>
      );
  };


  export default GoBack;