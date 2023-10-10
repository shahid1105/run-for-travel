import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FlightTab from './FlightTab/FlightTab';
import HotelTab from './HotelTab/HotelTab';
import TourTab from './TourTab/TourTab';

const MyTabsComponent = () => {
    return (
        <Tabs>
      <TabList>
        <Tab>Flight</Tab>
        <Tab>Hotel</Tab>
        <Tab>Tour</Tab>
      </TabList>

      <TabPanel>
        <FlightTab />
      </TabPanel>
      <TabPanel>
        <HotelTab />
      </TabPanel>
      <TabPanel>
        <TourTab />
      </TabPanel>
    </Tabs>
    );
};

export default MyTabsComponent;