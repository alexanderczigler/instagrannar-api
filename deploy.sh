docker build -t ingr-api .
docker tag -f ingr-api tutum.co/ilix/ingr-api
docker push tutum.co/ilix/ingr-api
