# Dockerized Express on Azure

```
$ docker-compose up --build
$ docker tag azuredockerexpress_server or13/azuredockerexpress_server
$ docker push or13/azuredockerexpress_server
```

https://hub.docker.com/r/or13/azuredockerexpress_server/

https://docs.microsoft.com/en-us/azure/app-service-web/app-service-linux-using-custom-docker-image

https://azure-docker-express.azurewebsites.net/

### Managing With App Settings

You can set environment variables for the container in portal by using app settings.

Azure Key Vault configs can be passed this way for further extension.