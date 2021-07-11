import Card from "./Card";

const CardContainer = (props) => {
  return (
    <div className="card-container">
      <Card food="Pizza" calorie="55" />
      <Card food="Burger" calorie="100" />
      <Card food="Aalu roti" calorie="59" />
      <Card food="Dahi vada" calorie="37" />
      <Card food="Samosa" calorie="63" />
      <Card food="Jalebi" calorie="44" />
    </div>
  );
};

export default CardContainer;
