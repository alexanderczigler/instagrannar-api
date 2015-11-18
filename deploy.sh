docker build -t ingr-api .
docker tag -f ingr-api tutum.co/instagrannar/ingr-api
docker push tutum.co/instagrannar/ingr-api
