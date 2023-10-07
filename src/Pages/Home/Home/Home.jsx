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
        </>
    );
};

export default Home;