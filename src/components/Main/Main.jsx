import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { Search } from "../Search/Search";
import { SearchSchool } from "../SearchSchool/SearchSchool";
import { ShowLiked } from "../ShowLiked/ShowLiked";

export const Main = () => {
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);

  const searchCards = (search) => {
    fetch(`https://hp-api.onrender.com/api/characters`)
      .then((response) => response.json())
      .then((data) => {
        setCards(
          data.filter((card) => {
            return card.name.includes(search);
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchSchool = (school) => {
    fetch(`https://hp-api.onrender.com/api/characters`)
      .then((response) => response.json())
      .then((data) => {
        setCards(
          data.filter((card) => {
            return card.house.includes(school);
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section>
        <div className="content">
          <div className="container">
            <Search searchCards={searchCards} />
            <SearchSchool searchSchool={searchSchool} />
            <Cards cards={cards} />
            <ShowLiked count={count} />
          </div>
        </div>
      </section>
    </main>
  );
};
