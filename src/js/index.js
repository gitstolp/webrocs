import 'ol/ol.css';
import KML from 'ol/format/KML';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import Feature from 'ol/Feature';
import {useGeographic} from 'ol/proj';
import TileWMS from 'ol/source/TileWMS';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';

const GMRT = new TileLayer({
  source: new TileWMS({  
    url:'https://www.gmrt.org/services/mapserver/wms_merc?request=GetCapabilities&service=WMS&version=1.3.0',
    params: {'LAYERS' : 'GMRT'},
  }),
});

const xaTracks = new KML();

const trackLine = new VectorSource ({
	url: 'xaTracks.kml',
	format: xaTracks,
});

var vector = new VectorLayer({
  source: trackLine,
  
});

useGeographic();

var frame = new View({
	center: [29.221, 40.843],
	zoom: 10,
});

var map = new Map({
  layers: [GMRT, vector],
  target: document.getElementById('map'),
  view: frame,
  });


