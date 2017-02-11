

  var coord = [];
  var totalDistanceTravelled = 0;

  function getGeoLocation () {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      if (coord.length > 3) {
        return coord;
      }
      var crd = pos.coords;
      //if (crd.length > 0){
        coord.push( {Latitude : crd.latitude,
        Longitude: crd.longitude} );
      //}



      //coord.push(coord);
      // console.log('Your current position is:');
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

    if (coord.length) {
    console.log(coord); 
    }

    setTimeout(function(){ getGeoLocation();  
      console.log (coord[coord.length -1]) 
      if (coord[coord.length -2] && coord[coord.length -1]) {
        totalDistanceTravelled += (distance(/*37.7632954, -122.4857721,*/ coord[coord.length -2].Latitude, coord[coord.length -2].Longitude, coord[coord.length -1].Latitude, coord[coord.length -1].Longitude));
        console.log(totalDistanceTravelled);  
      }
    }, 3000);
    //console.log(coord);
  }


  function distance(lat1,lon1,lat2,lon2) {
    var R = 6371; // miles (change this constant to get miles)
    var dLat = (lat2-lat1) * Math.PI / 180;
    var dLon = (lon2-lon1) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    //if (d>1) {
      return /*Math.round(d)*/ d/1.6;
    //} else if (d<=1) return Math.round(d*1000)+" meters";
    //var milesDistance = d/1.6;
    //return d;
  }


  // getGeoLocation();

  // (function(){
  //     // do some stuff
  //     setTimeout(getGeoLocation(), 1000);
  // })();

  getGeoLocation();

  // setTimeout(function(){ getGeoLocation(); }, 1000);

  // setTimeout(function(){ getGeoLocation();
  // console.log (coord) }, 3000);

  //setInterval(getGeoLocation(), 1000);

// var imageUrl = 'https://maps.googleapis.com/maps/api/staticmap?markers=color:red|' + locat[0] + ',' +locat[1]+  '&zoom=12&size=400x400&key=AIzaSyDij3hmLUQwFjcHinguhvLwujUGMyGaHgw';

// var SfGoogleMap = () => (
//   <img src= {imageUrl} />
//   );


var renderMap = () => (
  <img src='http://maps.googleapis.com/maps/api/staticmap?size=400x400&path=40.737102,-73.990318|40.749825,-73.987963|40.752946,-73.987384|40.755823,-73.986397&sensor=false' />
  );



ReactDom.render(<renderMap />, document.getElementById('app'));


