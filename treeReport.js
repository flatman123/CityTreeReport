// ES6 version



class CompileYearReport {
	constructor (parkName, reportName, reportID) {
		this.parkName = parkName;
		this.reportName = reportName;
		this.reportID = Math.floor(Math.random() * 999);
	}

	mappings() {		
		let prospectTrees, groverTress, drTrees, prospectPArea, groveArea, drArea;

		const brooklyn = new Map();

		brooklyn.set('Prospect Park',{
			trees:254,
			year:1988,
			parkArea: 100,
			streets: {
				street1: ['Flatbush Ave', 1888, 14],
				street2: ['Caton Ave', 1777, 66],
				street3: ['Church Ave', 1874, 45]
			}
		});

		brooklyn.set('GroverClevland Park', {
			trees:700,
			year: 1930,
			parkArea: 1021,
			streets: {
				street1: ['Green Street', 1812, 5],
				street2: ['Stone Ave', 1984, 10],
				street3: ['Auburn Road', 1988, 10]
			}
		});

		brooklyn.set('DR Park', {
			trees: 3000, 
			year:1960,
			parkArea: 200,
			streets: {
				street1: ['Flatland Ave',1545, 25],
				street2: ['Renson Ave', 1455, 15],
				street3: ['Avenue U', 1744, 20]
			}
		});

		prospectTrees = brooklyn.get('Prospect Park').trees;
		groverTress = brooklyn.get('GroverClevland Park').trees;
		drTrees = brooklyn.get('DR Park').trees;
		prospectPArea = brooklyn.get('Prospect Park').parkArea;
		groveArea = brooklyn.get('GroverClevland Park').parkArea;
		drArea = brooklyn.get('DR Park').parkArea;

		return {
			
			prospectPark: 'Prospect Park',
			groverClev: 'GroverClevland Park',
			drPark: 'DR Park',
			prospectDensity: prospectTrees / prospectPArea,
			groveDensity: groverTress / groveArea,
			drDensity: drTrees / drArea,
		}
	}

	calcDensity() {
		console.log(`${this.mappings().prospectPark} has a tree density of ${this.mappings().prospectDensity}`);
		console.log(`${this.mappings().groverClev} has a tree density of ${this.mappings().groveDensity}`);
		console.log(`${this.mappings().drPark} has a tree density of ${this.mappings().drDensity}`);
	}		

	getTreeAge() {
		let currentYear, age1, age2, age3;
		currentYear = new Date();
		return {
			parkAge1: currentYear.getFullYear() - brooklyn.get('Prospect Park').year,
			parkAge2: currentYear.getFullYear() - brooklyn.get('GroverClevland Park').year,
			parkAge3: currentYear.getFullYear() - brooklyn.get('DR Park').year
		}
	}

	printAverageAgeOfParks() {
		let averageAge, treeAge;
		averageAge = Math.floor((this.getTreeAge().parkAge1 + this.getTreeAge().parkAge2 + this.getTreeAge().parkAge2) / brooklyn.size);
		console.log(`Our ${brooklyn.size} parks have an average age of ${averageAge} years.`);
	}

	greaterThanOneThousand() {
		for (let park of brooklyn.entries()) {
			if (park[1].trees > 1000){
				console.log(`Hey guess what? ${park[0]} has over 1000 trees!`);
			}
		}
	}

	streetLength() {

	}

	streetClassification(sizeDefault='normal'){

	}
}

(class PrintOutYearReport extends CompileYearReport {
	constructor(parkName, reportName, reportID) {
		super(reportName, reportID);

		console.log(`-----2019 PARKS REPRORT ID#${this.reportID}-----`);
		this.printAverageAgeOfParks();
		this.calcDensity();		
		this.greaterThanOneThousand();

		console.log(`-----2019 STREETS REPORT #${this.reportID}------`)
	}
})();


const ProspectPark = new PrintOutYearReport('Tree_Re_2019_Report');
