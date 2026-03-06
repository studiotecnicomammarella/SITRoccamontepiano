ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:6708").setExtent([419436.254547, 4671927.537872, 437199.675020, 4685197.857872]);
var wms_layers = [];

var lyr_OpenStreetMap = new ol.layer.Tile({
            'title': 'Open Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a> &nbsp&nbsp ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        
var lyr_GoogleStrade = new ol.layer.Tile({
            'title': 'Google Strade',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a> &nbsp&nbsp ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
        
var lyr_GoogleSatellite = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a> &nbsp&nbsp ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
        
var lyr_GoogleIbrido = new ol.layer.Tile({
            'title': 'Google Ibrido',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
        

var lyr_Acque = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Acque',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "Acque",
    popuplayertitle: 'Acque',
    creationdate: '2026-03-06 15:04:58',
    interactive: false,
    style: style_Acque,
});
function load_Acque_data() {
    var format_Acque = new ol.format.GeoJSON();
    var features_Acque = format_Acque.readFeatures(json_Acque, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_Acque = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Acque.png"/><b>Acque</b>'
    });
    lyr_Acque.setSource(jsonSource_Acque);
    lyr_Acque.set(
    "title", '<img src="styles/legend/Acque.png"/>Acque'
    );
var featureCounter_Acque = 1;
jsonSource_Acque.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Acque++);
    feature.set("layerObject", lyr_Acque);
});        
jsonSource_Acque.addFeatures(features_Acque);
}

var lyr_Strade = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Strade',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "Strade",
    popuplayertitle: 'Strade',
    creationdate: '2026-03-06 15:04:58',
    interactive: false,
    style: style_Strade,
});
function load_Strade_data() {
    var format_Strade = new ol.format.GeoJSON();
    var features_Strade = format_Strade.readFeatures(json_Strade, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_Strade = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Strade.png"/><b>Strade</b>'
    });
    lyr_Strade.setSource(jsonSource_Strade);
    lyr_Strade.set(
    "title", '<img src="styles/legend/Strade.png"/>Strade'
    );
var featureCounter_Strade = 1;
jsonSource_Strade.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Strade++);
    feature.set("layerObject", lyr_Strade);
});        
jsonSource_Strade.addFeatures(features_Strade);
}

var lyr_Particelle = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Particelle',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "Particelle",
    popuplayertitle: 'Particelle',
    creationdate: '2026-03-06 15:04:58',
    interactive: true,
    style: style_Particelle,
});
function load_Particelle_data() {
    var format_Particelle = new ol.format.GeoJSON();
    var features_Particelle = format_Particelle.readFeatures(json_Particelle, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_Particelle = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Particelle.png"/><b>Particelle</b>'
    });
    lyr_Particelle.setSource(jsonSource_Particelle);
    lyr_Particelle.set(
    "title", '<img src="styles/legend/Particelle.png"/>Particelle'
    );
var featureCounter_Particelle = 1;
jsonSource_Particelle.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Particelle++);
    feature.set("layerObject", lyr_Particelle);
});        
jsonSource_Particelle.addFeatures(features_Particelle);
}

var lyr_Fabbricati = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Fabbricati',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "Fabbricati",
    popuplayertitle: 'Fabbricati',
    creationdate: '2026-03-06 15:04:58',
    interactive: true,
    style: style_Fabbricati,
});
function load_Fabbricati_data() {
    var format_Fabbricati = new ol.format.GeoJSON();
    var features_Fabbricati = format_Fabbricati.readFeatures(json_Fabbricati, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_Fabbricati = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Fabbricati.png"/><b>Fabbricati</b>'
    });
    lyr_Fabbricati.setSource(jsonSource_Fabbricati);
    lyr_Fabbricati.set(
    "title", '<img src="styles/legend/Fabbricati.png"/>Fabbricati'
    );
var featureCounter_Fabbricati = 1;
jsonSource_Fabbricati.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Fabbricati++);
    feature.set("layerObject", lyr_Fabbricati);
});        
jsonSource_Fabbricati.addFeatures(features_Fabbricati);
}

var lyr_NumeriParticelle = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> NumeriParticelle',
    source: new ol.source.Vector(),
