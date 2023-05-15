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
    <img src="https://i.ibb.co/M5pYPY0/icon-256x256.png">
</div>

<a id="proyecto"></a>

La aplicación consiste en una aplicación web de mensajería instantánea (como Whatsapp), en la que un usuario se podrá registrar, iniciar sesión, agregar contactos y mandar mensajes a estos mismos. 

## Tecnologías aplicadas
<a id="tecnologias"></a>

- Front-end

    -  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
    -  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- Base de datos
    
    -  ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
    -  ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
    -  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
- Back-end

    -  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- Fullstack

    -  	![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
    -  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
    -  ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
- Testing

    - ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
    - ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
- Reglas de estilo

    - ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
    - ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
- Despliegue

    - ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
    - ![DigitalOcean](https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white)
- Control de versiones 

    - ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
    - ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
- Herramientas externas

    - ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
    - ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
    - ![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)

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

![](https://i.ibb.co/BntpHmV/captura1.png)

Los usuarios podrán hablar con sus contactos.

![](https://i.ibb.co/6brp9Dx/YpMyxK.png)

También se podrá agregar nuevos contactos y editar sus datos.

![](https://i.ibb.co/rZKt8q3/captura3.png)

## Licencia
<a id="licencia"></a>

Distribuido bajo licencia MIT.

## Enlaces
<a id="enlaces"></a>

[Enlace a la web](https://chat-now-psi.vercel.app/)
[Enlace a la documentación](https://chatnownotion.super.site/)
