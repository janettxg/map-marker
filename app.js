function initMap(){
    // Map options
    var options = {
        zoom: 8,
        center:{lat:38.9072,lng:-77.0369}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', 
    function(event){
        // Add marker
        addMarker({coords:event.latLng});

    });

    /*

    // Add marker
     var marker = new google.maps.Marker({
        position:{lat:38.9187,lng:-77.2311},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
     });
     
     var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Tysons Corner, VA</h1>'
     })

     marker.addListener('click', function(){
         infoWindow.open(map, marker);
     });

     */

     // Array of Markers
     var markers = [
        {
            coords:{lat:38.9187,lng:-77.2311},
            iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content:'<h1>Tysons Corner, VA</h1>'
        },
        {
        coords:{lat:38.8816,lng:-77.0910},
        content:'<h1>Arlington, VA</h1>'
        },
        {
        coords:{lat:39.0438,lng:-77.4874}
        }
     ];
        
        // Loop through Markers
        for(var i = 0;i < markers.length;i++){
            // Add marker
            addMarker(markers[i]);
        }


     //Add Marker Function
    function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        //icon:props.iconImage
     });   

     //Check for customicon
     if(props.iconImage){ 
         //Set icon image
        marker.setIcon(props.iconImage);
     }

     // Check content
     if(props.content){
        var infoWindow = new google.maps.InfoWindow({
        content:props.content
     });

     marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
}
}