maxResolution:0.7561205861110731,
 
    permalink: "NumeriParticelle",
    popuplayertitle: 'Numeri Particelle',
    creationdate: '2026-03-06 15:04:58',
    interactive: false,
    style: style_NumeriParticelle,
});
function load_NumeriParticelle_data() {
    var format_NumeriParticelle = new ol.format.GeoJSON();
    var features_NumeriParticelle = format_NumeriParticelle.readFeatures(json_NumeriParticelle, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_NumeriParticelle = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/NumeriParticelle.png"/><b>Numeri Particelle</b>'
    });
    lyr_NumeriParticelle.setSource(jsonSource_NumeriParticelle);
    lyr_NumeriParticelle.set(
    "title", '<img src="styles/legend/NumeriParticelle.png"/>Numeri Particelle'
    );
var featureCounter_NumeriParticelle = 1;
jsonSource_NumeriParticelle.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_NumeriParticelle++);
    feature.set("layerObject", lyr_NumeriParticelle);
});        
jsonSource_NumeriParticelle.addFeatures(features_NumeriParticelle);
}

var lyr_STRADARIO = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> STRADARIO',
    source: new ol.source.Vector(), 
    permalink: "STRADARIO",
    popuplayertitle: 'STRADARIO',
    creationdate: '2026-03-06 15:04:58',
    interactive: true,
    style: style_STRADARIO,
});
function load_STRADARIO_data() {
    var format_STRADARIO = new ol.format.GeoJSON();
    var features_STRADARIO = format_STRADARIO.readFeatures(json_STRADARIO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_STRADARIO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/STRADARIO.png"/><b>STRADARIO</b>'
    });
    lyr_STRADARIO.setSource(jsonSource_STRADARIO);
    lyr_STRADARIO.set(
    "title", '<img src="styles/legend/STRADARIO.png"/>STRADARIO'
    );
var featureCounter_STRADARIO = 1;
jsonSource_STRADARIO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_STRADARIO++);
    feature.set("layerObject", lyr_STRADARIO);
});        
jsonSource_STRADARIO.addFeatures(features_STRADARIO);
}

var lyr_CIVICI = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> CIVICI',
    source: new ol.source.Vector(),
maxResolution:5.600893230452393,
 
    permalink: "CIVICI",
    popuplayertitle: 'CIVICI',
    creationdate: '2026-03-06 15:04:58',
    interactive: true,
    style: style_CIVICI,
});
function load_CIVICI_data() {
    var format_CIVICI = new ol.format.GeoJSON();
    var features_CIVICI = format_CIVICI.readFeatures(json_CIVICI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_CIVICI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/CIVICI.png"/><b>CIVICI</b>'
    });
    lyr_CIVICI.setSource(jsonSource_CIVICI);
    lyr_CIVICI.set(
    "title", '<img src="styles/legend/CIVICI.png"/>CIVICI'
    );
var featureCounter_CIVICI = 1;
jsonSource_CIVICI.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CIVICI++);
    feature.set("layerObject", lyr_CIVICI);
});        
jsonSource_CIVICI.addFeatures(features_CIVICI);
}

var lyr_FogliCatastali = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FogliCatastali',
    source: new ol.source.Vector(),
maxResolution:28004.466152261964,
 minResolution:5.600893230452393,

    permalink: "FogliCatastali",
    popuplayertitle: 'Fogli Catastali',
    creationdate: '2026-03-06 15:04:58',
    interactive: false,
    style: style_FogliCatastali,
});
function load_FogliCatastali_data() {
    var format_FogliCatastali = new ol.format.GeoJSON();
    var features_FogliCatastali = format_FogliCatastali.readFeatures(json_FogliCatastali, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_FogliCatastali = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FogliCatastali.png"/><b>Fogli Catastali</b>'
    });
    lyr_FogliCatastali.setSource(jsonSource_FogliCatastali);
    lyr_FogliCatastali.set(
    "title", '<img src="styles/legend/FogliCatastali.png"/>Fogli Catastali'
    );
var featureCounter_FogliCatastali = 1;
jsonSource_FogliCatastali.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_FogliCatastali++);
    feature.set("layerObject", lyr_FogliCatastali);
});        
jsonSource_FogliCatastali.addFeatures(features_FogliCatastali);
}

