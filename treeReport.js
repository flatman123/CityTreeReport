/* Suppose That you're working in a small town administration, and you in charge of 
two elements:

1. Parks
2 Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks have streets
have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:

1. tree density of each park in the town ( formula: number of trees/park area)

2. Average age of each town's park (formula: sum of all ages/number of parks);

3. The name of the park that has more thnan 1000 trees

4. total and average length of the towns's streets.

5 Size classification of all streets: tiny/small/normal/big/huge/ If the size is unknown,
then the default is normal.

Report should be printed to console.*/

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