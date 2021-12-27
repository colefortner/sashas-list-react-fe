import { useEffect } from "react";

const TestComponent = (props) => {
  useEffect(() => {
    fetch("http://localhost:5555/api/businesses/1").then(async (response) => {
      const data = await response.json();
      console.log(data);
    });
  }, []);

  return <div>Testing</div>;
};

export default TestComponent;
