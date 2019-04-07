let arrayEstados = [
    {
        id: 0,
        condicion: 'Yucatán',   
    }
];

let arrayCiudades = [
    {
        id: 0,
        ciudad: 'Merida',
        latitud: '',
        longitud: ''
    },
    {
        id: 0,
        ciudad: 'Kanasín',
        latitud: '',
        longitud: ''
    },
    {
        id: 0,
        ciudad: 'Valladolid',
        latitud: '',
        longitud: ''
    },
    {
        id: 0,
        ciudad: 'Valladolid',
        latitud: '',
        longitud: ''
    },
    {
        id: 0,
        ciudad: 'Valladolid',
        latitud: '',
        longitud: ''
    },
    {
        id: 0,
        ciudad: 'Valladolid',
        latitud: '',
        longitud: ''
    }
];
/** INEGI */
var token = '9fe5d171-2e5f-4383-a05f-40e38dfdcea7';
var condicion = "yucatán";
var latitud = "21.028041";
var longitud = "-89.641045"; //21.028041, -89.641045
var metros = "1000";
var urlApiBusqueda = "http://www3.inegi.org.mx/sistemas/api/denue/v1/consulta/buscar/#condicion/#latitud,#longitud/#metros/#token";
var urlApiBusquedaTmp = urlApiBusqueda.replace('#condicion', condicion);
urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#latitud', latitud);
urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#longitud', longitud);
urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#metros', metros);
urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#token', token);

fetch(urlApiBusquedaTmp)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json)
        json.forEach(element => {

            switch(element.Estrato){
                case '0 a 5 personas':
                    console.log("BREAK!")
                break;
            }
            
            console.log(element);
        });
    })
