import Queue from './Queue';

class Map {
    private _mapData: MapData;

    constructor(data: any) {
        this._mapData = this.transformData(data);
    }

    get cityData(): { [cityName: string]: CityData } {
        return this._mapData.city;
    }

    private transformData(data: any): MapData {
        const transformedData: MapData = { city: {} };

        for (const city in data.city) {
            const cityData = data.city[city];
            transformedData.city[city] = {
                households: cityData.households,
                clinics: cityData.clinics.map((clinic: any) => ({
                    ...clinic,
                    waitlist: new Queue()
                }))
            };
        }

        return transformedData;
    }

    printMap(): void {
        if (!this._mapData) {
            console.log('Data not loaded yet');
            return;
        }

        const mapRepresentation: string[] = [];

        for (const city in this._mapData.city) {
            const cityData = this._mapData.city[city];
            const cityMap = new Array(6).fill('x'); // Assuming a maximum of 6 blocks

            cityData.households.forEach(household => {
                const symbol = household.inhabitants.some(inhabitant => !inhabitant.isVaccinated) ? 'H' : 'F';
                cityMap[household.blockNum] = symbol;
            });

            cityData.clinics.forEach(clinic => {
                cityMap[clinic.blockNum] = 'C';
            });

            mapRepresentation.push(cityMap.join(',') + ` // ${city}`);
        }

        console.log(mapRepresentation.join('\n'));
    }

    registerForShots(currentIntakeAge: number): void {
        if (!this._mapData) {
            console.log('Data not loaded or is empty');
            return;
        }

        for (const city in this._mapData.city) {
            const cityData = this._mapData.city[city];

            cityData.households.forEach(household => {
                household.inhabitants.forEach(inhabitant => {
                    if (!inhabitant.isVaccinated && inhabitant.age >= currentIntakeAge) {
                        const nearestClinic = this.findNearestClinic(cityData.clinics, household.blockNum);
                        if (nearestClinic) {
                            nearestClinic.waitlist.enqueue(inhabitant);
                            inhabitant.isVaccinated = true;
                        }
                    }
                });
            });
        }
    }

    private findNearestClinic(clinics: Clinic[], householdBlock: number): Clinic | undefined {
        return clinics.reduce((nearest, clinic) => {
            return (!nearest || Math.abs(clinic.blockNum - householdBlock) < Math.abs(nearest.blockNum - householdBlock)) ? clinic : nearest;
        }, undefined as Clinic | undefined);
    }
}

export default Map;
