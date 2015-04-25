docker build -t ingr-api .
docker tag -f ingr-api tutum.co/alexanderczigler/ingr-api
docker push tutum.co/alexanderczigler/ingr-api