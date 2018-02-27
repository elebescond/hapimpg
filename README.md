# hapimpg

    npm install
    npm start

    curl http://localhost:3000/hello/raoul

    curl -d '{"email": "test@test.com", "mdp": "123456"}' -H "Content-Type: application/json" -X POST http://localhost:3000/test

    curl -d '[3,6,9,2,5,8,1,4,7,0]' -H "Content-Type: application/json" -X POST http://localhost:3000/cache -v