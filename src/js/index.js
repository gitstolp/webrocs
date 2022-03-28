import 'ol/ol.css';
import KML from 'ol/format/KML';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import {useGeographic} from 'ol/proj';
import TileWMS from 'ol/source/TileWMS';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';

const GMRT = new TileLayer({
  source: new TileWMS({  
    url:'https://www.gmrt.org/services/mapserver/wms_merc?request=GetCapabilities&service=WMS&version=1.3.0',
    params: {'LAYERS' : 'GMRT'},
  }),
});

var vector = new VectorLayer({
  source: new VectorSource ({
    url: 'xaTracks.kml',
    format: new KML(),
  }),
});

useGeographic();

var frame = new View({
	center: [29.221, 40.843],
	zoom: 10,
});

const map = new Map({
  layers: [GMRT, vector],
  target: document.getElementById('map'),
  view: frame,
  });


