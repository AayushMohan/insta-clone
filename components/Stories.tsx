// import faker from "faker"
import { useEffect } from "react";

const Stories = () => {

 useEffect(() => {
   const suggestions = [...Array(20)].map((_, i) => ({
    // ...faker.helpers.contextualCard(),
    id: i,
   }))
   console.log(suggestions);
 }, [])

  return (
  <div>
   {/* Story */}
   {/* Story */}
   {/* Story */}
   {/* Story */}
   {/* Story */}
   {/* Story */}
   {/* Story */}
   {/* Story */}
  </div>);
};

export default Stories;
