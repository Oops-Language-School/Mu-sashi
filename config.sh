#!/bin/bash
# Program:
#       This program config basic chat bot display
# History:
# 2018/01/24	First release

#!/bin/bash
TOKEN=$(node fb_pass.js);

# Add get_started button
printf "Add get_started button: "
curl -X POST -H "Content-Type: application/json" -d '{ "get_started":{ "payload":"init" } }' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=$TOKEN"

# Add Menu
printf "Add Menu: "
curl -X POST -H "Content-Type: application/json" -d '
{ 
    "persistent_menu":
    [
        {
            "locale":"default",
            "composer_input_disabled": false,
            "call_to_actions":
            [
                {
                    "title":"查詢課程/報名試聽",
                    "type":"nested",
                    "call_to_actions":
                    [
                        {
                            "title":"日語課程",
                            "type":"nested",
                            "call_to_actions":
                            [
                                {
                                    "type":"web_url",
                                    "url":"https://chatbot.mu-sashi.com.tw/course/jp",
                                    "title":"查詢日語正式課程",
                                    "messenger_extensions": true,
                                    "webview_share_button": "hide",
                                },
                                {
                                    "type":"web_url",
                                    "url":"https://chatbot.mu-sashi.com.tw/trial/jp",
                                    "title":"報名日語試聽課程",
                                    "messenger_extensions": true,
                                    "webview_share_button": "hide",
                                },
                            ]
                        },
                        {
                            "title":"韓語課程",
                            "type":"nested",
                            "call_to_actions":
                            [
                                {
                                    "type":"web_url",
                                    "url":"https://chatbot.mu-sashi.com.tw/course/kr",
                                    "title":"查詢韓語正式課程",
                                    "messenger_extensions": true,
                                    "webview_share_button": "hide",
                                },
                                {
                                    "type":"web_url",
                                    "url":"https://chatbot.mu-sashi.com.tw/trial/kr",
                                    "title":"報名韓語試聽課程",
                                    "messenger_extensions": true,
                                    "webview_share_button": "hide",
                                },
                            ]
                        },
                        {
                            "title":"英語課程",
                            "type":"nested",
                            "call_to_actions":
                            [
                                {
                                    "type":"web_url",
                                    "url":"https://chatbot.mu-sashi.com.tw/trial/eng",
                                    "title":"查詢英語試聽課程",
                                    "messenger_extensions": true,
                                    "webview_share_button": "hide",
                                },
                                {
                                    "type":"web_url",
                                    "url":"https://chatbot.mu-sashi.com.tw/trial/eng",
                                    "title":"報名英語試聽課程",
                                    "messenger_extensions": true,
                                    "webview_share_button": "hide",
                                },
                            ]
                        }
                    ]
                },
                {
                    "title":"諮詢留遊學代辦",
                    "type":"nested",
                    "call_to_actions":
                    [
                        {
                            "type":"web_url",
                            "url":"https://chatbot.mu-sashi.com.tw/abroad/jp",
                            "title":"日本",
                            "messenger_extensions": true,
                            "webview_share_button": "hide",
                        },
                        {
                            "type":"web_url",
                            "url":"https://chatbot.mu-sashi.com.tw/abroad/kr",
                            "title":"韓國",
                            "messenger_extensions": true,
                            "webview_share_button": "hide",
                        },
                        {
                            "type":"web_url",
                            "url":"https://chatbot.mu-sashi.com.tw/abroad/eng",
                            "title":"英語系國家",
                            "messenger_extensions": true,
                            "webview_share_button": "hide",
                        }
                    ]
                },
                {
                    "title":"其他功能",
                    "type":"nested",
                    "call_to_actions":
                    [
                      
			{
                            "type":"postback",
                            "title":"近期影片",
                            "payload": "recent_vid",
                        },
                        {
                            "type":"postback",
                            "title":"每日一句",
                            "payload": "daily_sen",
                        },
                        {
                            "type":"postback",
                            "title":"聯絡我們",
                            "payload": "contact_us",
                        },
                        {
                            "type":"postback",
                            "title":"近期活動",
                            "payload": "recent_act",
                        },
                        
                    ]
                },
                
            ]
        },
    ]    
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=$TOKEN"


# Add greeting
printf "\nAdd greeting: "
curl -X POST -H "Content-Type: application/json" -d '{ "greeting":[ { "locale":"default", "text":"哈囉 {{user_first_name}}!" } ] }' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=$TOKEN"

printf "\n"
exit 0
