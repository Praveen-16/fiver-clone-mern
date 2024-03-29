import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => res.data),
  });

  const renderUserInfo = () => {
    if (isLoading) return "Loading";
    if (error) return "Something went wrong!";
    return (
      <div className="user">
        <img src={data.img || "/img/noavatar.jpg"} alt="" />
        <span>{data.username}</span>
      </div>
    );
  };

  const calculateAverageStars = () => {
    const averageStars = item.starNumber !== 0 ? item.totalStars / item.starNumber : 0;
    return !isNaN(averageStars) && Math.round(averageStars);
  };

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {renderUserInfo()}
          <p>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{calculateAverageStars()}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
