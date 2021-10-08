#!/bin/bash

minikube start -p istio-test --vm=true --driver=hyperkit --cpus=4 --memory=8384

kubectl label namespace default istio-injection=enabled
istioctl install -y