var lyr_CONFINE_COMUNALE = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> CONFINE_COMUNALE',
    source: new ol.source.Vector(), 
    permalink: "CONFINE_COMUNALE",
    popuplayertitle: 'CONFINE_COMUNALE',
    creationdate: '2026-03-06 15:04:58',
    interactive: false,
    style: style_CONFINE_COMUNALE,
});
function load_CONFINE_COMUNALE_data() {
    var format_CONFINE_COMUNALE = new ol.format.GeoJSON();
    var features_CONFINE_COMUNALE = format_CONFINE_COMUNALE.readFeatures(json_CONFINE_COMUNALE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
    var jsonSource_CONFINE_COMUNALE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/CONFINE_COMUNALE.png"/><b>CONFINE_COMUNALE</b>'
    });
    lyr_CONFINE_COMUNALE.setSource(jsonSource_CONFINE_COMUNALE);
    lyr_CONFINE_COMUNALE.set(
    "title", '<img src="styles/legend/CONFINE_COMUNALE.png"/>CONFINE_COMUNALE'
    );
var featureCounter_CONFINE_COMUNALE = 1;
jsonSource_CONFINE_COMUNALE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CONFINE_COMUNALE++);
    feature.set("layerObject", lyr_CONFINE_COMUNALE);
});        
jsonSource_CONFINE_COMUNALE.addFeatures(features_CONFINE_COMUNALE);
}

// Funzione per caricare e aggiornare i layer uno alla volta
    // Array per i layer visibili/non visibili all'avvio (solo layer vettori e raster)
    var layersVisibleOnStart = [
        {layer: lyr_Acque, source: 'Acque'},{layer: lyr_Strade, source: 'Strade'},{layer: lyr_Particelle, source: 'Particelle'},{layer: lyr_Fabbricati, source: 'Fabbricati'},{layer: lyr_NumeriParticelle, source: 'NumeriParticelle'},{layer: lyr_STRADARIO, source: 'STRADARIO'},{layer: lyr_CIVICI, source: 'CIVICI'},{layer: lyr_FogliCatastali, source: 'FogliCatastali'},{layer: lyr_CONFINE_COMUNALE, source: 'CONFINE_COMUNALE'}
    ];
    var layersHiddenOnStart = [
        
    ];
    
