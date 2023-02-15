import Banner from "../components/Banner";
import { SectionListItems } from "../components/SectionListItems";

const HomePage = () => {
    return (
        <>
            <Banner />
            <SectionListItems id='1' order={1}/>
            <SectionListItems id='2' order={2}/>
        </>
    );
}

export default HomePage;