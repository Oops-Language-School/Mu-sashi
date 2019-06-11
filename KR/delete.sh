#!/bin/bash
# Program:
#       This program shows "Hello World!" in your screen.
# History:
# 2018/01/24    First release

#!/bin/bash
TOKEN=$(node fb_pass.js);

# Delete greeting
printf "Delete greeting: "
curl -X DELETE -H "Content-Type: application/json" -d '{ "fields": [ "greeting" ] }' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=$TOKEN"

# Delete Menu
printf "Delete Menu: "
curl -X DELETE -H "Content-Type: application/json" -d '{ "fields": [ "persistent_menu" ] }' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=$TOKEN"


# Delete get_started
printf "\nDelete get_started: "
curl -X DELETE -H "Content-Type: application/json" -d '{ "fields": [ "get_started" ] }' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=$TOKEN"

printf "\n"
