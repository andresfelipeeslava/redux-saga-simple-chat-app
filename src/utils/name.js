import Chance from "chance";

const chance = new Chance();
const name = `${chance.first()} ${chance.last({ nationality: "es" })}`;

export default name;
