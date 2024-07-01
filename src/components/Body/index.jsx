import Typer from "../utilities/Typer";
import Card from "../utilities/card";

const Body = () => {
    const kata =['Hello!','Welcome To','My Website', 'InFarm :)'];

    return (
        <div className="w-full h-screen">
            <Typer words={kata}/>
            <Card />
        </div>
    )
}

export default Body;