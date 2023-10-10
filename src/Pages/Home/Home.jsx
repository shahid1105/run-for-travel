import Card from "../../Component/Card/Card";
import TourCard from "../../Component/TourCard/TourCard";
import Banner from "./Banner/Banner";
import Destination from "./Destination/Destination";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Destination></Destination>
            <Card></Card>
            <TourCard></TourCard>
        </>
    );
};

export default Home;