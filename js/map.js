var margin = {
	top: 10,
	right: 10,
	bottom: 10,
	left: 10
};

var poverty;

var width = window.innerWidth + margin.left - margin.right,
	height = window.innerHeight + margin.top - margin.bottom;


var svg = d3.select( "#map" )
	.append( "svg" )
	.attr( "width", 700 )
	.attr( "height", height );


var projection = d3.geo.conicEqualArea()
	.scale( 77423.06161113291 )
	.center( [ -73.92389357849065, 40.69483904240502 ] ) 
	.parallels( [ 40.496133987610385, 40.91553277650213 ] ) 
	.rotate( [ 73.92389357849065 ] ) 
	.translate( [ -66755.26684646154, -29714.320463485623 ] ); 

var path = d3.geo.path()
	.projection( projection );

queue()
	.defer( d3.json, "https://raw.githubusercontent.com/kvn219/nyu-adv-gis/gh-pages/NYC_School_Districts_I/data/nyc_school_districts.geojson" )
	.await( ready );


function ready( error, districts ) {
	console.log( districts );
	svg.append( "g" )
		.selectAll( "path" )
		.data( districts.features )
		.enter()
		.append( "path" )
		.attr( "d", path )
		.attr( "class", "district" )
		.on( "mouseover", function ( d ) {
			d3.select( "h2" )
				.text( d.properties.district );
            d3.select( "h3" )
				.text( d.properties.english_lan );
            d3.select( "h4" )
				.text( d.properties.poverty );
            d3.select( "h5" )
				.text( d.properties.disabilitie );
			d3.select( this )
				.attr( "class", "district hover" );
		} )
		.on( "mouseout", function ( d ) {
			d3.select( "h2" )
				.text( "District" );
            d3.select( "h3" )
				.text( "English" );
            d3.select( "h4" )
				.text( "Poverty" );
            d3.select( "h5" )
				.text( "Disability" );
			d3.select( this )
				.attr( "class", "district" );
		} );
}

$( "svg" )
	.css( {
		top: 350,
		left: 700,
		right: 700,
		position: 'absolute'
	} );