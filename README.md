# Dockerized Express on Azure

```
$ docker-compose up --build
$ docker tag azuredockerexpress_express or13/azuredockerexpress_express
$ docker push or13/azuredockerexpress_express
```

https://hub.docker.com/r/or13/azuredockerexpress_express/

https://docs.microsoft.com/en-us/azure/app-service-web/app-service-linux-using-custom-docker-image

https://azure-docker-express.azurewebsites.net/

### Managing Secrets with Azure Key Vault

Create an Azure Key Vault in portal is easy.

Using it is terrible.

https://www.npmjs.com/package/azure-keyvault
https://docs.microsoft.com/en-us/azure/key-vault/key-vault-use-from-web-application
https://blogs.msdn.microsoft.com/kaevans/2016/10/31/using-azure-keyvault-to-store-secrets/

Long story short, they make you use active directory and register your app all over the place...

All while you have the power to delete everything from your portal login...

