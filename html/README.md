WEBROCS openlayers trackline project

--general use--
This project can be used to plot a KML file over the GMRT basemap (gmrt.org), which is a multi-resolutional map based on 
topological data on both land and in the sea.

Add coordinates to existing KML or add a different one and change the path in ./src/js/index.js

use command "npx webpack" to finalize any changes made to index.js, and restart apache if is being used in external projects.

NOTE: VectorLayer will NOT plot over GMRT map if there are any null or non number values (NaN) provided as coordinates.


--node notes--

"npm ls" can be used withing html directory to see a list of node dependancies, which may need to be updated in the future as I do not intend to keep this 
project up to date.

--webserver notes--

I experienced some issues attempting to acess the KML file when using apache due to CORS policy.

To remediate this add 
-
Header set Acess-Control-Allow-Origin "*"
in apache configuration fine (/etc/apache2/apache2.conf)
under <Directory /var/www> line


Author: Griffin Stolp "gitstolp"
Email: griffin.stolp@mma.edu
