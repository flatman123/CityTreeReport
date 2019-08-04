// ES6 version

const brooklyn = new Map();

brooklyn.set('Prospect Park',{
	trees:60,
	year:1988,
	parkArea: 100,
	streets: {
		street1: ['Flatbush Ave', 1888],
		street2: ['Caton Ave', 1777],
		street3: ['Church Ave', 1874]
	}
});

brooklyn.set('GroverClevland Park', {
	trees:32,
	year: 1930,
	parkArea: 1021,
	streets: {
		street1: ['Green Street', 1812],
		street2: ['Stone Ave', 1984],
		street3: ['Auburn Road', 1988]
	}
});

brooklyn.set('DR Park', {
	trees: 40, 
	year:1960,
	parkArea: 200,
	streets: {
		street1: ['Flatland Ave',1545],
		street2: ['Renson Ave', 1455],
		street3: ['Avenue U', 1744]
	}
});

class CompileYearReport {
	constructor (parkName, reportName, reportID) {
		this.parkName = parkName;
		this.reportName = reportName;
		this.reportID = Math.floor(Math.random() * 999);
	}

	calcDensity() {		
		let numOfTrees, parkArea, street;
		numOfTrees = brooklyn.get(this.parkName).trees;
		parkArea = brooklyn.get(this.parkName).parkArea;
		this.treeDensity = numOfTrees / parkArea;
		
		console.log(`${this.parkName} has a tree density of ${this.treeDensity}.`)
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


	}

	averageLength() {

	}
}

class PrintOutYearReport extends CompileYearReport {
	constructor(parkName, reportName, reportID) {
		super(parkName, reportName, reportID);
	}
}
const ProspectPark1 = new PrintOutYearReport('Prospect Park','Prospect.P_2019_Report');
const ProspectPark2 = new PrintOutYearReport('Prospect Park','Prospect.P_2019_Report');