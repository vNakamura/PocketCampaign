# Pocket Campaign

A self-hosted chat app to let you play your tabletop RPG adventures anywhere.

![Pocket Campaign logo](./public/logo.png?raw=true)

[![Build Status](https://travis-ci.org/vNakamura/pocket-campaign.svg)](https://travis-ci.org/vNakamura/pocket-campaign)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3ba171015b544e3c8bcc5d145ffd143d)](https://www.codacy.com/app/vNakamura/pocket-campaign?utm_source=github.com&utm_medium=referral&utm_content=vNakamura/pocket-campaign&utm_campaign=badger)

## Demo
Check it live at: <https://vnakamura.github.io/pocket-campaign/>

Avatars by [RoboHash](https://robohash.org/) and [Adorable Avatars!](http://avatars.adorable.io/)

## Introduction
Pocket Campaign is a tool to enable people to play tabletop RPGs from distance.
If you can meet your group and play locally, you don’t need this app. Go on play with them, I bet it will be way better.  
This app is meant for those who can’t manage to schedule some time with their group to play. Maybe you are too far and timezone is an issue. Maybe you’re too busy and can’t stop for hours to play an real time online session. Anyway, you can play a slow paced campaign where each player can take turn in their short breaks during the day.

## Contributing
Everyone is welcome to contribute to this project.  Even if you don’t code, feel free to open an Issue to report problems or suggest new features.

If you are a developer, here are  some recommendations:

* This project is built over create-react-app. We plan to keep using react-scripts as long as we can. Please avoid changes that requires ejecting unless unavoidable.
* Before sending a Pull Request, please be sure that all the tests passes by running `yarn test` or `npm run test`. This will check:
	* Flow types
	* ESLint (Airbnb rules)
	* Jest