// Funzione per ottenere il nome del progetto dall'URL
	function getProjectName() {
		const path = window.location.pathname; // Percorso completo del file
		const htmlIndex = path.lastIndexOf('.html'); // Trova la posizione di ".html"

		if (htmlIndex === -1) return 'default'; // Se non trova ".html", ritorna valore di fallback

		// Trova la barra "/" prima di ".html"
		const slashBeforeHtml = path.lastIndexOf('/', htmlIndex);
		if (slashBeforeHtml === -1) return 'default';

		// Calcola da dove iniziare a prendere i caratteri prima della barra
		const extractStart = slashBeforeHtml - 20;
		if (extractStart >= 0) {
			return path.substring(slashBeforeHtml - 20, slashBeforeHtml);
		} else if (slashBeforeHtml >= 15) {
			return path.substring(slashBeforeHtml - 15, slashBeforeHtml);
		} else if (slashBeforeHtml >= 10) {
			return path.substring(slashBeforeHtml - 10, slashBeforeHtml);
		} else {
			return 'default'; // Se troppo corto, ritorna "default"
		}
	}
    
    // Ottieni un database IndexedDB per i layer, aprilo una volta sola
	let dbInstance = null;
	async function getDatabaseForLayers(projectName) {
		if (dbInstance) return dbInstance; // già aperto
		dbInstance = await idb.openDB(`${projectName}_layerDataCache`, 1, {
			upgrade(db) {
				if (!db.objectStoreNames.contains('layers')) {
					db.createObjectStore('layers', { keyPath: 'key' });
				}
			},
		});
		return dbInstance;
	}

    // Salva i dati nel database IndexedDB con il nome del progetto
    async function saveLayerToIndexedDB(key, data) {
        const db = await getDatabaseForLayers(getProjectName());
        await db.put('layers', { key: `${key}`, value: data });
    }
    
    // Carica i dati dal database IndexedDB con il nome del progetto
    async function loadLayerFromIndexedDB(key) {
        const db = await getDatabaseForLayers(getProjectName());
        const rec = await db.get('layers', key);

        if (!rec) return null;

        // Verifica se è nel formato VECCHIO (salvato come stringa JSON)
        if (typeof rec.value === 'string') {
            try {
                // Cancella e riscrivi nel nuovo formato oggetto
                const parsed = JSON.parse(rec.value);
                await saveLayerToIndexedDB(key, parsed); // riscrive come oggetto
                return parsed;
            } catch (e) {
                console.warn(`[Cache] Il dato ${key} è corrotto o non compatibile. Verrà ignorato.`);
                await deleteLayerFromIndexedDB(key);
                return null;
            }
        }
        return rec.value;
    }

    // Salva un file JavaScript nella cache con il nome del progetto
    async function saveLayerFileToCache(projectName, fileName, dataObj, layerDate) {
	  // salvo l'oggetto JSON
	  await saveLayerToIndexedDB(
		`o_files_${projectName}_${fileName}`,
		{ json: dataObj, layerdate: layerDate }
	  );
	}

    // Carica un file JavaScript dalla cache con il nome del progetto
	async function loadLayerFileFromCache(projectName, fileName) {
	  // loadLayerFromIndexedDB ora restituisce già l'oggetto {json, layerdate}
	  const record = await loadLayerFromIndexedDB(`o_files_${projectName}_${fileName}`);
	  return record || null;
	}
	
	// Funzione per caricare il JSON source
    async function loadJSON(projectName, fileName, layerDate) {
        return new Promise((resolve, reject) => {
            // Carica il file dalla cache
            async function tryCache() {                
                const cachedFile = await loadLayerFileFromCache(projectName, fileName);
                if (cachedFile && cachedFile.layerdate === layerDate) {
					console.log(`[Cache] Load ${fileName} from ${projectName} cache - ${layerDate}`);
					// assegno direttamente la variabile JS
					const varName = `json_${fileName}`;
					window[varName] = cachedFile.json;       // <— oggetto già pronto
					resolve(fileName);
					return;
                } else if (cachedFile) {
                    console.log(`[Cache] Outdated cache for ${fileName} in ${projectName}. CachedDate=${cachedFile.layerdate}, NewDate=${layerDate}`);
                    tryLoad(`layers/${fileName}.js`);
                } else {
                    console.log(`[Cache] No cache for ${fileName} in ${projectName}. Downloading...`);
                    tryLoad(`layers/${fileName}.js`);
                }
            }
            tryCache();

            // Scarica il file dalla rete e salva nella cache
            let triedFallback = false;
            function tryLoad(src) {
                const script = document.createElement('script');
                script.src = src;
                script.onload = async () => {
                    const varName = `json_${fileName}`;
					const dataObj = window[varName];
					if (!dataObj) {
					  return reject(new Error(`Variabile ${varName} non trovata dopo il caricamento di ${src}`));
					}
					console.log(`[Network] Save ${fileName} to ${projectName} cache - ${layerDate}`);
					await saveLayerFileToCache(projectName, fileName, dataObj, layerDate);
					resolve(fileName);
                };
                document.head.appendChild(script);
            }                        
        });
    }
	
    // Carico i dati nei layer
    async function loadLayers() {
        try {
            const projectName = getProjectName();

            for (const { layer, source } of layersVisibleOnStart) {
                const layerDate = layer.get("creationdate");
                await loadJSON(projectName, source, layerDate); // Carica il file dalla cache o dalla rete
                window[`load_${source}_data`](); // Svolgo tutte le function load_ sopra
            }
    
            for (const { layer, source } of layersHiddenOnStart) {
                const layerDate = layer.get("creationdate");
                await loadJSON(projectName, source, layerDate); // Carica il file dalla cache o dalla rete
                window[`load_${source}_data`](); // Svolgo tutte le function load_ sopra
            }
    
            // Quando tutti i layer sono stati caricati e aggiornati, emetti 'layersLoaded'
            window.layersLoadedFlag = true;
            const layersLoaded = new Event('layersLoaded');
            document.dispatchEvent(layersLoaded);
        } catch (error) {
            console.error("Errore nel caricamento dei layer:", error);
            throw error;
        }
    }
    // Esegui il caricamento dei layer una volta che il DOM è pronto
    document.addEventListener("DOMContentLoaded", () => {
        loadLayers();  // Inizia il caricamento dei layer uno per volta
    });

