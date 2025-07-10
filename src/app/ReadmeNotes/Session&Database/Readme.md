Database

First - open natin sa google yung mongoDB ant hen create lang tayo ng account don after non proceed tayo sa networks and then connect lang natin yung current ip address natin. Ngayon punta tayo cluster and then connect, then drive, then choose lang natin node js current version and then lastly copy natin yung connection string na nakalagay.

Second - punta na tayo sa vs code natin add file lang tayo .env.local and then ang ilalagay natin dito is yung kinuha natin kanina na connection string DB_URI lang tayo then equal sign and double quatation mark and then paste lang natin doon yung cinopy natin sa mongoDB natin which is yung connection string then change lang natin yung password kung ano yung inilagay natin kanina sa username and password yung password copy lang natin doon and then okay na pwede na tayo mag proceed sa databe file natin 

Third - first thing we need to do is i-check natin yung DB_URI natin if lang tayo and then open and close parenthesis tapos not sign lang tayo and then process.env.DB_URI an then return lang tayo ng trow new error and then DB URI not found

Fourth - second thing we need to do is to import MongoClient and ServerApiVersion, after that cosnt lang tayo ng client and then equal natin sa new then yung inimport natin na MOngoClient open and close parenthesis and then ibaba natin yung process.env.DB_URI natin and then comma lang tayo curly braces naman serverApi lang tayo and then colon tapos lagay tayo ng version and then ibaba natin ngayon yung ininmport natin na ServerApiVersion and then add lang tayo ng v1, next strict then laman nya true, last yung deprecationErros laman nya true din naka colon sila then value.

Fifith - third thing we need to do is async function lang tayo then getDb parameter na dbName curly braces lang tayo and then try and catch gawa tayo, ngayon sa try await lang tayo and then ibaba natin yung const natin na client yung may laman na new mongoClient so bali ibaba yung client and then .connect and parenthesis lang natin, saka tayo mag console.log ng database connected, and then return lang tayo ibaba ulit natin yung client and then .db lang tayo tapos parentehsis then ilagay natin sa loob ying paremeter natin na dbName don sa getDb natin na function

Sixth - last thing we need to do is databe file is to collect data in database, export async function lang tayo and then getCollection parennthesis and then yung parameter natin na collectionName curly braces lang tayo const tayo ng db and then equal lang natin sa await and then yung function natin getDb parenthsis tayo and then yung pinaka name ng storage natin, then if parenthesis db lang tayo and then return natin db.collection parenthesi and then yung parameter natin na collectionName don sa function natin na getCollection


Session partner ng database natin
first thing we need to is punta tayo sa ginawa nating env.local na file and then gawa lang tayo don na secret underscore session then equal sign and double quation mark same lang with DB_URI magkaiba lang sila ng laman. Ngayon yung ilalagay natin doon is mangagaling sa openssd natin doon sa github magge-generate sya ng random session and then ayun yung ilalgay natin sa secret session natin after that punta na tayo sa secon step

second thing we need to do is to fetch the secret session but before that import muna natin yung jwtVerify and SignJWT, lastly the cookie. ngayon gawin na na nati nyung pag pag fetch natin const lang tayo secretKey and then equal lang natin yung process.env.SECRET_SESSION and then semi colon

third thing we need to is to encode the key const lang tayo encodeKey equal lang natin to new TextEncode parenthsis .encode parenthesis ulit and then ilagay na natin yung secretKey natin 

fourth thing we need to do is to create encrypt function, export async funtion lang tayo name ng function natin syempre is encrypt curly braces lagn tayo and then return lang natin new and then yung inmo=port natin kanina na SignJWT parenthesis lang tayo tapos parameter na payload and then baba lang tayo, add 
.setProtectedHeader open and close parenthesis and then curly braces sa loob tapos alg lan tayo and then coolon double quotation mark HS256 next 
.setIssuedAt apoen and cole parenthesis
.setExpirationTime open and close parenthesis and double quatation mark 7d and lastly
.sign parenthesis and then yung ginawa nagtin kanina na encodeKey