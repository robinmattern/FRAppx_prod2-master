//console.log( require( 'util').inspect( README_JSON(), { depth: 9 } ) )

  export default README_JSON

function README_JSON() {
return [
, { proj: "formR's First Sample Apps"
  , url:  'C:/Repos/FRApps_prod1-master'
  , name: "FRApps_prod1-master"
  , stages: [

  , { stage: "Client1 HTML Apps"
    , apps: [

    , { app: "1c1. My HTML Custom App"
      , txt: "A simple responsive app using HTML and .CSS styles"
      , url: 'client1/1c1_my-html-custom-app/index_final_custom.html' }

    , { app: "1c2. My HTML Rewmote App"
      , txt: "A website based on My HTML Final Custom App"
      , url: 'client1/1c2_my-html-custom-app/index.html' }
    ] }

  , { stage: "Client2 JavaScript Apps", apps: [

    , { app: "2c1. My JavaScript Click Samples"
      , txt: "A refactored JavaScript app using My HTML Custom App"
      , url: 'client2/2c1_javascript-click-samples/index.html' }

    , { app: "2c2. JavaScript FAQs App"
      , txt: "A simple JavaScript app to display FAQs using collapsing detail / stage items"
      , url: 'client2/2c2_javascript-faqs-app/index.html' }

    , { app: "2c3. JavaScript Cards App"
      , txt: "A simple JavaScript app to display cards using a collapsing carousel"
      , url: 'client2/2c3_javascript-cards-app/index.html' }

    , { app: "2c4. JavaScript JSON.JS Data App"
      , txt: "A simple JavaScript app to retreive JSON data from a local JavaScript file."
      , url: 'client2/2c4_javascript-local-json-data-app/index.html' }

    , { app: "2c5. JavaScript JSON Server API Data App"
      , txt: "A simple JavaScript app to retreive JSON data requested from a JSON Server with an API call."
      , url: 'client2/2c5_javascript-json-data-app/index.html' }

    , { app: "2c6. JavaScript JSON MySQL API Data App"
      , txt: "A simple JavaScript app to retreive JSON data requested from a MySQL Express Server with an API call."
      , url: 'client2/2c6_javascript-mysql-data-app/index.html' }
    ] }

  , { stage: "Client3 React Apps", apps: [

    , { app: "3c1. React Cards and FAQs App"
      , txt: "A simple React app to display FAQs using collapsing cards and detail / stage items"
      , url: 'client3/3c1-test-react-empty-app/build/index.html' }

    , { app: "3c2. React Empty App"
      , txt: "A clean React client app with only one line of HTML and all the React dependancies."
      , url: 'client3/3c2_react-faqs-n-cards-app/index.html' }

    , { app: "3c3. React Button"
      , txt: "A simple button componant using React deployed from an Internet CDN."
      , url: 'client3/3c3-react-button/index.html' }

    , { app: "3c4. React App with No API"
      , txt: "A simple React app using client-side routes and data."
      , url: 'client3/3c4-react-app-no-api/build/index.html' }

    , { app: "3c5. React App with API"
      , txt: "A simple React app using client-side routes and data served with an API call."
      , url: 'client3/3c5-react-app-wi-api/build/index.html' }

    , { app: "3c6. My React Custom App"
      , txt: "A simple React client app that can be used as a home page template."
      , url: 'client3/3c6-react-custom-api/build/index..html' }
    ] }

  , { stage: "Client4 Lit Apps", apps: [

    , { app: "4c1. Simple Lit Component App"
      , txt: "A clean Lit component"
      , url: 'client4/4c1_simple-lit-component/index.html' }

    , { app: "4c2. Lit Cards and FAQs App"
      , txt: "A simple Lit app to display FAQs using collapsing cards and detail / stage items"
      , url: 'client4/4c2_lit-faqs-n-cards-app/index.html' }

    , { app: "4c3. Lit App with API"
      , txt: "A simple Lit app requesting data from a server API"
      , url: 'client4/4c3_lit-app-wi-api/index.html' }
    ] }

  , { stage: "Server1 JSON Extract Script", apps: [

    , { app: "1s1. JSON Data Extract Script"
      , txt: "A simple NodeJS Script to extract data from MySQL."
      , url: 'server1/1s1-json-extract/getJSON.mjs' }
    ] }

  , { stage: "Server2 JSON APIs", apps: [

    , { app: "2s1. JSON Data API"
      , txt: "A simple API to return JSON data requested with an API call."
      , url: 'server2/2s1-json-data-api/index.html' }
    ] }

  , { stage: "Server3 MySQL APIs", apps: [

    , { app: "3s1. React Data API"
      , txt: "A simple API to return MySQL data requested with an API call."
      , url: 'server3/3s1-mysql-app-wi-api/index.html' }
    ] }
  ] }

, { proj: "formR's React Data Apps"
  , url:  'C:/WEBs/8020/VMs/et218t/webs/nodeapps/FormR_/prod-master/'
  , name: "FormR_prod-master", stages: [

  , { stage: "Client React Admin Apps", apps: [

    , { app: "1c. World"
      , txt: "A React client app to view data in the World database."
      , url: 'client/1c-world/public/index.html' }

    , { app: "3c. RAuth"
      , txt: "A React client app to authenticate users in the RAuth table."
      , url: 'client/3c-rauth/public/index.html' }

    , { app: "4c. Admin"
      , txt: "A React client app to view, add, edit or delete users in the RAuth table"
      , url: 'client/4c-admin/public/index.html' }

    , { app: "5c. formR"
      , txt: "A React client app to view, add, edit or delete data in the World database"
      , url: 'client/5c-formr/public/index.html' }
    ] }

  , { stage: "Server MySQL APIs", apps: [

    , { app: "1s. World"
      , txt: "A React server api to view data in the World database."
      , url: 'server/1s-world/index.html' }

    , { app: "3s. RAuth"
      , txt: "A React server api to authenticate users in the RAuth table."
      , url: 'server/3s-rauth/index.html' }

    , { app: "4s. Admin"
      , txt: "A React server api to view, add, edit or delete users in the RAuth table"
      , url: 'server/4s-admin/index.html' }

    , { app: "5s. formR"
      , txt: "A React server api to view, add, edit or delete data in the World database"
      , url: 'server/5s-formr/index.html' }
    ] }
  ] }
]

}










