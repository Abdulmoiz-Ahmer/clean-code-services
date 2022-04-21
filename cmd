docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)


docker-compose -f server.yaml up