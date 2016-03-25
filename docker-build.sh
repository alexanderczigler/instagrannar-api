#!/bin/sh
docker build -t instagrannar-api .
docker tag -f instagrannar-api instagrannar/api
docker push instagrannar/api
