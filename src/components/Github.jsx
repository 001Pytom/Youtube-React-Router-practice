// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(function () {
  //     fetch("https://api.github.com/users/001Pytom")
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-orange-700 text-white p-4 text-2xl">
      <div className=" w-full flex justify-center  items-center">
        <img src={data.avatar_url} width={300} alt={data.name} />
        <h1>
          {data.followers} Github followers && {data.public_repos} GitHub repo.
        </h1>
        <p>{data.bio}</p>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const resp = await fetch("https://api.github.com/users/001Pytom");
  return resp.json();
};
