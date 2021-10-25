<!--


---
 Using SSL in local development
excerpt: Using SSL in local development
date: 2020-07-29 00:59 +0530
updated: 2020-07-29 00:59 +0530
categories: development
tags: rails, mkcert, cra, react
image: /assets/images/ssl_in_development/title.png
---

-->
<!DOCTYPE html>
<html>

<head>
  <title>basic-git-workflow</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/bootstrap.grid.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="./css/bootstrap.css.map">
  <link rel="stylesheet" href="./css/blog-home.css">
  <link rel="stylesheet" href="./css/prism.css">
  <script async defer src="./css/prism.js"></script>
</head>

<body>

The first step to using SSL on local development is to generate a self-signed certificate on our development machine. 
If you are familiar with `openssl`, you can use it to generate the certificate. But it's kinda tricky to get valid certificates.
The easiest way is to use [mkcert](https://github.com/FiloSottile/mkcert) to generate self-signed certificates

## Install & setup `mkcert`

On the mac, we can use Homebrew to install it.

```
brew install mkcert
brew install nss # for firefox
```

`nss` is only required if you are using Firefox

If you are on Ubuntu, first install the `certutil`

```
sudo apt install libnss3-tools
```

Then using [Linuxbrew][linuxbrew], install mkcert

```
brew install mkcert
```

Once the installation is successful, we need to install the `rootCA` by running

```
mkcert -install
```

Next, we can generate certificates for our projects

```
mkdir ssl/
mkcert -key-file ssl/key.pem -cert-file ssl/cert.pem "myapp.local"
```


{: style="text-align: center"}
![mkcert](/assets/images/ssl_in_development/mkcert.png)

Now we have the certificate and the key generated in the `ssl/` folder. 
Also make sure to add the domain into `/etc/hosts`, in our case `myapp.local`

```
# /etc/hosts

127.0.0.1  myapp.local
```

In the following sections, we will look into how we can use the generate certificate with our different applications.

## Create React App (CRA)

For [CRA][cra], we can specify the certificate and key in the `.env` file.
Add following into `.env.local` or `.env.development`

```env
SSL_CRT_FILE=ssl/cert.pem  
SSL_KEY_FILE=ssl/key.pem  
HTTPS=true
```

and restart your server.

## Jekyll

For Jekyll, we can specify the certificates using `--ssl-key` & `--ssl-cert` options

```sh
jekyll serve -D --future --ssl-key ssl/key.pem --ssl-cert ssl/cert.pem
```

## Rails

For rails, we have to do some config changes

In `webpacker.yml`, toggle `https` to `true` under `development -> dev_server`.

```yml
# config/webpacker.yml

development:
  <<: *default
  # ...
  # ...
  

  # Reference: https://webpack.js.org/configuration/dev-server/
  dev_server:
    https: true
```

If you are using a custom local domain like, `myapp.local` make sure to add that into `config.hosts` in `config/environments/development.rb`

```rb
# config/enviroments/development.rb

Rails.application.configure do
  #...
  #...

  config.hosts << "myapp.local"
end
```

The local domain might be different for teammates, it's better to accept the custom domain using `ENV`.
Add `HOST` to `.env.local`

```env
# .env.local

HOST=myapp.local
```

and use the `HOST` env in the config like below


```rb
# config/environments/development.rb

Rails.application.configure do
  #...
  #...

  config.hosts << ENV.fetch("HOST")
end
```

Next, we can start the `rails server` using the `-b` option.

```shell
rails s -b "ssl://127.0.0.1:3000?key=ssl/key.pem&cert=ssl/cert.pem"
```

{: style="text-align: center"}
![myapp.local](/assets/images/ssl_in_development/myapp-local.png)

Hope that helped.





[linuxbrew]: https://docs.brew.sh/Homebrew-on-Linux
[cra]: https://create-react-app.dev/
