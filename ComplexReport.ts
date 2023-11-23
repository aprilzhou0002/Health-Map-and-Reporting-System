import Map from "./Map";
import ReportMaker from "./ReportMaker";

class ComplexReport extends ReportMaker {
    constructor(map: Map) {
        super(map);
    }

    printDetails(): void {
        super.printDetails(); 
        console.log("Additional Details for Complex Report:");
        for (const city in this.map.cityData) {
            this.map.cityData[city].clinics.forEach(clinic => {
                console.log(`Average Wait Time at ${clinic.name}: ${clinic.waitlist.getCurrentWaitTime()} minutes`);
            });
        }
    }
}

export default ComplexReport;