var group_TOPONOMASTICA = new ol.layer.Group({
                                layers: [lyr_STRADARIO,lyr_CIVICI,],
                                openInLayerSwitcher: true,
                                title: 'TOPONOMASTICA'});
var group_CATASTALE = new ol.layer.Group({
                                layers: [lyr_Acque,lyr_Strade,lyr_Particelle,lyr_Fabbricati,lyr_NumeriParticelle,],
                                openInLayerSwitcher: false,
                                title: 'CATASTALE'});

lyr_OpenStreetMap.setVisible(false);lyr_GoogleStrade.setVisible(false);lyr_GoogleSatellite.setVisible(false);lyr_GoogleIbrido.setVisible(true);lyr_Acque.setVisible(true);lyr_Strade.setVisible(true);lyr_Particelle.setVisible(true);lyr_Fabbricati.setVisible(true);lyr_NumeriParticelle.setVisible(true);lyr_STRADARIO.setVisible(true);lyr_CIVICI.setVisible(true);lyr_FogliCatastali.setVisible(true);lyr_CONFINE_COMUNALE.setVisible(true);
var layersList = [lyr_OpenStreetMap,lyr_GoogleStrade,lyr_GoogleSatellite,lyr_GoogleIbrido,group_CATASTALE,group_TOPONOMASTICA,lyr_FogliCatastali,lyr_CONFINE_COMUNALE];
lyr_Acque.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_Strade.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_Particelle.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', 'CATASTO': 'CATASTO', });
lyr_Fabbricati.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_NumeriParticelle.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_STRADARIO.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'path': 'path', 'VIA': 'VIA', });
lyr_CIVICI.set('fieldAliases', {'fid': 'fid', 'CODICE_COMUNE': 'CODICE_COMUNE', 'PROGR_NAZIONALE': 'PROGR_NAZIONALE', 'PROGR_STRADA': 'PROGR_STRADA', 'CODICE_COMUNALE': 'CODICE_COMUNALE', 'PROGR_CIVICO': 'PROGR_CIVICO', 'SPECIFICITA': 'SPECIFICITA', 'SISTEMA_METRICO': 'SISTEMA_METRICO', 'PROGRESSIVO_SNC': 'PROGRESSIVO_SNC', 'SEZIONE_DI_CENSIMENTO': 'SEZIONE_DI_CENSIMENTO', 'NUM_INTERNI': 'NUM_INTERNI', 'ISOLATO': 'ISOLATO', 'CODICE_CIVICO_COMUNALE': 'CODICE_CIVICO_COMUNALE', 'NON_CONFORMITA': 'NON_CONFORMITA', 'COORDINATA_X': 'COORDINATA_X', 'COORDINATA_Y': 'COORDINATA_Y', 'COORDINATA_Z': 'COORDINATA_Z', 'FLAG_VALIDAZIONE': 'FLAG_VALIDAZIONE', 'METODO': 'METODO', 'DATA_VALIDITA_AMMINISTRATIVA': 'DATA_VALIDITA_AMMINISTRATIVA', 'field_22': 'field_22', 'VIA E CIVICO': 'VIA E CIVICO', });
lyr_FogliCatastali.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_CONFINE_COMUNALE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Acque.set('fieldImages', {'fid': '', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Strade.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Particelle.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'CATASTO': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Fabbricati.set('fieldImages', {'fid': '', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_NumeriParticelle.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_STRADARIO.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'path': 'TextEdit', 'VIA': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CIVICI.set('fieldImages', {'fid': 'TextEdit', 'CODICE_COMUNE': 'Hidden', 'PROGR_NAZIONALE': 'Hidden', 'PROGR_STRADA': 'Hidden', 'CODICE_COMUNALE': 'TextEdit', 'PROGR_CIVICO': 'Hidden', 'SPECIFICITA': 'TextEdit', 'SISTEMA_METRICO': 'TextEdit', 'PROGRESSIVO_SNC': 'Range', 'SEZIONE_DI_CENSIMENTO': 'Range', 'NUM_INTERNI': 'CheckBox', 'ISOLATO': 'TextEdit', 'CODICE_CIVICO_COMUNALE': 'TextEdit', 'NON_CONFORMITA': 'TextEdit', 'COORDINATA_X': 'TextEdit', 'COORDINATA_Y': 'TextEdit', 'COORDINATA_Z': 'Range', 'FLAG_VALIDAZIONE': 'CheckBox', 'METODO': 'Range', 'DATA_VALIDITA_AMMINISTRATIVA': 'TextEdit', 'field_22': 'TextEdit', 'VIA E CIVICO': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FogliCatastali.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CONFINE_COMUNALE.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Acque.set('fieldLabels', {'fid': 'no label', 'Codice_comune': 'no label', 'Foglio': 'no label', 'Mappale': 'no label', 'Allegato': 'no label', 'Sviluppo': 'no label', 'Htxt': 'no label', 'Rtxt': 'no label', 'Xtxt': 'no label', 'Ytxt': 'no label', });
lyr_Strade.set('fieldLabels', {'fid': 'no label', 'Codice_comune': 'no label', 'Foglio': 'no label', 'Mappale': 'no label', 'Allegato': 'no label', 'Sviluppo': 'no label', 'Htxt': 'no label', 'Rtxt': 'no label', 'Xtxt': 'no label', 'Ytxt': 'no label', });
lyr_Particelle.set('fieldLabels', {'fid': 'hidden field', 'Codice_comune': 'hidden field', 'Foglio': 'hidden field', 'Mappale': 'hidden field', 'Allegato': 'hidden field', 'Sviluppo': 'hidden field', 'Htxt': 'hidden field', 'Rtxt': 'hidden field', 'Xtxt': 'hidden field', 'Ytxt': 'hidden field', 'CATASTO': 'header label - always visible', });
lyr_Fabbricati.set('fieldLabels', {'fid': 'hidden field', 'Codice_comune': 'hidden field', 'Foglio': 'hidden field', 'Mappale': 'no label', 'Allegato': 'hidden field', 'Sviluppo': 'hidden field', 'Htxt': 'hidden field', 'Rtxt': 'hidden field', 'Xtxt': 'hidden field', 'Ytxt': 'hidden field', });
lyr_NumeriParticelle.set('fieldLabels', {'fid': 'hidden field', 'Codice_comune': 'hidden field', 'Foglio': 'hidden field', 'Mappale': 'hidden field', 'Allegato': 'hidden field', 'Sviluppo': 'hidden field', 'Htxt': 'hidden field', 'Rtxt': 'hidden field', 'Xtxt': 'hidden field', 'Ytxt': 'hidden field', });
lyr_STRADARIO.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'path': 'hidden field', 'VIA': 'no label', });
lyr_CIVICI.set('fieldLabels', {'fid': 'hidden field', 'CODICE_COMUNALE': 'hidden field', 'SPECIFICITA': 'hidden field', 'SISTEMA_METRICO': 'hidden field', 'PROGRESSIVO_SNC': 'hidden field', 'SEZIONE_DI_CENSIMENTO': 'header label - always visible', 'NUM_INTERNI': 'hidden field', 'ISOLATO': 'hidden field', 'CODICE_CIVICO_COMUNALE': 'hidden field', 'NON_CONFORMITA': 'hidden field', 'COORDINATA_X': 'no label', 'COORDINATA_Y': 'no label', 'COORDINATA_Z': 'no label', 'FLAG_VALIDAZIONE': 'hidden field', 'METODO': 'hidden field', 'DATA_VALIDITA_AMMINISTRATIVA': 'hidden field', 'field_22': 'hidden field', 'VIA E CIVICO': 'no label', });
lyr_FogliCatastali.set('fieldLabels', {'fid': 'no label', 'Codice_comune': 'no label', 'Foglio': 'no label', 'Mappale': 'no label', 'Allegato': 'no label', 'Sviluppo': 'no label', 'Htxt': 'no label', 'Rtxt': 'no label', 'Xtxt': 'no label', 'Ytxt': 'no label', });
lyr_CONFINE_COMUNALE.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
