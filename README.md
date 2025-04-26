

# 🌍 CityExplorer

**CityExplorer** es una aplicación Angular diseñada para explorar lugares turísticos, gestionar usuarios y procesar pagos de manera eficiente. Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) versión 19.0.4.

---

## 📦 Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- **Node.js**: Versión 18.x o superior. Puedes descargarlo desde [aquí](https://nodejs.org/).
- **npm**: Viene incluido con Node.js.
- **Visual Studio Code**: Un editor de código popular. Descárgalo desde [aquí](https://code.visualstudio.com/).

---

## 🛠 Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/CityExplorer.git
cd CityExplorer
```

### 2. Instalar dependencias

Ejecuta los siguientes comandos para instalar las dependencias necesarias:

```bash
npm install
npm install sweetalert2
npm install @stripe/stripe-js
npm install bootstrap
```

> **Nota:** Asegúrate de que todas las dependencias se instalen correctamente antes de continuar.

### 3. Iniciar el servidor de desarrollo

Para iniciar el servidor de desarrollo localmente, ejecuta:

```bash
ng serve --ssl true --ssl-key ssl.key --ssl-cert ssl.crt
```

Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a:

```
http://localhost:4200/
```

La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.

> **Consejo:** Si no necesitas HTTPS durante el desarrollo, puedes omitir las opciones `--ssl`, `--ssl-key` y `--ssl-cert`.

---

## 🏗 Construcción del proyecto

Para compilar el proyecto, ejecuta:

```bash
ng build
```

Los artefactos de compilación se almacenarán en el directorio `dist/`. Por defecto, la compilación de producción optimiza tu aplicación para mejorar el rendimiento y la velocidad.

> **Consejo:** Para una compilación de producción, utiliza:
>
> ```bash
> ng build --configuration production
> ```

---

## 🧪 Ejecución de pruebas unitarias

Para ejecutar las pruebas unitarias con el test runner [Karma](https://karma-runner.github.io), usa:

```bash
ng test
```

Este comando iniciará Karma y ejecutará todas las pruebas unitarias definidas en tu proyecto.

---

## 🌐 Ejecución de pruebas end-to-end (e2e)

Para ejecutar pruebas end-to-end (e2e), usa:

```bash
ng e2e
```

> **Nota:** Angular CLI no incluye un framework de pruebas e2e por defecto. Puedes elegir uno como [Protractor](https://www.protractortest.org/) o [Cypress](https://www.cypress.io/) según tus necesidades.

---

## 🛠 Generación de código (Scaffolding)

Angular CLI incluye herramientas poderosas para generar componentes, servicios, módulos y más. Por ejemplo, para crear un nuevo componente, ejecuta:

```bash
ng generate component component-name
```

Para ver una lista completa de los esquemas disponibles (como `components`, `directives`, `pipes`, `services`, etc.), usa:

```bash
ng generate --help
```

Esto te permitirá explorar todas las opciones de generación de código.

---

## 📚 Recursos adicionales

- **SweetAlert2**: Una librería para mostrar alertas modernas y personalizadas. Documentación oficial [aquí](https://sweetalert2.github.io/).
- **Stripe.js**: Una librería para integrar pagos con Stripe. Documentación oficial [aquí](https://stripe.com/docs/js).
- **Bootstrap**: Un framework CSS para diseño responsivo. Documentación oficial [aquí](https://getbootstrap.com/).
- **Angular CLI Overview and Command Reference**: Para obtener más información sobre cómo usar Angular CLI, incluidas referencias detalladas de comandos, visita la [documentación oficial](https://angular.dev/tools/cli).

---

## 🔧 Configuración adicional

### Variables de entorno

Este proyecto utiliza variables de entorno para configuraciones específicas. Asegúrate de configurar correctamente los archivos `.env` o ajustar las variables directamente en el código si es necesario.

### Integración con APIs externas

Si tu aplicación se conecta a APIs externas (por ejemplo, Stripe para pagos o una API RESTful para gestión de lugares turísticos), asegúrate de configurar las claves de API en el archivo de entorno correspondiente.

---

## 👨‍💻 Autor

Este proyecto fue desarrollado por:

- **Equipo de City Explorer, conformado por:
 Miguel Angel Díaz Rivera(Lider del proyecto),
Oscar Martin Espinosa Romero(Administrador de Base de Datos
Alexis Armando Peralta Ramírez(Diseñador),
José Manuel García Morales(Desarrollador),

)**

Este es  un proyecto académico o personal diseñado para explorar las capacidades de Angular en combinación con tecnologías modernas como **Stripe** para pagos y APIs RESTful para la gestión de datos.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

---


