function onFormSubmit(e){
  Logger.log(JSON.stringify(e));
  var obj = e.namedValues;
  Logger.log(obj['Email Address']);
  var html = '<h1>Form Data</h1>';
  for(key in obj){
    Logger.log(key + ' ' + obj[key]);
    html += '<div><b>'+key+'</b>: '+obj[key] + '</div>';
  }
  //var email = Session.getActiveUser().getEmail();
  MailApp.sendEmail(obj['Email Address'],'Form Submission','',{
    htmlBody :html
    ,cc : 'gappscourse@gmail.com'
  });
}

function sActive(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
}
