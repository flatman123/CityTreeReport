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
	trees:20,
	year:1988,
	parkArea: 5001,
	streets: {

		street1: ['Flatbush Ave', 1888],
		street2: ['Caton Ave', 1777],
		street3: ['Church Ave', 1874]
	}

});

brooklyn.set('GroverClevland Park', {
	trees:15,
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
	parkArea: 811,
	streets: {

		street1: ['Flatland Ave',1545],
		street2: ['Renson Ave', 1455],
		street3: ['Avenue U', 1744]
	}
});


class CompileYearReport {
	constructor (parkName) {
		this.parkName = parkName;
	}

	calcDensity() {
		let numOfTrees, parkArea, street;

		numOfTrees = brooklyn.get(this.parkName).trees;
		parkArea = brooklyn.get(this.parkName).parkArea;
		this.treeDensity = numOfTrees / parkArea;
		
		console.log(`${this.parkName} has a tree density of ${this.treeDensity}.`)
	}

	printAverageAgeOfParks() {
		let park1, park2, park3;

		park1 = brooklyn.get('Prospect Park').year;
		park2 = brooklyn.get('GroverClevland Park').year;
		park3 = brooklyn.get('DR Park').year;


		let averageAge = (park1 + park2 + park3) / brooklyn.size;

		console.log(`Our ${brooklyn.size} has an average of ${averageAge} years.`);

	}

	greaterThanOneThousand() {

	}

	averageLength() {

	}
}


class PrintOutYearReport {
	constructor (reportName);

}



const ProspectPark = new CompileYearReport('Prospect.P_2019_Report','Prospect Park');