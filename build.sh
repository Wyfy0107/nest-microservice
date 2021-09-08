#!/bin/bash

cd client && docker build . -t wyfy/nest-ms-client &
cd microservices/user && docker build . -t wyfy/nest-ms-user &
cd microservices/mail && docker build . -t wyfy/nest-ms-mail
