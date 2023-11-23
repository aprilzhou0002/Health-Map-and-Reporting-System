import * as data from './data.json';
import Map from './Map';
import Queue from './Queue';
import ReportMaker from './ReportMaker';
import ComplexReport from './ComplexReport';

declare global{
  type Inhabitant = {
    phn: string;
    fullName: string;
    isVaccinated: boolean;
    age: number;
};

type Household = {
    blockNum: number;
    inhabitants: Inhabitant[];
};

type Clinic = {
  name: string;
  blockNum: number;
  staff: number;
  waitlist: Queue;
};

type CityData = {
    households: Household[];
    clinics: Clinic[];
};

type MapData = {
    city: {
        [cityName: string]: CityData;
    };
};
}

async function main() {
    const map = new Map(data);
    await map.printMap();
    console.log("---End of Map---")
    const currentIntakeAge = 30; 
    map.registerForShots(currentIntakeAge);

    // For a simple report
    const simpleReport = new ReportMaker(map);
    simpleReport.printDetails();

    // For a complex report
    const complexReport = new ComplexReport(map);
    complexReport.printDetails();

    console.log("---End of Report---")
    map.printMap();
    console.log("---End of Map---")
  }
  
main();