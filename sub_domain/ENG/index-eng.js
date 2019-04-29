'use strict';

const
  request = require('request'),
  url = require('url'),
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  path = require('path'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  mongoose = require('mongoose'),
  session = require('express-session');

// connect mongoDB
//(node:14690) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/fb_chatbot', { useNewUrlParser: true });
//let FB_TOKEN = require('./fb_pass');
//const PAGE_ACCESS_TOKEN= FB_TOKEN.TOKEN

 // user auth
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(session({
  secret: 'fb_chatbot',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // only set this to true if you are in HTTPS connection
}));

app.use(logger('dev'));
app.use(bodyParser.json()); // parse client request data to json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

// passport config
const Account = require('./models/chatbot/users');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

//const path = require('path');
// Set views path
app.set('views', path.join(__dirname, '../../views'));
// Set public path
app.use(express.static(path.join(__dirname, '../../public')));
// Set pug as view engine
app.set('view engine', 'pug');

//Oops Website
const oops = require('./routes/oops-eng');
app.use('/',oops);

const oops_admin = require('./routes/oops-admin');
app.use('/oops-admin',oops_admin);

// Sets server port and logs message on success
app.listen(8380, () => console.log('Oops - English'));

/*
// catch 404 and forward to error handler

app.use((req, res, next) => {
  const err =  new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next)=> {
  res.status(err.status || 500);
  res.render('error', /*{
    message: err.message,
    error: err
  });
});
*/

/*
function sendCourseInfo(sender_psid,courseInfo) {
  if(courseInfo.length!==0){
    let response= 
    {
      text : "您好。根據您的情況，我們目前有以下班級適合您\n"
    };
    callSendAPI(sender_psid, response);
    for (var count in courseInfo ){
      let courseReply= 
      {
        text : `課程名稱: ${courseInfo[count].type}\n課程期間: ${courseInfo[count].begin_date.getFullYear()
        }/${courseInfo[count].begin_date.getMonth()+1}/${courseInfo[count].begin_date.getDate()} (${courseInfo[count].begin_dayOfWeek
        })–${courseInfo[count].end_date.getFullYear()}/${courseInfo[count].end_date.getMonth()+1}/${courseInfo[count].end_date.getDate()
        } (${courseInfo[count].end_dayOfWeek
        })\n上課時段: ${courseInfo[count].begin_time}-${courseInfo[count].end_time
        }\n授課教師: ${courseInfo[count].teacher_name}\n最低開班人數: ${courseInfo[count].min_students}\n備註: ${courseInfo[count].fee}\n\n`
      };
      setTimeout(function(){
        callSendAPI(sender_psid, courseReply); 
      }, 1000);
    }
    
  }else{
    let response= 
    {
      text : "根據您的資料，目前暫無適合您時間/程度的班級。\n歡迎您使用不同條件再次搜尋，或直接至 www.mu-sashi.com.tw 查詢相關課程\n"
    };
    callSendAPI(sender_psid, response); 
  }
  setTimeout(function(){
    sendContactInfo(sender_psid)
  }, 1500);
}
exports.sendCourseInfo=function (sender_psid,courseInfo){
  sendCourseInfo(sender_psid,courseInfo);
}
function sendAbroadInfo(sender_psid) {
  let response= 
  {
    text : "感謝您的洽詢，武藏將會有專人透過LINE或電話與您聯絡。"
  };
  //console.log("sendAbroadInfo");
  callSendAPI(sender_psid, response); 
  //console.log("sendAbroadInfo 2 ");
  //sendContactInfo(sender_psid);
  //setTimeout(callback,sendContactInfo(sender_psid), 1000);
  setTimeout(function(){
    sendContactInfo(sender_psid)
  }, 1000);
}
exports.sendAbroadInfo=function (sender_psid){
  sendAbroadInfo(sender_psid);
}
function sendTrialInfo(sender_psid,langType,courseTime) {
  let response= 
  {
    text : `感謝您報名"${langType}發音班"免費試聽體驗課程。\n\n您報名的課程資訊如下\n課程時間:\n${courseTime}\n師資: 外籍教師授課\n課程說明:\n請您於試聽時段前5-10分鐘抵達武藏櫃台完成報到手續。試聽當天請自行攜帶文具用品及筆記本。`
  };
  sendContactInfo(sender_psid);
  callSendAPI(sender_psid, response); 
}
exports.sendTrialInfo=function (sender_psid,langType,courseTime){
  sendTrialInfo(sender_psid,langType,courseTime);
}
function sendTrialGeneralInfo(sender_psid){
  let response= 
  {
    text : `感謝您的洽詢，武藏將會有專人透過LINE或電話與您聯絡。`
  };
  sendContactInfo(sender_psid); 
  callSendAPI(sender_psid, response); 
}
exports.sendTrialGeneralInfo=function (sender_psid){
  sendTrialGeneralInfo(sender_psid);
}
function sendContactInfo(sender_psid) {
  let contact_info= 
  {
    text : "武藏專線: 04-2221-1568\n武藏Line ID: jojolady2266\n地址: https://goo.gl/dhPqgs\n\n營業時間：\n周一至周五\n\t下午1點-晚上10點\n周六日\n\t上午10點-下午5點\n\n武藏周邊示意圖如下"
  };
  let location = {
    "attachment":{
      "type":"image", 
      "payload":{
        "url":"https://i.imgur.com/ZvJIrdJ.jpg", 
        "is_reusable":true
      }
    }
  }
  callSendAPI(sender_psid, contact_info); 
  callSendAPI(sender_psid, location); 
}


app.post('/webhook', (req, res) => {  

  // Parse the request body from the POST
  let body = req.body;
  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {
    body.entry.forEach(function(entry) {
      // Gets the body of the webhook event
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
      // Get the sender PSID
      let sender_psid = webhook_event.sender.id;
      console.log('Sender PSID: ' + sender_psid);
      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);        
      } else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
      }
    });
    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN= PAGE_ACCESS_TOKEN;
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
 
  // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
    // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);   
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

let init_response =
 {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "generic",
      "elements": [{
        "title": "請問需要什麼服務?",
        "subtitle": "請從下方選擇需要的服務",
        "image_url": "https://i.imgur.com/ib31XOw.jpg",
        "buttons": [
          {
            "type": "postback",
            "title": "外語課程",
            "payload": "course",
          },
          {
            "type": "postback",
            "title": "留遊學代辦",
            "payload": "abroad",
          },
          {
            "type": "postback",
            "title": "試聽課程",
            "payload": "free_trial",
          }

        ],
      }]
    }
  }
}
function handleMessage(sender_psid, received_message) {
  let response;
  // Checks if the message contains text
  if (received_message.text) {    
    // Create the payload for a basic text message, which
    // will be added to the body of our request to the Send API
    if( received_message.text === '英語試聽'){
      //sendAbroadInfo(sender_psid);
      response = { "text": "請您致電04-22211568或透過Line ID : jojolady2266 諮詢相關資訊" }
    }else if(received_message.text === '日語試聽'){
      response = { "text": "請參考 http://www.mu-sashi.com.tw/index.php?a=course/homeJ&id=208" }
    }else if(received_message.text === '韓語試聽'){
      response = { "text": "請參考 http://www.mu-sashi.com.tw/index.php?a=course/homeK&id=218" }
    }else if (received_message.text.includes("電話")){
      response = { "text": "您好。武藏外語電話如下04-2221-1568。有任何問題歡迎來電洽詢" }
    } else if (received_message.text && received_message.text.includes("地址") || received_message.text.includes("地圖")|| received_message.text.includes("在哪裡") || received_message.text.includes("再哪裡") || received_message.text.includes("在哪裏") ){
      response = { "text": " 您好。武藏外語靠近中友百貨所在地的一中商圈周邊。\n\n聯絡地址：台中市北區三民路3段217號10樓之5\nhttps://goo.gl/dhPqgs (請點我)" }
    }else if (received_message.text && received_message.text.includes("停車場") || received_message.text.includes("停車") || received_message.text.includes("停車位") ){
      response = { "text": " 您好。武藏外語沒有提供停車場服務。僅提供周邊停車場示意圖。\n\n請參考下方示意圖上的P " }
      let location = {
        "attachment":{
          "type":"image", 
          "payload":{
            "url":"https://i.imgur.com/ZvJIrdJ.jpg", 
            "is_reusable":true
          }
        }
      }
      callSendAPI(sender_psid, location); 
    }else if (received_message.text && received_message.text.includes("上班時間") || received_message.text.includes("營業時間") ){
      response = { "text": " 周一至周五\n下午1點-晚上10點\n\n周六日\n上午10:00-下午5點 " }
    } else if (received_message.text && received_message.text.includes("ATM轉帳") || received_message.text.includes("轉帳") || received_message.text.includes("繳費") || received_message.text.includes("付款方式") || received_message.text.includes("怎麼付費") || received_message.text.includes("付學費") )
    {
      response = { "text": " 您好。本中心除了本人親至櫃台繳納學費以外，亦提供ATM轉帳服務。(轉帳手續費用由學員負擔)  \n\n銀行名稱：中國信託  \n\n帳號：369-531-784-604  \n\n分行別：土城分行  \n\n戶名：張君君" }
    }else if (received_message.text && received_message.text.includes("刷卡")  )
    {
      response = { "text": " 您好。目前中心暫時無法提供刷卡服務。僅提供現金繳納學費及ATM轉帳。" }
    }else if (received_message.text && received_message.text.includes("分期")  )
    {
      response = { "text": " 您好。目前中心有提供現金學費分期服務。分期詳情請直接與武藏外語聯繫。" }
    }else if (received_message.text && received_message.text.includes("上課老師") || received_message.text.includes("外籍教師") || received_message.text.includes("授課教師") || received_message.text.includes("授課老師") || received_message.text.includes("台籍教師")|| received_message.text.includes("台灣老師")|| received_message.text.includes("台師") || received_message.text.includes("中師") || received_message.text.includes("外國人"))
    { 
      response = { "text": " 您好。中心中外師的課程都有唷。請直接洽詢04-2221-1568。" }
    }else if (received_message.text && received_message.text.includes("補課") || received_message.text.includes("請假"))
    {
      response = { "text": " 您好。請假未到班上課的同學，可以先加入武藏LINE ID: jojolady2266，再透過LINE預約補課時段唷。\n\n補課可申請時段: 周一至周五下午2:00-5:00、晚上6:30-10:00。周六日上午10:00-13:00、下午2:00-5:00" }
    }else if (received_message.text && received_message.text.includes("找哪位老師"))
    {
      response = { "text": "您好。只要是武藏櫃檯的行政人員皆可洽詢課程相關問題唷。" }
    }else if (received_message.text && received_message.text.includes("公車"))
    {
      response = { "text": "請於\"一心市場\"、\"五權學士路口\"、\"莒光新城\"、\"中友百貨\"站下車" }
    }else if (received_message.text && received_message.text.includes("會講中文") || received_message.text.includes("會說中文"))
    {
      response = { "text": "您好。武藏的外語課程皆為外師授課。外師基本上都是以日語或者韓語授課。所以比較少使用中文。不過授課老師基本上都是會說一些些中文的。只是無法跟台灣人一樣流利。請您見諒。" }
    }

  }
  // Send the response message
  callSendAPI(sender_psid, response);    
}

function handleQuickPostback(sender_psid, received_postback) {
  let payload = received_postback.quick_replies.payload;
  return payload;
}


function handlePostback(sender_psid, received_postback) {
  let response;
  
  // Get the payload for the postback
  let payload = received_postback.payload;

  if (payload ==='init') {
    response = init_response;
  }
  if (payload === 'course')
  {
    response = 
    {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "課程種類選擇",
            "subtitle": "請問您想諮詢什麼課程呢？",
            "image_url": "https://i.imgur.com/rS7Pyzp.jpg",
            "buttons": [
              {
                "type":"web_url",
                "url":"https://chatbot.mu-sashi.com.tw/course/jp",
                "title":"日語課程",
                "messenger_extensions": true,
                "webview_share_button": "hide",
              },
              {
                "type":"web_url",
                "url":"https://chatbot.mu-sashi.com.tw/course/kr",
                "title":"韓語課程",
                "messenger_extensions": true,
                "webview_share_button": "hide",
              },
              {
                "type":"web_url",
                "url":"https://chatbot.mu-sashi.com.tw/trial/eng",
                "title":"英語課程",
                "messenger_extensions": true,
              }
            ],
          }]
        }
      }
    }
  }
  if(payload==='course_eng'){
    response = { "text": "請您致電04-22211568 或 透過Line ID : jojolady2266 諮詢相關資訊" }
  }
  if(payload==='contact_us'){
    response = { "text": "您好。武藏外語靠近中友百貨所在地的一中商圈周邊。\n\n聯絡地址：台中市北區三民路3段217號10樓之5\nhttps://goo.gl/dhPqgs (請點我)" }
  }
  if(payload==='daily_sen'){
    response = { "text": "머리를 묶다 (綁頭髮)\n머리를 땋다 (綁辮子)" }
  }
  if(payload==='recent_vid'){
    response = { "text": "請參考 https://goo.gl/ZXU97f" }
  }
  if(payload==='recent_act'){
    response = { "text": "請參考 https://goo.gl/fHJKj4" }
  }
  if(payload ==='abroad'){
    response = 
    {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "留遊學",
            "subtitle": "請問您想要去哪個地區呢？",
            "image_url": "https://i.imgur.com/2ddInON.jpg",
            "buttons": [
              {
                "type":"web_url",
                "url":"https://chatbot.mu-sashi.com.tw/abroad/jp",
                "title":"日本",
                "messenger_extensions": true,
              },
              {
                "type":"web_url",
                "url":"https://chatbot.mu-sashi.com.tw/abroad/kr",
                "title":"韓國",
                "messenger_extensions": true,
              },
              {
                "type":"web_url",
                "url":"https://chatbot.mu-sashi.com.tw/abroad/eng",
                "title":"英語系國家",
                "messenger_extensions": true,
              }
            ],
          }]
        }
      }
    }
  }
  if(payload==='free_trial'){
    response = 
    {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "試聽",
            "subtitle": "請問您想試聽什麼課程呢？",
            "image_url": "https://i.imgur.com/xYjgUXl.jpg",
            "buttons": [
              {
                "type":"web_url",
                "url":"https://chatbot.mu-sashi.com.tw/trial/jp",
                "title":"試聽日語課程",
                "messenger_extensions": true,
              },
              {
                "type":"web_url",
                "url":"https://chatbot.mu-sashi.com.tw/trial/kr",
                "title":"試聽韓語課程",
                "messenger_extensions": true,
              },
              {
                "type":"web_url",
                "url":"https://chatbot.mu-sashi.com.tw/trial/eng",
                "title":"試聽英語課程",
                "messenger_extensions": true,
              }
            ],
          }]
        }
      }
    }
  }
  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
}
// Sends response messages via the Send API

function callSendAPI(sender_psid, response) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }
  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  }); 
}

/*function testF(msg){
  return "HELLO:" + msg;
}
exports.sayHelloInEnglish = function(msg) {
  return "HELLO!!: " + msg;
};
exports.testF=testF(); 
exports.callSendAPI=callSendAPI(); */
