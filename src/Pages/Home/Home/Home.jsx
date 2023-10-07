import Card from "../../../Component/Card/Card";
import TourCard from "../../../Component/TourCard/TourCard";
import Container from "../../Shared/Container/Container";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Container><Destination></Destination></Container>
            <Container><About></About></Container>
            <Card></Card>
            <TourCard></TourCard>
        </>
    );
};

export default Home;