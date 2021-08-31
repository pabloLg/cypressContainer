## Readme
Cypress sample project with cucumber, allure and cucumber reports. 

docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:7.7.0 run


docker build -t cypress . 
docker run -v $PWD:/app/cypress/reports -w /app/cypress/reports cypress
docker rm $(docker ps --filter status=exited -q)