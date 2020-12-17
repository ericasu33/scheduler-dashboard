# Interview Scheduler Dashboard
Works with the [Interview Scheduler App](https://github.com/ericasu33/scheduler)

It has 4 panels that shows the following based on the Scheduler App:
- Total Interviews,
- Least Popular Time Slot,
- Most Popular Day,
- Interviews Per Day

This is a very simple app created to get more familiar with using Class based component React.

Web Sockets are implemented as well.

In order to see live updates, Scheduler App Server need to be running as well.

If you need a server & database with mock data, you can get it from
[Interview Scheduler Api](https://github.com/ericasu33/scheduler-api)

This project is based off of this [repository](https://github.com/lighthouse-labs/scheduler-dashboard)

Deployed Website:
- [Interview Scheduler](http://scheduler-reactjs.netlify.com/)
- [Interview Scheduler Dashboard](https://scheduler-dashboard-reactjs.netlify.app/)

## Screenshots
!["Homepage"]()

!["Panel"](https://github.com/ericasu33/scheduler-dashboard/blob/master/docs/Interview%20Scheduler%20Dashboard1.png?raw=true)
## Setup

Install dependencies with `npm install`.

### Running Webpack Development Server

```sh
npm start
```

### Running Jest Test Framework

```sh
npm test
```

## Dependencies
- Axios ^0.19.0
- Classnames ^2.2.6
- Lodash ^4.17.15
- React ^16.8.6
- React-dom ^16.8.6
- React-scripts ^3.0.01