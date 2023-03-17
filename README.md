# Leapsome Case Study

Welcome and thank you for taking the time to prepare a submission for our case study! The code in this repository is a strongly simplified application to give and show feedback to other users.

## Prerequisites

To continue you need to have the following installed:
- NodeJS >= 16.4.2
- Docker

## Tasks

When working on the tasks you are free to modify any existing code and merge into branch(es) or create pull requests for feature branches if required. (Example: To improve testability) You can further decide freely on the frameworks and tools you pick with the only restriction being that no other programming language other than JavaScript/TypeScript can be used. We hope you enjoy this challenge and be sure to set yourself a time limit of 2-4 hours. If not all tasks could be tackled and you are running out of time, let us know where you spend most time and which parts could not be tackled. We would also love to hear which future improvements you would make with more time at hand and your overall feedback to this challenge.

1. Add `E2E test(s)` to check the functionality from the perspective of a real user
2. Add `API test(s)` for the `"[POST] /feedback"` endpoint
3. `Investigate and fix a bug` which got reported: The signed in user should not be able to give feedback to their own account

## Local Setup

```
cp .env.example .env
npm install
```

Database:
```
docker-compose up
```

First time setup:
```
npm run db:migrate
npm run db:seed // for setting up test data and users
```

Service + Client:
```
npm run dev
```

## Submission Comments

Feel free to add your thoughts / comments here
