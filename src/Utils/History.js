import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-hooks/rules-of-hooks
function History(){
    let nav= useNavigate();
    return nav;
};

export default History;
