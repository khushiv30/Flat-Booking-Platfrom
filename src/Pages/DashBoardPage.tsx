import { FC, memo } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/HomeComponents/Card";
import Card2 from "../Components/HomeComponents/Card2";
import Overview from "../Components/HomeComponents/Overview";
import HomePage from "./HomePage";
interface Props {
}
const DashBoardPage: FC<Props> = (props) => {
    return (
        <>
            <div>This is Dashboard Page</div>
            <br />
            <Link to="/search"><span className=" text-blue-500"><button>Plotlist</button></span> </Link>
            <br />
            <br />
            <Link to="/searchResult"><span className=" text-blue-500"><button>Sea Palace</button></span> </Link>
        </>
    );
};
DashBoardPage.defaultProps = {
}
export default memo(DashBoardPage);