import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3><Link to={"/send_messages"}>Send Messages</Link></h3>
      <h3><Link to={"/view_messages"}>View Messages</Link></h3>
    </div>
  );
};

export default Home;