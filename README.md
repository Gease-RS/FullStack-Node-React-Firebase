# FullStack-Node-React-Firebase
Projeto baseado na vídeo aula da freeCodeCamp.org - Build a social media app

Lista de comandos
npm install -g firebase-tools
firebase init
firebase deploy
firebase serve
//Para selocionar algum problema de install do firebase pode ser utilizado o comando abaixo
npm install firebase-functions@latest firebase-admin@latest --save

//No decorrer do projeto apareceu um aviso que a versão Global do Nodejs Global era diferente ao projeto, o Firebase functions instala o Node 8, na minha máquina eu tinha instalado Node 10.

//Para eliminar o aviso das versões diferentes executei o seguinte código
npm install -g node@8

//Um error quem for fazer o projeto do vídeo da freeCodeCamp vai se deparar refrente as Crendeciais, no vídeo não mostra essa declaração do código, por isso vou deixar aqui os passos que segui para resolver.

Error: Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.
>      at GoogleAuth.getApplicationDefaultAsync (C:\Users\gease\OneDrive\Desktop\GitHub\FullStack-Node-React-Firebase\functions\node_modules\google-auth-library\build\src\auth\googleauth.js:161:19)
>      at <anonymous>
>      at process._tickCallback (internal/process/next_tick.js:189:7)
Shutting down...

//Entre no console do Firebase, clique em <Configurações/Settings> depois em <Contas de serviço>, no quadro abaixo de (Snippet de configuração do Admin SDK) selecione Node, copie o código que aperece e cole no teu index do projeto. Abaixo o código que você copiou e colou.

var admin = require("firebase-admin");//Essa chamada já existe no teu index, delete.

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aqui-esta-escrito-o-nome-do-teu-projeto.firebaseio.com"
});

//A chamada admin.initializeApp() vai estar duplicada, delete a antiga.
//Depois de fazer isso, clique em Gerar nova chave privada, imediatamente começará baixar um arquivo .json com as credenciais do seu projeto.

//Eu renomei o arquivo baixado para serviceAccountKey.json, criei uma nova pasta com nome de util e coloi essse arquivo dentro, alterei o path conforme linha abaixo e pronto, error resolvido.

var serviceAccount = require("./util/serviceAccountKey.json");

npm install dotenv

