#!/bin/bash
# Program:
#       This program config basic chat bot display
# History:
# 2018/01/24	First release

#!/bin/bash
TOKEN=$(node fb_pass.js);

printf "\nCall SendAPI: "


curl -X POST -H "Content-Type: application/json" -d '{
  "recipient":{
    "id":"1434484653334498"
  },
  "message":{
    "attachment":{
      "type":"image", 
      "payload":{
        "url":"https://imgur.com/a/sTPWv", 
        "is_reusable":true
      }
    }
  }
}' "https://graph.facebook.com/v2.6/me/messages?access_token=$TOKEN"

printf "\n"
exit 0
