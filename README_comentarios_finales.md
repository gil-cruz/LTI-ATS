# Reporte de Implementación ATS

## 1. Tecnologías Usadas
### Frontend

- Next.js 14 con TypeScript para una aplicación web moderna y tipada

- TailwindCSS para estilos modernos y responsivos

- Sistema de rutas basado en el App Router de Next.js

 ### Backend

- FastAPI con Python 3.11 para una API rápida y moderna

- PostgreSQL como base de datos principal

- Docker y Docker Compose para contenerización

### Infraestructura

- Docker para garantizar consistencia entre ambientes

- Sistema de control de versiones Git

- Arquitectura Hexagonal y DDD para organización del código
 

## 2. Principales Desafíos

1. **Compatibilidad de Versiones**   

- Next.js 14 requiere Node.js ≥ 18.17.0   

- Conflictos con versiones antiguas de Node.js instaladas previamente

2. **Configuración de Docker**   

- Problemas con permisos y espacio en volúmenes de PostgreSQL  por la limitación de espacio a Docker  

- Errores en la inicialización de la base de datos. No se estaba creando un usuario para la aplicación, se estaba mezclando con el usuario admin de PostgreSQL

3. **Estructura del Proyecto**   

- Organización correcta de archivos en Next.js 14 App Router. En ocasiones no le configuré el contexto y me cambiaba la estructura del proyecto

- Implementación de la arquitectura hexagonal en FastAPI

## 3. Soluciones a los problemas presentados

1. **Gestión de Versiones**   

- Instalación de nvm para manejar múltiples versiones de Node.js   

- Actualización a la versión LTS más reciente

2. **Optimización de Docker**   

- Configuración explícita de volúmenes y permisos, se amplió el espacio designado a Docker

- Implementación de healthchecks para servicios   

- Limpieza y reconstrucción de contenedores
 

3. **Mejoras Arquitectónicas**   

- Estructura clara de directorios siguiendo convenciones de Next.js  pero siempre mandando como contexto el README.md donde tenía definida la estructura del proyecto.

- Implementación de bounded contexts en el backend. Se hizo meta propmpting para enriquecer el archivo README.md con las características que se requerían respecto a la arquitectura hexagonal aplicada al negocio, identificando los `Bounded Context`

## Conclusión: 

El contexto lo es todo. Comenzar por agregarle información útil al README sobre la arquitectura y el patrón de diseño a seguir, complementándolo con las características del patrón de diseño aplicadas al problema de negocio fue fundamental para que las respuestas fueran adecuadas y sobre la marcha ir complementando el README con la estructura del proyecto, para que  en cada petición al LLM  se le pasara el README y pudiera *recordar* los lineamientos definidos, sobre todo al principio, cuando se estaba definiendo la estructura inicial, posteriormente no era necesario pasarle el README o todo el `codebase` como contexto, bastaba con identificar los archivos clave, las líneas específicas o incluso la salida de error en la terminal, para que sus respuestas fueran acertadas.