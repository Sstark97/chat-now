# ChatNow

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![CodeFactor](https://www.codefactor.io/repository/github/saracs21/high5-/badge)](https://www.codefactor.io/repository/github/saracs21/high5-)

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
    <img src="/public/src/icon.png">
</div>

<a id="proyecto"></a>

La aplicación consiste en una aplicación web de mensajería instantánea (como Whatsapp), en la que un usuario se podrá registrar, iniciar sesión, agregar contactos y mandar mensajes a estos mismos. 

## Tecnologías aplicadas
<a id="tecnologias"></a>

- Front-end

    - ![](/public/badges/react.png)
    - ![](/public/badges/tailwind.png)
- Base de datos
    
    - ![](/public/badges/postgres.png)
    - ![](/public//badges/prisma.png)
    - ![](/public/badges/supabase.png)
- Back-end

    - ![](/public/badges/express.png)
- Fullstack

    - ![](/public/badges/next.png)
    - ![](/public/badges/typescript.png)

- Testing

    - ![](/public/badges/jest.png)
    - ![](/public/badges/testingLibrary.png)
- Otras herramientas

    - ![](/public/badges/eslint.png)
    - ![](/public/badges/socket.png)
    - ![](/public/badges/vite.png)
- Despliegue

    - ![](/public/badges/vercel.png)
    - ![](/public/badges/docker.png)
    - ![](/public/badges/digitalOcean.png)
- Control de versiones 

    - ![](/public/badges/github.png)
- Herramientas externas

    - ![](/public/badges/figma.png)
    - ![](/public/badges/trello.png)
    - ![](/public/badges/notion.png)

## Requerimientos
<a id="requerimientos"></a>

- 

## Instalación local
<a id="instalacion"></a>

Primeramente debemos clonar el repositorio para tenerlo de manera local:

```bash=
$ git clone https://github.com/Sstark97/chat-now.git
```
Debemos tener en cuenta que nuestra aplicación hace uso de variables de entorno, así que para poder usar nuestra Base de Datos de manera local tendremos que crear un fichero <span style="color:#6f11eb">`.env`</span> en el directorio raíz, siguiendo la siguiente estructura:

```js=
¿?
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

![](https://hackmd.io/_uploads/Sk6og09Eh.png)

Los usuarios podrán hablar con sus contactos.

// Captura de un CHAT

También se podrá agregar nuevos contactos y editar sus datos.

![](https://hackmd.io/_uploads/S1QxZC9Eh.png)

## Licencia
<a id="licencia"></a>

Distribuido bajo licencia MIT.

## Enlaces
<a id="enlaces"></a>

[Enlace a la web](https://chat-now-psi.vercel.app/)
[Enlace a la documentación]()
