# ChatNow

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Tabla de contenidos

- [ChatNow](#ChatNow)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Tecnologías aplicadas](#tecnologías-aplicadas)
  - [Requerimientos](#requerimientos)
  - [Instalación local](#instalación-local)
  - [Uso](#uso)
  - [Licencia](#licencia)
  - [Enlaces](#enlaces)

<div style="display:flex;align-items:center;justify-content:space-between;width=100%;margin-bottom:2rem;">
    <h2>El proyecto</h2>
    <img src="https://snipboard.io/ISDFwv.jpg">
</div>

<a id="proyecto"></a>

La aplicación consiste en una aplicación web de mensajería instantánea (como Whatsapp), en la que un usuario se podrá registrar, iniciar sesión, agregar contactos y mandar mensajes a estos mismos. 

## Tecnologías aplicadas
<a id="tecnologias"></a>

- Front-end

    - ![](https://snipboard.io/2pNcs8.jpg)
    - ![](https://snipboard.io/qGdh4B.jpg)
- Base de datos
    
    - ![](https://snipboard.io/wNQyUY.jpg)
    - ![](https://snipboard.io/iMQFXS.jpg)
    - ![](https://snipboard.io/wp7dIz.jpg)
- Back-end

    - ![](https://snipboard.io/UZBlRz.jpg)
- Fullstack

    - ![](https://snipboard.io/d5Wb9v.jpg)
    - ![](https://snipboard.io/BNKUYn.jpg)

- Testing

    - ![](https://snipboard.io/JXt7s3.jpg)
    - ![](https://snipboard.io/3je6hP.jpg)
- Otras herramientas

    - ![](https://snipboard.io/PTSAlQ.jpg)
    - ![](https://snipboard.io/PM1Rb7.jpg)
    - ![](https://snipboard.io/MIafR5.jpg)
- Despliegue

    - ![](https://snipboard.io/laCEi0.jpg)
    - ![](https://snipboard.io/ai5t3n.jpg)
- Control de versiones 

    - ![](https://snipboard.io/yv80MF.jpg)
- Herramientas externas

    - ![](https://snipboard.io/ZUwQex.jpg)
    - ![](https://snipboard.io/mg6kEu.jpg)
    - ![](https://snipboard.io/OpzGkE.jpg)

## Requerimientos
<a id="requerimientos"></a>

- Node v18.14.2
- npm 8.19.2

## Instalación local
<a id="instalacion"></a>

Primeramente debemos clonar el repositorio para tenerlo de manera local:

```bash=
$ git clone https://github.com/Sstark97/chat-now.git
```
Debemos tener en cuenta que nuestra aplicación hace uso de variables de entorno, así que para poder usar nuestra Base de Datos de manera local tendremos que crear un fichero <span style="color:#6f11eb">`.env`</span> en el directorio raíz, siguiendo la siguiente estructura:

```js=
DATABASE_URL=
NEXT_PUBLIC_SOCKET_SERVER=

NEXTAUTH_URL=
NEXTAUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

Una vez lo tengamos listo, tendremos que instalar las dependencias para que nuestra aplicación pueda funcionar, para ello tendremos que ejecutar <span style="color:#6f11eb">`npm`</span>:

```bash=
$ npm install
```

Tras eso, podemos ejecutar nuestra aplicación de la siguiente manera:

```bash=
$ npm run dev
```

Con todo esto ya estaríamos listos para usar nuestra aplicación.

--- 

En caso de que queramos crear la documentación, tan solo tendremos que ejecutar el siguiente comando en la carpeta de nuestro proyecto:

```bash=
$ npm run docs
```

## Uso
<a id="uso"></a>

La aplicación trata de un chat de mensajería instantánea en el que diferentes personas podrán registrarse e iniciar sesión para, a continuación, acceder a una pantalla con todos los posibles chats que tengan.

![](https://snipboard.io/0oyvz7.jpg)

Los usuarios podrán hablar con sus contactos.

![](https://snipboard.io/YpMyxK.jpg)

También se podrá agregar nuevos contactos y editar sus datos.

![](https://snipboard.io/QNCF1w.jpg)

## Licencia
<a id="licencia"></a>

Distribuido bajo licencia MIT.

## Enlaces
<a id="enlaces"></a>

[Enlace a la web](https://chat-now-psi.vercel.app/)
[Enlace a la documentación]()
