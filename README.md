## Project Structure

- src
  - common
    - helper
      - env-validate.ts
  - constants
  - decorators
    - role.decorators.ts
    - entities
      - migrations
      - user.entity.ts
    - exception
      - custom-exception.ts
    - graphql
      - input
        - files
      - schema
        - files
    - guards
      - role.guard.ts
    - modules
      - moduleFolder
      - user
        - user.module.ts
        - user.resolver.ts
        - user.controller.ts
        - user.service.ts
    - providers
      - apiFiles
    - types
      - common.ts
- .env
- docker-compose.yml
- dockerfile
- typeorm.config.ts

## Naming convention
  every class must follow by purpose file eg. service => user.service.ts, entity => user.entity.ts.

  and also interface when an interface must have prefix like I eg. interface IUser.

  enum use for related constant value eg. user has 2 role (ADMIN, OPERATOR).

  we dont use "" for constants value, we create constant variable instead eg. const <u>CRON_JOB_TIME</u> = '*/10 * * * * *'.

## Installation
```
$ yarn or npm install
```

## To run
```
$ yarn permutation or npm run permutation
$ yarn oddint or npm run oddint
$ yarn smiley or npm run smiley
```

## Testing
```
$ yarn test or npm run test
```