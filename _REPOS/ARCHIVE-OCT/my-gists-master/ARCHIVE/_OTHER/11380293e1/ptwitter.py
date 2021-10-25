# based on: https://github.com/sixohsix/twitter
__author__ = "Diego Garcia"

from twitter import *
from my_twitter_tokens import *  # TOKENS CONSTS

t = Twitter(auth=OAuth(ACCESS_TOKEN, ACCESS_TOKEN_SECRET, API_KEY, API_SECRET))


# View timeline
for tw in t.statuses.home_timeline():
    print("Account: {}".format(tw["user"]["screen_name"]))
    print("Name: {}".format(tw["user"]["name"]))
    print("Tweet: {}".format(tw["text"]))
    print("=============================================")

# View search result
t.search.tweets(q="CleanCode")

# View timeline of specific user
t.statuses.user_timeline(screen_name="MongoDB")

# Update user status
t.statuses.update(
    status="Status update only work if your token access level is Read/Write"
)
