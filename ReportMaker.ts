import Map from "./Map";

class ReportMaker {
    protected map: Map;

    constructor(map: Map) {
        this.map = map;
    }

    printDetails(): void {
        for (const city in this.map.cityData) {
            console.log(`City: ${city}`);
            this.map.cityData[city].clinics.forEach(clinic => {
                console.log(`${clinic.name} - People In Lineup: ${clinic.waitlist.size()}`);
            });
        }
    }
}

export default ReportMaker