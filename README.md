# 🍔 Mongo Burgers 🍔

![burgers](images/burgers.jpg)

## Overview

You want to help your friend create an app for their burger shop, where customers can order their burgers online either have them picked up or delivered. Your friend is a culinary visionary and envisions that burgers can be made with any protein (beef, chicken, turkey, ostrich, tofu, emu, buffalo, elk, etc...), cheese is optional (only 1 slice of American cheese allowed) and the burger can have any number of toppings ( ketchup, mustard, guacamole, Worstershire sauce, french fries, hot fudge, mayonnaise, pickled beets, mango, sriracha, onions, ramen, pickles, capers, relish, fried banana and with peanut butter, olives, tabasco, kimchi, maple syrup, mushrooms, fried green tomatoes, etc.).

## Getting Started

- 'Fork' and 'clone' this repo
- `cd` into the repo

## Instructions

- start `mongo` server
- start a `mongo shell`

The orders should have a

- protein selection
- whether or not there will be cheese
- a list of toppings

## Activity

- Work through the command prompts listed in the `answers.js` file in the mongo shell to CRUD data.

## Requirements

- All working Mongo commands should be added to your `answers.js` file.

Example:

```
// find all the burgers that are not beef
db.burger.find({meat:{$ne:'beef'}})
```

## Submission Guidelines

- Pull Request must be submitted utilizing these guidelines: [PR Guidelines](https://github.com/SEI-R-6-21/template_pull_request)

## Resources

> [Mongo Documentation](https://docs.mongodb.com/manual/)
> .
