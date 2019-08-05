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
		});

		brooklyn.set('GroverClevland Park', {
			trees:700,
			year: 1930,
			parkArea: 1021,
		});

		brooklyn.set('DR Park', {
			trees: 3000, 
			year:1960,
			parkArea: 200,
		});

		brooklyn.set('Streets', {
				street1: ['Flatland Ave',1545, 25],
				street2: ['Renson Ave', 1455, 15],
				street3: ['Avenue U', 1744, 20],
				street3: ['Avenue Z', 1944, 77]
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
			prospectYear: brooklyn.get('Prospect Park').year,
			groveYear: brooklyn.get('GroverClevland Park').year,
			drParkYear: brooklyn.get('DR Park').year,
			numOfParks: brooklyn.size,
			parks: brooklyn.entries()
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
			parkAge1: currentYear.getFullYear() - this.mappings().prospectYear,
			parkAge2: currentYear.getFullYear() - this.mappings().groveYear,
			parkAge3: currentYear.getFullYear() - this.mappings().drParkYear
		}
	}

	printAverageAgeOfParks() {
		let averageAge, treeAge;

		averageAge = Math.floor(
			(this.getTreeAge().parkAge1 +
			 this.getTreeAge().parkAge2 +
			  this.getTreeAge().parkAge2) /
			   this.mappings().numOfParks);

		console.log(`Our ${this.mappings().numOfParks} parks have an average age of ${averageAge} years.`);
	}

	greaterThanOneThousand() {
		for (let park of this.mappings().parks) {
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

class PrintOutYearReport extends CompileYearReport {
	constructor(parkName, reportName, reportID) {
		super(reportName, reportID);

		console.log(`-----2019 PARKS REPRORT ID#${this.reportID}-----`);
		this.printAverageAgeOfParks();
		this.calcDensity();		
		this.greaterThanOneThousand();

		console.log(`-----2019 STREETS REPORT #${this.reportID}------`)
	}

};

const ProspectPark = new PrintOutYearReport('Tree_Re_2019_Report');

