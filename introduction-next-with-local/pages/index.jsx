import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

export default function HomePage() {
  const languages = ["Java", "Javascript", "TypeScript"];

  const [likes, setLikes] = useState(0);

  const LikeComp = () => <h4>Like {likes}</h4>;

  function handleClick() {
    setLikes(likes + 1);
  }
  function handleClickDislike() {
    if (likes < 0) {
      console.log("Please, try to like");
    } else {
      setLikes(likes - 1);
    }
  }

  return (
    <div>
      <Header title="Next.JS is awesome bruh" />
      <ul>
        {languages.map((data) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
      <button onClick={handleClick}> Like </button>
      <h1>{likes >= 0 ? <LikeComp /> : "You dont have likes"}</h1>
      <button onClick={handleClickDislike}> Dislike </button>
    </div>
  );
}
