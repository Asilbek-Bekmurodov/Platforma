const Card = ({ data }) => {
  const { title, price, usersCount, gb, support, btnName } = data;
  return (
    <div class="card">
      <div class="card-body text-center ">
        <div className="card-top">
          <h5 class="card-title">{title}</h5>
        </div>
        <div className="wrapper">
          <p className="price">
            <span className="dark-color">${price} </span> / mo
          </p>
          <p>{usersCount} users included </p>
          <p>{gb} GB of storage </p>
          <p> {support} support </p>
          <p>Help center access</p>
          <a
            href="#b"
            className={`btn ${
              title === "Free" ? "btn-outline-primary" : "btn-primary"
            }`}
          >
            {btnName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
