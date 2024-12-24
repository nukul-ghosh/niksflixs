import Itemsrelay from "./Itemsrelay";
import Hero from "./Hero";

function Listing() {
    return (
        <div className="listing">
            <Hero />
            <Itemsrelay />
            <p>This is the main listing comp</p>
        </div>
    )
}

export default Listing;