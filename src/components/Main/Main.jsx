import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { LikesPage } from "../LikesPage/LikesPage";
import { Search } from "../Search/Search";
import { SearchSchool } from "../SearchSchool/SearchSchool";
import { ShowLiked } from "../ShowLiked/ShowLiked";

export const Main = () => {
  const [cards, setCards] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isLIkesVis, setIsLIkesVis] = useState(false);

  const likedCollector = (item) => {
    const newItem = {
      ...item,
      count: 1,
    };
    setLikes([...likes, newItem]);

    const itemIndex = likes.findIndex((likesItem) => likesItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        count: 1,
      };
      setLikes([...likes, newItem]);
    } else {
      const newLikes = likes.map((likesItem, index) => {
        if (index === itemIndex) {
          return {
            ...likesItem,
            count: likesItem.count + 1,
          };
        } else {
          return likesItem;
        }
      });
      setLikes(newLikes);
    }
  };

  const handleLikesVis = () => {
    setIsLIkesVis(!isLIkesVis);
  };

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
            <Cards cards={cards} likedCollector={likedCollector} />
            <ShowLiked count={likes.length} handleLikesVis={handleLikesVis} />
            {isLIkesVis && (
              <LikesPage likes={likes} handleLikesVis={handleLikesVis} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
