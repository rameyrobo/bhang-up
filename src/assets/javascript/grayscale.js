/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// create the back to top button
$('section').prepend('<a href="#" class="back-to-top">Back to Top</a>');

var amountScrolled = 300;

$(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});

$('a.back-to-top, a.simple-back-to-top').click(function() {
    $('body').animate({
        scrollTop: 0
    }, 'slow');
    return false;
});

// jQuery for Nav bar dropdown
$(document).ready(function(){
    $(".dropdown").click(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, false ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, false ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


// jQuery for Nav bar dropdown

(function($){
    $(document).ready(function(){
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation(); 
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    });
})(jQuery);


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var locations = [
['1 Love Beach Club','2753 E Broadway,',' Long Beach, CA 90803',33.7656122,-118.1594168,1],['1 Stop GG','14136 Brookhurst St,',' Garden Grove, CA 92843',33.757415,-117.9548203,3],
['3rd Coast Collective','604 S Harbor Blvd,',' Santa Ana, CA 92704',33.7393399,-117.9204549,4],
['419 Collective','716 S. Main St,',' Santa Ana, CA 92701',33.73874,-117.8678864,5],
['545 Collective','1236 E Edinger Ave,',' Santa Ana, CA',33.7266133,-117.8545582,6],
['5starMeds','3677 University Ave,',' San Diego, CA 92105',32.7495675,-117.1136537,7],
['7 Gram Collective','1820 E Garry Ave #118,',' Santa Ana, CA 92705',33.7041775,-117.8526109,8],
['700 Light Green Collective','700 S Euclid Ave,',' Anaheim, CA 92802',33.823682,-117.941112,9],
['705 BOGO','705 W 17th St,',' Santa Ana, CA',33.7602361,-117.8751956,10],['A1 Organics','10540 Victory Blvd,',' North Hollywood, CA 91606',34.1850683,-118.3607416,12],['AHHS','7828 Santa Monica Blvd,',' West Hollywood, 90046',34.090603,-118.3602417,14],
['Allegiance','Delivery,',' San Diego, CA 92121',32.8981142,-117.2029363,15],
['All Greens Delivery','Delivery,',' Irvine, Tustin, CA',33.7458511,-117.826166,16],
['Aloha Collective','1615 N French St #101 Santa Ana,',' CA 92701',33.759441,-117.8635768,17],
['Alondra Compassionate Caregivers','1715 E Alondra Blvd,',' Compton, CA 90221',33.8889076,-118.2033804,18],
['Alpha Medic','Delivery,',' San Diego, CA 92110',32.7975751,-117.2520675,19],
['Alternative Care OC','Tustin Delivery,',' Orange County, CA 92780',33.7372177,-117.8135579,20],
['Alternative Medical Center','5100 Lakershim Blvd Hollywood,',' CA 91601',34.1631187,-118.373266,21],
['Alternative Patient Care','Delivery,',' San Diego, CA',32.7800636,-117.1271876,22],
['American Collective','1823 E 17th St,',' Santa Ana, CA 92705',33.760203,-117.8415162,23],
['Anaheim Patient Care','1671 W Katella Ave,',' suite 135, Anaheim, CA 92802',33.8037185,-117.9402407,24],
['Anaheim Super Budz','292 N Wilshire Ave,',' suite 101, Anaheim, CA 92801',33.8346329,-117.934469,25],
['Apothecary Collective','15372 Dickens St,',' Sherman Oaks, CA',34.153066,-118.468741,26],
['Apple House','3232 Center St,',' Riverside, CA',34.0158506,-117.3448037,28],
['Ardvarks Co-Op','Delivery,',' West Los Angeles, CA 90019',34.182206,-118.637633,29],
['Avalon','1019 N Avalon Blvd,',' suite 102, Wilmington, CA',33.7835198,-118.2629221,30],
['Buddha Bar Collective','440 1/2 N La Cienega,',' West Hollywood, CA 90048',34.0792666,-118.3763855,31],
['Beach 420','Delivery,',' Oceanside, CA',33.1958696,-117.3794834,32],
['Beach Collective','Delivery,',' Orange County, CA',33.6906089,-117.917005,33],
['Bellflower Patient Group','19603 Clark Ave,',' Bellflower, CA',33.8690234,-118.133892,34],
['Best Meds','7140 University Ave,',' suite B, La Mesa, CA 91940',32.7552129,-117.0442192,35],
['Best Meds Express','Delivery,',' Orange County, CA',33.6906089,-117.917005,36],
['The Blue Bass','Delivery,',' San Clemente, CA',33.4269728,-117.6119925,37],
['Blue Bird Delivery','Delivery,',' Long Beach, Lake Forest, CA',33.6469661,-117.689218,38],
['Blue Yukon','Delivery,',' Huntington Beach, CA',33.6906089,-117.917005,39],
['BMC','1212 N Broadway,',' suite 151 Santa Ana, CA 92701',33.7548015,-117.8699531,40],
['BOGO N Bikinis','1238 E Edinger Ave,',' Santa Ana, CA 92704',33.7309614,-117.931093,41],
['PSA','1536 E Warner Ave,',' suite B, Santa Ana, CA 92705',33.715575,-117.847526,42],
['Bud Man','Delivery,',' Irvine, Tustin, CA',33.7458511,-117.826166,43],
['Buds & Roses','13047 Ventura Blvd,',' Studio City, CA 91604',34.1460208,-118.4176749,44],
['C.A.P.S','4050 Airport Center Dr,',' suite C, Palm Springs, CA 92264',33.8170155,-116.5025227,45],
['C.C Squared','3505 5th,',' San Diego, CA 92103',32.7416477,-117.1602069,46],
['Café Canna Cabana','72091 Woburn Court,',' Thousand Palms, CA',33.825716,-116.403855,47],
['Cali Bloom','Delivery,',' North County, CA',45.0438699,-78.517416,48],
['California Naturals','744 N La Brea Ave,',' West Hollywood, CA 90046',34.0848511,-118.3437261,49],
['California Herbal Remedies','5470 Valley Blvd,',' Los Angeles, CA 90032',34.0734019,-118.1637591,50],
['Cali Releaf','Delivery,',' Garden Grove, Orange, CA',33.6906089,-117.917005,51],
['Canna Beach Delivery','Delivery,',' South Bay, CA',37.78183,-122.420995,52],
['Choice OC','Delivery,',' Mission Viejo, CA',33.6000232,-117.6719953,53],
['Chronic Pain Releaf','218 San Diego St,',' Oceanside, CA 92058',33.20256,-117.369229,54],
['Clean Green','8388 Lincoln Blvd,',' Los Angeles, CA 90045',33.9616332,-118.4207371,55],
['Conoisseurs Club','631 S Santa Fe Ave,',' Vista, CA 92083',33.1956014,-117.2380687,56],
['Crown Collective SD','Delivery,',' Central San Diego, CA',32.715738,-117.1610838,57],
['Crown Patient Group','Delivery,',' Downtown San Diego, CA',32.7799859,-117.0103141,58],
['Da Bud Group','10867 Terraza Floracion,',' San Diego, CA 92127',33.0004842,-117.0975093,59],
['Daddys Pipes & Collective','14430 Ventura Blvd,',' Sherman Oaks, CA',34.1503829,-118.4470771,60],
['DC Collective','8053 Deering Ave,',' Los Angeles, CA 91304',34.216828,-118.59548,61],
['Delta Nine','7648 Van Nuys Blvd,',' Van Nuys, CA 91405',34.209865,-118.4483652,62],
['Desert Organics','19486 Newhall St,',' Palm Springs, CA',33.9067099,-116.549333,63],
['Downtown High Collective','1420 S Alameda St,',' Los Angeles, CA 90021',34.0249455,-118.2392087,64],
['Downtown Patient Collective','9106 Mission Blvd Riverside,',' CA 92509',34.0117858,-117.4819187,65],
['Divine Wellness Center','7246 Eton Ave,',' Conoga park, CA 91303',34.2024326,-118.5952479,66],
['Earth Green Mile','2769 E Florence,',' Huntington Park, CA',33.9739138,-118.2205082,67],
['Eden Therapy','6757 1/2 Santa Monica Blvd,',' Los Angeles, CA 90038',34.0910488,-118.3377576,68],
['Elevated Dreams Collective','413 W 17th St,',' suite 106, Santa Ana, CA 92706',33.7603609,-117.8718295,69],
['Emerald Care Collective','1820 E Garry Ave,',' suite 204, Santa Ana, CA 92705',33.7041775,-117.8526109,70],
['Emerald Care Delivery','Delivery,',' SoCal Delivery 92647',33.7222674,-118.0010421,71],['Fast N Friendly (Open Late)','Delivery,',' Westminster, Sunset Beach, CA',33.7207336,-118.0735739,73],
['Fire Department','1327 14th St,',' suite A, Santa Ana, CA 92705',33.758987,-117.8387131,74],
['Foothill Wellness Center','7132 Foothill Blvd,',' Tujunga, CA 91042',34.2479132,-118.2871584,75],
['Freedom Farmers','Delivery,',' San Diego, CA 92111',32.7975751,-117.2520675,76],['Get Concentrated','Delivery,',' Inland Empire Delivery',,,78],
['GGR','2000 Cotner,',' West Hollywood, CA 90025',34.040694,-118.4405131,79],
['Go Green Bear','5359 E Valley Blvd,',' Los Angeles, CA 90032',34.0747263,-118.1667696,80],
['Godfather Caregivers','15445 Ventura Blvd,',' #1, Sherman Oaks, CA',34.1547651,-118.4702956,81],
['Green Bear','1212 San Julian,',' Los Angeles, CA 90015',34.0339041,-118.2544747,82],
['Green Blossom','Delivery,',' Huntington Beach, CA',33.6906089,-117.917005,83],
['Green Cross of Torrance','1658 West Carson St,',' suite B, Torrance, CA 90501',33.831098,-118.3086093,84],['Green Kiss','6356 Vineland Ave,',' North Hollywood, CA 91206',34.1863153,-118.3698214,86],
['Green Life Express','Delivery,',' Lake Forest, Mission Viejo, CA',33.6000232,-117.6719953,87],
['Green Mile Collective','1823 E 17th St,',' # 123, Santa Ana, CA',33.760203,-117.8415162,88],
['Greener By Nature','11919 Wilshire Blvd,',' Los Angeles, CA 90025',34.0467646,-118.4646671,89],
['Greenly Online Collective','Delivery,',' Los Angeles, CA',34.182206,-118.637633,90],
['Green Valley Collective','10835 Magnolia Blvd,',' North Hollywood, CA 91601',34.165165,-118.367074,91],
['Greenway Healing Center','980 N Harbor Blvd,',' suite B, Santa Ana, CA 92703',33.7534267,-117.9211027,92],
['GTR Green Tree Remedy','8871 Katella Ave,',' Anaheim, CA 92804',33.803116,-117.9778753,93],
['Gold State CBD','1275 S Santa Fe,',' # 101, Vista, CA 92083',33.1870682,-117.2255381,94],
['Hai Collective','18401 Eddy St,',' Northridge, CA 91325',34.228201,-118.533872,95],
['HBCG','17416 Beach Blvd,',' Huntington Beach, CA',33.7094979,-117.9890015,96],
['Healing Tree Collective','3220 W Pendleton,',' Santa Ana, CA',33.715253,-117.913314,97],
['Higher Path','14080 Ventura Blvd,',' Sherman Oaks, CA 91423',34.1492147,-118.4398425,98],
['Hillhurst Meds','1757 Hillhurst Ave,',' Los Angeles, CA 90027',34.1029429,-118.2874272,99],
['High Mileage','Delivery,',' Long Beach, Orange County, CA',33.7174708,-117.8311428,100],
['Hollywood High Grade','7051 Santa Monica Blvd B,',' Los Angeles, CA 90038',34.0908853,-118.343108,101],
['Hollywood Hills Collective','Delivery,',' Hollywood, CA',34.0928092,-118.3286614,102],
['Home Garden Holistic','13490 Magnolia Ave,',' Corona, CA',33.8778526,-117.5199629,103],
['House Of OG','1435 W 1st St,',' # 201, Santa Ana, CA 92703',33.7457017,-117.8881167,104],
['Flash Buds','Delivery,',' Pacific Beach, CA',32.8024577,-117.2355851,105],
['House Of Kush','1558 N Waterman,',' suite D, San Bernardino, CA',34.1280851,-117.2790401,106],
['Huntington Park Collective','6306 Pacific Blvd,',' Huntington Park, CA',33.9832974,-118.2250141,107],
['Irie Life Delivery','Delivery,',' Lake Forest, Mission Viejo, CA',33.6000232,-117.6719953,108],
['Jade Lotus','Delivery,',' Santa Ana Downtown, CA',33.6906089,-117.917005,109],
['Just Quality Care','2708 Westminster Ave,',' # 120, Santa Ana, CA 92705',33.7766221,-117.9247254,110],
['Katella Patients Association','9774 Katella Ave,',' #202, Anaheim, CA 92804',33.802733,-117.9628613,111],
['Kali Buds','1605 W 1st St,',' suite B, Santa Ana, CA 92703',33.7456243,-117.8905631,112],
['Kellys Collective','8638 W Pico Blvd,',' Los Angeles, CA',34.0537589,-118.3799329,113],
['Kind Delivery','Delivery,',' Aliso Viejo, Laguna Beach, CA',33.5422475,-117.7831104,114],
['Kushism','7555 Woodley Ave,',' Van Nuys, CA 91406',34.2082171,-118.4838859,115],
['La Brea Compassionate Caregivers','735 N La Brea Ave,',' Los Angeles, CA 90038',34.0844706,-118.3443295,116],
['LA Fight Club','4520 S Broadway,',' Los Angeles, CA 90037',34.0022209,-118.2781563,117],
['LAX Compassionate Caregivers','8332 Lincoln Blvd,',' Los Angeles, CA 90045',33.9619254,-118.4207356,118],
['Light House','1800 E Garry Ave,',' #110, Santa Ana, CA 92705',33.7044406,-117.8531352,119],
['Live To Love','1651 E Edinger,',' Santa Ana, CA 92705',33.7270066,-117.8453917,120],
['Love & Spirit Collective','5056 Lankershim Blvd,',' North Hollywood, CA 91601',34.1623434,-118.3730569,121],
['Married To Jane','Delivery,',' Santa Fe Springs, CA',33.9472359,-118.0853451,122],
['Mary Janes Collective','4901 Melrose Ave,',' Los Angeles, CA 90029',34.0837419,-118.3070875,123],
['Mecca','5650 W Washington Blvd,',' Los Angeles, CA 90016',34.035377,-118.3669771,124],
['Med Men Collective','320 S Main St,',' Santa Ana, CA 92701',33.7427121,-117.8679232,125],
['Mission Blvd','5556 Mission Blvd,',' suite 101, Jurupa Valley, CA 92509',33.9962527,-117.4061743,126],
['MJ Inc','1092 N East St,',' San Bernardino, CA',34.0621702,-117.3332489,127],
['Mother Nature Remedy','22831 Ventura Blvd,',' Woodland Hills, CA',34.1659145,-118.624429,128],
['Mr Nice Guy','1126 S Los Angeles St,',' Los Angeles, CA 90015',34.0376503,-118.2575445,129],
['Mr Dabs Collective','1212 N Broadway,',' Suite 202, Santa Ana, CA 92701',33.7548015,-117.8699531,130],
['MSPA','1815 S Main St,',' Santa Ana, CA 92707',33.7240697,-117.8676412,131],
['Nature Element Group','Delivery,',' Garden Grove, CA',37.9906205,-121.2875764,132],
['NHAPA','810 E Dyer Rd,',' unit B, Santa Ana, CA',33.7067181,-117.8548964,133],
['Natures Remedies','Delivery,',' Central San Diego, CA',32.715738,-117.1610838,134],
['Natures Therapy','19737 Ventura Blvd,',' Woodland Hills, CA 91364',34.1728116,-118.5634489,135],
['NCPA','732 E Vista Way,',' suite D, Vista, CA 92084',33.2083326,-117.2361968,136],
['New Age Canna','853 N Porton St,',' Santa Ana, CA 92701',33.7534609,-117.8744455,137],
['NNCC','9021 Exposition Blvd,',' Los Angeles, CA 90034',34.0289001,-118.3926116,138],
['North Park Holistic Care','3450 El Cajon Blvd,',' San Diego, CA 92116',32.755557,-117.118843,139],
['Notorious BUD','12371 Haster St,',' suite 206, Garden Grove, CA 92840',33.78335,-117.906565,140],
['OC Connection','624 S Euclid,',' Anaheim, CA 92805',33.824361,-117.941123,141],
['OC Delivery','Delivery,',' Irvine, Tustin, CA',33.7458511,-117.826166,142],
['OCGA','2522 N Grand Ave,',' Santa Ana, CA',33.7710881,-117.8525766,143],
['OCOG','Delivery,',' Orange County, CA',33.6906089,-117.917005,144],
['OCPC','1921 Carnegie St 3H,',' Santa Ana, CA 92705',33.7107262,-117.8424331,145],
['One Ten Club','110 N Tustin Ave,',' Anaheim, CA 92805',33.8430929,-117.8329992,146],
['One Stop','Santa Ana,',' CA (Call For Address)',33.7455731,-117.8678338,147],
['Organacann Wellness Center','Delivery,',' Huntington Beach, CA',33.6906089,-117.917005,148],
['Organic Caregivers','2249 Westwood Blvd,',' Los Angeles, CA 90064',34.0430774,-118.4312205,149],
['Organic OC','Delivery,',' Aliso Viejo, CA',33.575,-117.725556,150],
['Organic Solutions','4765 E Ramon Rd,',' Palm Springs, CA 92264',33.8154929,-116.494823,151],
['Organic Treatment Center','1119 N Hudson,',' Los Angeles, CA 90038',34.0912823,-118.3325796,152],
['Organix Wellness Center','1640 East 1st St,',' unit D, Santa Ana, CA',33.7451517,-117.8456367,153],
['Patients Premium Collective','Delivery,',' Newport Beach, CA',33.6189101,-117.9289469,154],
['Park Boulevard Holistic Collective','3960 Park Blvd,',' San Diego, CA 92103',32.7496236,-117.1466015,155],
['Pats Legacy','Delivery,',' Dana Point, San Clemente, CA',33.4269728,-117.6119925,156],
['Fallbrook Delivery','Delivery,',' Fallbrook, CA',33.3764196,-117.2511466,157],
['Platinum Lounge','Delivery,',' Central San Diego, CA',32.715738,-117.1610838,158],
['Platinum RX Express','Delivery,',' East San Diego, CA',32.7975751,-117.2520675,159],
['Point Loma','Delivery,',' Downtown San Diego, CA',32.7799859,-117.0103141,160],
['Posh Wellness','1615 N French St,',' # 201, Santa Ana, CA 92701',33.759441,-117.8635768,161],['Quick Buds','Delivery,',' Newport Beach, CA',33.6189101,-117.9289469,163],
['Re-Up','1139 W 17th St,',' Santa Ana, CA 92706',33.76038,-117.88201,164],
['Reseda Discount Caregivers','18448 Oxnard St,',' Tarzana, CA 91356',34.179629,-118.534984,165],
['Riddlers Relief','11508 W Pico Blvd,',' Los Angeles, CA 90064',34.0336103,-118.4419844,166],
['Ridiculousness','1425 N Main St,',' Santa Ana, CA 92701',33.757728,-117.8673524,167],
['Rite Greens Delivery','Delivery,',' Santa Ana, CA',33.6906089,-117.917005,168],
['RX-C Collective','2642 Oceanside Blvd,',' Oceanside, CA 92054',33.2012995,-117.3432104,169],
['Santa Ana BOGO','320 S Main St,',' suite B, Santa Ana, CA 92701',33.7427121,-117.8679232,170],
['Santa Ana GMC Superstore','1823 E 17th St,',' #123, Santa Ana, CA 92705',33.760203,-117.8415162,171],
['Santa Ana Patients Assocation','1651 E Edinger,',' suite 104, Santa Ana, CA 92705',33.7270066,-117.8453917,172],
['SDOC','3823 Ingraham St,',' Ocean Beach, CA',32.789628,-117.237002,173],
['Second Story Collective','1820 E Garry Ave,',' # 221, Santa Ana, CA 92705',33.7041775,-117.8526109,174],
['Serenity ByZen','1918 S Main St,',' Santa Ana, CA 92704',33.7228445,-117.8681157,175],
['Skippy Hot Box','569 W 6th St San Pedro,',' CA 90731',33.738507,-118.289416,176],
['Sky High','419 W 17th St,',' Santa Ana, CA 92706',33.7602992,-117.8723013,177],
['So Cal Pure','Delivery,',' North San Diego, CA',32.7975751,-117.2520675,178],
['South Bay Greens','212 Broadway,',' suite B, Chula Vista, CA 91910',32.6408139,-117.0933392,179],
['South Coast Caregivers','1638 E 17th St,',' unit L, Santa Ana, CA 92705',33.7595508,-117.8442343,180],
['Southern California Collective','12583 Venice Blvd,',' Los Angeles, CA 90066',34.0026187,-118.4363511,181],
['Spectrum','3567 West 3rd St,',' Los Angeles, CA',34.0692769,-118.2936501,182],
['Strain 30 Collective','21627 Devonshire St,',' Chatsworth, CA 91311',34.2574809,-118.6013195,183],
    ['Sylmar Caregivers Inc. (Pre-ICO)','10919 W Randall St,',' Unit 1, Sun Valley, CA 91352',34.2393885,-118.3688086,185],
['Terra Meds','1638 E 17th St,',' unit C, Santa Ana, CA',33.7595508,-117.8442343,186],
['THC','4127 S Centinela Ave,',' Los Angeles, CA 90066',33.9962754,-118.4280744,187],
['The Clinic Patient Assocation','1805 Garry Ave,',' Santa Ana, CA 92707',33.7065631,-117.8836524,188],
['The Garden','1527 E 17th St,',' Unit A, Santa Ana, CA 92705',33.7599398,-117.846506,189],
['The Green Easy','8311 Beverly Blvd,',' Los Angeles, 90048',34.0763065,-118.3704792,190],
['The Green Fellas Clinic','10181 Westminster,',' #212, Garden Grove, CA 92843',33.760356,-117.9548377,191],
['The Higher Path','14080 Ventura Blvd,',' Sherman Oaks, CA 91423',34.1492147,-118.4398425,192],
['The Re-Up','20175 Kendall Dr,',' San bernardino, CA 92407',34.193294,-117.366043,193],
['The Shop','1020 Grand Ave,',' Pacific Beach, CA 92109',32.79591,-117.250824,194],
['TLC','1660 East 23rd St,',' Los Angeles, CA 90011',34.0158684,-118.2443831,195],
['Tustin Safe Access','14101 Yorba Linda,',' suite 204, Tustin, CA 92780',33.8439307,-117.8332829,196],
['Upland Patient Group','521 N Mountain Ave,',' suite G, Upland, CA',34.1001122,-117.671992,197],
['Varietys for Life','895 E Yorba Linda,',' suite 104, Placentia, CA 92870',33.8896317,-117.8486002,198],
['Venice Beach Care Center','410 Lincoln Blvd,',' Los Angeles, CA 90291',34.0008123,-118.4660974,199],
['Venice Medical Center','9636 Venice Blvd,',' suite A, Culver City, CA',34.0243044,-118.3964813,200],
['VFL Pre ICO','8122 Sepulveda Blvd,',' Panorama City, CA 91402',34.2187692,-118.4663926,201],
['VIP Collective','14434 Gilmore St,',' Van Nuys, CA 91401',34.1875113,-118.4477885,202],
['VIP Meds','9612 Dale Ave,',' Spring Valley, CA 91977',32.7458736,-116.9901779,203],
['Wax City','1820 E Garry Ave,',' suite 203, Santa Ana, CA 92705',33.7041775,-117.8526109,204],
['Waxoholics','1435 W 1st St,',' Santa Ana, CA 92703',33.7457017,-117.8881167,205],
['Wax On Wax','2550 N Grand Ave,',' Santa Ana, CA 92705',33.7713802,-117.8527439,206],
['WEED','11557 Ventura Blvd,',' Studio City, CA 91604',34.1403471,-118.3837512,207],
['West Well','811 W 15th St #2C,',' Newport, CA 92663',33.628491,-117.9323436,208],
['Whittier Hot Box','13261 Imperial Hwy,',' Whittier, CA',33.9174453,-118.0489905,209],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(33.7656122,-118.1594168),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][3], locations[i][4]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0] + '<br><br>' + locations[i][1] + '<br>' + locations[i][2]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

    
   
    
}

