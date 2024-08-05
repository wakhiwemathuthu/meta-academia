import Header from "../../components/header/header";
import { useState } from "react";

function Courses() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="h-full">
      <Header title="Courses" />
  
    </div>
  );
}
export default Courses;
