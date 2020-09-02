# AirCnC

Air Code and Coffee. Application where companies can make their space available for other developers to work on, creating a connection environment that can add both to the developer and to the company that discovers new talents to compose its team.

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Felps03/aircnc

# Go into the repository
$ cd aircnc

# Go into backend
$ cd backend

# Start the docker-compose
$ docker-compose up -d --build

# Install dependencies
$ npm i

# Start the backend server
$ npm run dev
```

### API

> Project Status: In development :warning:

- User
  - [X] User registration (email)
  - [ ] User Edit
  - [ ] User Delete
  - [ ] User List

- Spot
  - [X] Spot registration
  - [X] Spot List
  - [ ] User Edit
  - [ ] User Delete

- Booking
  - [X] Booking registration
  - [ ] Spot List
  - [ ] User Edit
  - [ ] User Delete

- Dashboard
  - [X] Dashboard registration
  - [ ] Spot List
  - [ ] User Edit
  - [ ] User Delete


## Running the tests :memo:

```
$ npm run test
```

## Database :floppy_disk:

The database used in this application was the [Mongodb](https://www.mongodb.com/).

## Controllers

### Each method has a responsibility:

- `index` : **index** List all records;
- `show`  : **show** Display a record;
- `store` : **store** Create new record;
- `update`  : **update** Change a record;
- `destroy` : **destroy** Remove a record;
