import { useState } from "react";
import HireForm from "./components/HireForm";
import { Link } from "react-router-dom";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  );
}

export default PersonProfile;
