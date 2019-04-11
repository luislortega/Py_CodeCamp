# IDEA:

Construir un modelo estadístico que explique el crecimiento económico a nivel entidad federativa en México.

Nuestra propuesta da una solucion a la problematica de medir el crecimiento de las ciudades en Mexico, lo hara de dos maneras: Medira el crecimiento poblacional y el crecimiento economico de la ciudad.

Para medir el crecimiento poblacional lo primero que se debe tomar en cuenta es la separacion territorial en todo el pais, para eso utilizaremos datos abiertos sobre la distribucion territorial en Mexico de la CONAPO para almacenar todas las ciudades de Mexico en nuestra base de datos, utilizando informacion de la INEGI sobre la poblacion total en Mexico por entidad federativa sera almacenada la cantidad base de poblacion en cada estado, es importante tomar en cuenta que la INEGI no actualiaza estos datos desde el 2017 pero nos proporciona informacion de años anteriores, en base a esos datos  se hara un sistema estadistico que nos dira las aproximaciones poblacionales por ciudad en todo Mexico del 2018 y 2019.

para medir datos sobre el crecimiento economico lo haremos mediante la inversion que hace el es

¿Que tengo hasta ahora?
- Division por territorios en Mexico
- Poblacion y crecimiento poblacional en las ciudades y estados
- Valor agregado por entidad federativa y clasificacion por actividad economica 
- Numero de empresas por entidad federativa | clasificacion por actividad economica |

URLs:
- API SAT:https://www.siat.sat.gob.mx
- Microregiones SEDESOL: http://www.microrregiones.gob.mx/catloc/LocdeMun.aspx?ent=06&mun=007
- Poblacion por entidad federativa: https://www.inegi.org.mx/temas/estructura/default.html#Informacion_general
- Producto interno bruto por entidad federativa: https://www.inegi.org.mx/programas/pibent/2013/default.html#Metadatos
- Listado de negocios en Mexico: https://www.inegi.org.mx/servicios/api_denue.html
- Distribucion territorial en Mexico: https://datos.gob.mx/busca/organization/conapo
- Datos abiertos de SAT: http://omawww.sat.gob.mx/cifras_sat/Paginas/inicio.html
- Datos abiertos de Banxico: http://www.banxico.org.mx/SieInternet/
- API Conexiones de Banxico: http://www.banxico.org.mx/monspei/#todos
- Nacimientos ocurridos en Mexico: https://www.inegi.org.mx/temas/natalidad/
- Hacienda: https://datos.gob.mx/busca/dataset?organization=shcp&tags=economia
- Consultas por RFC: https://www.sat.gob.mx/aplicacion/operacion/29073/verifica-si-estas-registrado-en-el-rfc

# Entidades de informacion:

* Poblacion total en Mexico por entidad federativa

NOTA: esta informacion esta actualizada hasta el 2015, con la cantidad de datos ques e nos proporciona por INEGI se puede hacer un modelo de probabilidad y estadistica que predecira la cantidad de poblacion en los años posteriores. El periodo de 2016 a 2019 sera comparado con datos oficiales para medir el porcentaje de fiabilidad.

* Informacion de la INEGI del valor agregado de cada estado en Mexico por tipo de actividad economica. Ejemplo: ganaderia, pescadera, mineria, etc. en base al 2013, eso quiere decir que nos proporciona metadatos desde el 2013 hasta el 2017

para obtener los metadatos de periodo 2017-2019 utilizaremos la API de SAT con el API DENUE de INEGI que nos proporcionara un listado de todos los negocios en cada ciudad de Mexico, separados de igual manera por tipo de actividad eocnomica.

¿Por que haremos la combinacion de estas dos entidades de informacion? el API DENUE esta actualizado hasta noviembre del 2018, por lo que concatenaremos la lista de empresas registradas al SAT y eliminara las que ya no se encuentren como entidad activa, por el contrario si encuentra una nueva entidad activa la añadira como negocio de esta manera tendremos la cantidad de negocios en cada ciudad durante el periodo 2017 hasta la actualidad.

los datos abierots de CONAPO nos permitira hacer un

* Informacion publica con el API del SAT
Filtraremos la cantidad de negocios por CIUDAD cada 


* Informacion publica compartida entre la entidades financiaras al Banco de Mexico. 
Mediremos la cantidad de dinero en cuentas de ahorros de todos los bancos en cada ciudad con los datos proporcionados por el BANXICO en el periodo del 2017-2019

Informacion complementaria de Banxico:

Informacion del api monspei que actualiza en tiempo real:

lista de conexiones disponibles actualizadas diarias:
ABC CAPITAL	
ACCENDO BANCO	
ACCIVAL	
ACTINVER	
AFIRME	
AKALA	
AMERICAN EXPRES	
ASEA	
ASP INTEGRA OPC	
AUTOFIN	
AXA	
AZTECA	
BAJIO	
BANAMEX	
BANCO FAMSA	
BANCO FINTERRA	
BANCO S3	
BANCOMEXT	
BANCOPPEL	
BANCREA	
BANJERCITO	
BANK OF AMERICA	
BANKAOOL	
BANOBRAS	
BANORTE/IXE	
BANREGIO	
BANSEFI	
BANSI	
BANXICO	
BARCLAYS	
BBASE	
BBVA BANCOMER	
BMONEX	
CAJA POP MEXICA	
CAJA TELEFONIST	
CB INTERCAM	
CI BOLSA	
CIBANCO	
CLS	
COMPARTAMOS	
CONSUBANCO	
CREDIT SUISSE	
CRISTOBAL COLON	
DEUTSCHE	
DONDE	
ESTRUCTURADORES	
EVERCORE	
FINAMEX	
FINCOMUN	
FND	
FOMPED	
FONDO (FIRA)	
GBM	
HDI SEGUROS	
HIPOTECARIA FED	
HSBC	
ICBC	
INBURSA	
INDEVAL	
INMOBILIARIO	
INTERCAM BANCO	
INVERCAP	
INVEX	
JP MORGAN	
KUSPIT	
LIBERTAD	
MASARI	
MIFEL	
MIZUHO BANK	
MONEXCB	
MUFG	
MULTIVA BANCO	
MULTIVA CBOLSA	
NAFIN	
ORDER	
OSKNDIA	
PAGATODO	
PROFUTURO	
REFORMA	
SABADELL	
SANTANDER	
SCOTIABANK	
SKANDIA	
SOFIEXPRESS	
STP	
TRANSFER	
UNAGRA	
VALMEX	
VALUE	
VE POR MAS	
VECTOR	
VOLKSWAGEN