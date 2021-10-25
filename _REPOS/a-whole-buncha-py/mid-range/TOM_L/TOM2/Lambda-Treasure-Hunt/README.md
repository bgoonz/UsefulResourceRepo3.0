# Lambda Treasure Hunt

Welcome to the first annual Lambda Treasure Hunt!

After the war between the humans and machines, we were left in a world straddling the line between physical and digital. You, the elite chosen of Lambda School, have been selected to participate in an hunt for digital riches. Great glory and rewards await the most efficient treasure hunters. Will you divine the many secrets of the ever-evolving island and prove yourself worthy of our algorithmic overlords?

Happy hunting!


## Overview

You start the adventure unworthy, unequipped and anonymous. Your first task is to traverse the island and build a map for your personal use. Along the way, you will discover equipment, treasure and clues which will assist you on your quest for power, wealth and glory.

You can see the server source code [here](https://github.com/br80/lambda_treasure_hunt).


## Rooms

The map is laid out in a grid: Similar to your worlds from Week 1 of your CS training, each room may have exits in the cardinal directions: north, south, east and west. Each room also comes with a unique ID and coordinates for your convenience.

```
// Starting room
{
  "room_id": 0,
  "title": "Room 0",
  "description": "You are standing in an empty room.",
  "coordinates": "(60,60)",
  "players": [],
  "items": ["small treasure"],
  "exits": ["n", "s", "e", "w"],
  "cooldown": 60.0,
  "errors": [],
  "messages": []
}
```


## Cooldown

Your access to the server is restricted until you earn more power. Starting off, you are only allowed to make one request every 60 seconds. Sending another request before that time has elapsed will incur a penalty.

## Initialization

Test your API key with the init command. You can use this to get all relevant stats before you start moving.

`
curl -X GET -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' https://lambda-treasure-hunt.herokuapp.com/api/adv/init/
`

## Movement

All actions are executed via REST API commands to the Lambda Treasure Hunt server. Here is an example movement command:

`
curl -X POST -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' -H "Content-Type: application/json" -d '{"direction":"n"}' https://lambda-treasure-hunt.herokuapp.com/api/adv/move/
`

You will receive an authorization token following successful completion of Friday's Sprint Challenge. This serves as your unique identifier and authentication key. Don't share this key!

The URL will determine the command you are sending to the server.

Note the "direction" parameter, which determines which way you will move.


## Building your Map

Your first task is to build your map. Starting from `room 0`, you can begin to construct a graph of the map:

```
{0: {"n": "?", "s": "?", "e": "?", "w": "?"}}
```

Moving North from the starting room will return the following response:

```
{
  "room_id": 10,
  "title": "Room 10",
  "description": "You are standing in an empty room.",
  "coordinates": "(60,61)",
  "players": [],
  "items": [],
  "exits": ["n", "s", "w"],
  "cooldown": 60.0,
  "errors": [],
  "messages": ["You have walked north."]
}
```
This room has an ID of 10 and contains exits to the north, south and west. Now, you can fill out another entry in your graph:

```
{
  0: {"n": 10, "s": "?", "e": "?", "w": "?"},
  10: {"n": "?", "s": 10, "w": "?"}
}
```

There are a total of 500 rooms so be thoughtful about how you traverse the map.

Hint 1: What is the best algorithm to traverse a map without backtracking?

Hint 2: What do you do when you hit a dead end? What is the best algorithm for finding the nearest room with unexplored exits?

## Wise Explorer

An accurate map is the wise explorer's best friend. By predicting the ID of the destination room, you can reduce your action cooldown by 50%. Say you are in `room 10` and moving back south to `room 0`:

`
curl -X POST -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' -H "Content-Type: application/json" -d '{"direction":"s", "next_room_id": "0"}' https://lambda-treasure-hunt.herokuapp.com/api/adv/move/
`

Note the new parameter, `next_room_id`. Your map tells you that `room 0` lies south of `room 10`. This returns the following response:

```
{
  "room_id": 0,
  "title": "Room 0",
  "description": "You are standing in an empty room.",
  "coordinates": "(60,60)",
  "players": [],
  "items": ["small treasure"],
  "exits": ["n", "s", "e", "w"],
  "cooldown": 30.0,
  "errors": [],
  "messages": ["You have walked south.", "Wise Explorer: -50% CD"]
}
```

Note the `Wise Explorer` bonus and 50% cooldown reduction.


## Treasure

You may have noticed the small treasure lying in the room. You can pick it up with the following command:

`
curl -X POST -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' -H "Content-Type: application/json" -d '{"name":"treasure"}' https://lambda-treasure-hunt.herokuapp.com/api/adv/take/
`

You may drop items with the following command:

`
curl -X POST -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' -H "Content-Type: application/json" -d '{"name":"treasure"}' https://lambda-treasure-hunt.herokuapp.com/api/adv/drop/
`

## Selling Treasure

First, you must find the shop. It's not too far from your starting location. Once you do, you can offer your treasure in exchange for gold.

`
curl -X POST -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' -H "Content-Type: application/json" -d '{"name":"treasure"}' https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/
`

This will return:

```
{
  "room_id": "?",
  "title": "Shop",
  "description": "You are standing in a shop. You can sell your treasure here.",
  "coordinates": "?",
  "players": [],
  "items": [],
  "exits": ["e"],
  "cooldown": 2.0,
  "errors": [],
  "messages": ["I'll give you 100 gold for that Small Treasure.", "(include 'confirm':'yes' to sell Small Treasure)"]
}
```

Confirm the sale with the following command:

`
curl -X POST -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' -H "Content-Type: application/json" -d '{"name":"treasure", "confirm":"yes"}' https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/
`

## Status, Inventory

You can check your status and inventory using the following command:

`
curl -X POST -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' -H "Content-Type: application/json" https://lambda-treasure-hunt.herokuapp.com/api/adv/status/
`

```
{
  "name": "br80",
  "cooldown": 2.0,
  "encumbrance": 2,  // How much are you carrying?
  "strength": 10,  // How much can you carry?
  "speed": 10,  // How fast do you travel?
  "gold": 400,
  "inventory": ["Small Treasure"],
  "status": [],
  "errors": [],
  "messages": []
}
```


## Examine

You can examine players or items in your room or inventory using this command:

`
curl -X POST -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' -H "Content-Type: application/json" -d '{"name":"[NAME OF ITEM OR PLAYER]"}' https://lambda-treasure-hunt.herokuapp.com/api/adv/examine/
`


## Name Changer

You can change your name once you find the name changer using the following command:

`
curl -X POST -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' -H "Content-Type: application/json" -d '{"name":"[NEW NAME]"}' https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/
`


## Shrine

If you find a shrine, you may pray at the shrine to earn some new powers:

`
curl -X POST -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' -H "Content-Type: application/json" https://lambda-treasure-hunt.herokuapp.com/api/adv/pray/
`

## Flight

You may fly to avoid movement penalties on elevated terrain:

`
curl -X POST -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' -H "Content-Type: application/json" -d '{"direction":"n"}' https://lambda-treasure-hunt.herokuapp.com/api/adv/fly/
`


## Dash

You may dash to cover many rooms in one direction quickly:

`
curl -X POST -H 'Authorization: Token 7a375b52bdc410eebbc878ed3e58b2e94a8cb607' -H "Content-Type: application/json" -d '{"direction":"n", "num_rooms":"5", "next_room_ids":"10,19,20,63,72"}' https://lambda-treasure-hunt.herokuapp.com/api/adv/dash/
`

Formatting is very important for these commands: next_room_ids must match every room in a straight line and num_rooms must be the exact count for the dash to work successfully.


## Mystery

The island is constantly evolving and full of mysteries. As time passes and you explore the map, you will discover ancient clues and artifacts which will lead to greater power and riches.

Happy hunting!


## Git Commits

- You are required to showcase progress with at least 1 commit a day.
  This will let your project manager know where you are and if you need
  help. This also allows the client to get progress reports from the
  company in a real world setting.

## Trello Set Up:

- [ ] Create a Trello account if you don't have one already
- [ ] Create a new board called "LambdaMUD - {Your Name}"
- [ ] Create lists titled `backlog`,`To Do`, `In Progress`, and `Done`
- [ ] Fill in the `To Do` list with the MVP features listed below
- [ ] Fill in the `backlog` list with all the extra features listed below
- [ ] Share your board with the project manager that has been assigned to you. If you have not been assigned yet, reach out to your lead PM for guidance
- [ ] Add your Trello URL to your project's README.md file. Commit the change, push it to your repository & submit a pull request

## MVP Features:

#### Client
- [ ] Create a standalone frontend app that communicates with the server via API calls
- [ ] Display a visual representation of the LambdaMUD Island map.
- [ ] Automated server requests to handle cooldown and traverse the map
- [ ] Manual control override to move to specific locations on the map
- [ ] Ability to pick up and sell discovered treasure

#### General
- [ ] Header comments in all source files that describe overall what the file does
- [ ] Header comments on all functions that describe what the function does, function arguments, and return values

Upon your first commit, please submit a Pull Request and add _both_ the
**Trello Set Up** and **MVP Features** Task lists to your first Pull
Request comment:

```markdown
## Trello Set Up:

- [ ] Create a Trello account if you don't have one already
- [ ] Create a new board called "LambdaMUD - {Your Name}"
- [ ] Create lists titled `backlog`,`To Do`, `In Progress`, and `Done`
- [ ] Fill in the `To Do` list with the MVP features listed below
- [ ] Fill in the `backlog` list with all the extra features listed below
- [ ] Share your board with the project manager that has been assigned to you. If you have not been assigned yet, reach out to your lead PM for guidance
- [ ] Add your Trello URL to your project's README.md file. Commit the change, push it to your repository & submit a pull request

## MVP Features:

#### Client
- [ ] Create a standalone frontend app that communicates with the server via API calls
- [ ] Display a visual representation of the LambdaMUD Island map.
- [ ] Automated server requests to handle cooldown and traverse the map
- [ ] Manual control override to move to specific locations on the map
- [ ] Ability to pick up and sell discovered treasure


#### General
- [ ] Header comments in all source files that describe overall what the file does
- [ ] Header comments on all functions that describe what the function does, function arguments, and return values
```
