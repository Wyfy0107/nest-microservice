#!/bin/bash

cd client && docker build . -t wyfy/nest-ms-client:v2 &
cd microservices/user && docker build . -t wyfy/nest-ms-user:v5 &
cd microservices/mail && docker build . -t wyfy/nest-ms-mail:v2
