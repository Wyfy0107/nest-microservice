# NestJS Microservices

This project is an attempt to learn how to create a microservice architecture with NestJS using Kubernetes. The project was built for experiment and was run on Minikube

## Components

- Client: this is a client service that will be exposed so that we can make request to. This service will talk to mail service directly
- Mail: this service will talk to user service
- User: this service will response to mail service

## Service Discovery

Service discovery is the way that a pod can discover how to communicate with another pod. This project is using Hashicorp Consul to create a Consul server for discoveries. Each pod will be connected will a sidecar proxy that handles the communication between pods

## Kubernetes

In the k8s directory are the configuration files for the k8s cluster. `config.yaml` will configure Consul on our cluster. `deployment.yaml` contains all the pods, and services creation in the cluster

## Run the project

1. Start Minikube, run: `./start.sh`
2. Install Consul to our cluster, run: `helm install -f k8s/config.yaml consul hashicorp/consul`
3. Deploy our pods and services: `kubectl apply -f k8s/deployment.yaml`
4. Expose our client service to host: `./port-forward.sh`

After this, run: `curl localhost:3000` and you should see a message from our mail and user service
