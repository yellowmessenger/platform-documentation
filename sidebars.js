module.exports = {
  // someSidebar: {
  //   Docusaurus: ['doc1', 'doc2', 'doc3'],
  //   methods: ['allFunctions'],
  //   Features: ['mdx'],
  // },
  docs :{
  'API Documentation': [

    {Objects : ['app.allFunctions', 'app.logger','app.memory', 'app.ai','app.allSteps','app.context','app.contextEndTime','app.createdUserMessageObject','app.data','app.dataStore','app.entityValidators','app.jsonWebToken','app.libraryStartTime','app.prediction','app.predictionEndTime','app.profile','app.soap']},
    {Methods: ['sendTextMessage', 'executeFunction','app.invokeJourney','app.renderMessage','virusScanningAPI']}
    ],
  'Release Notes' : [
    'Aug 2020',
    'Sep 2020'
  ]
  }
  // docs: {
  //   Guides: [
  //     'doc1',
  //     {
  //       Docs: ['doc2'],
  //     },
  //   ],
  //   'Guides 2': [
  //     'doc3', 
  //     {
  //       Methods: ['mdx']
  //     },
  //   ]
  // },
};
