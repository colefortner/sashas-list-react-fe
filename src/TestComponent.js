import { useEffect, useState } from "react";

const TestComponent = (props) => {
  const [businessData, setBusinessData] = useState();
  useEffect(() => {
    // fetch("http://localhost:5555/api/businesses/1")
    fetch("https://sashas-list.heroku.com/api/businesses/1")
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        }
        // const data = await response.json()
        // console.log(data);
        // setBusinessData(data.business);
        // console.log(businessData);
      })
      .then((data) => {
        setBusinessData(data.business);
      });
  }, []);

  return (
    <div>
      {businessData ? (
        <div>
          <p>{businessData.id}</p>
          <p>{businessData.name}</p>
          <p>{businessData.description}</p>
        </div>
      ) : (
        <p>hello</p>
      )}
    </div>
  );
};

export default TestComponent;
