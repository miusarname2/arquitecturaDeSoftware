# Arquitecturas de Software

Aunque no hay de por si una fuente que defina la arquitectura de software, tomare alguna definiciones más tomadas en la industria:

# Definiciones de Arquitectura de Software

## Clements [Cle96a]

Clements [Cle96a] ofrece una definición reconocida de Arquitectura de Software (AS):

> La AS es, a grandes rasgos, una vista del sistema que incluye los componentes principales del mismo, la conducta de esos componentes según se la percibe desde el resto del sistema y las formas en que los componentes interactúan y se coordinan para alcanzar la misión del sistema. La vista arquitectónica es una vista abstracta, aportando el más alto nivel de comprensión y la supresión o diferimiento del detalle inherente a la mayor parte de las abstracciones.

## David Garlan [Gar00]

David Garlan [Gar00] proporciona una definición más amplia de Arquitectura de Software:

> La AS constituye un puente entre el requerimiento y el código, ocupando el lugar que en los gráficos antiguos se reservaba para el diseño.

## IEEE Std 1471-2000

La definición "oficial" de Arquitectura de Software, según el documento de IEEE Std 1471-2000 y adoptada por Microsoft, es la siguiente:

> La Arquitectura de Software es la organización fundamental de un sistema encarnada en sus componentes, las relaciones entre ellos y el ambiente y los principios que orientan su diseño y evolución.

Sin embargo estas son solo algunas de las tantas que hay pues el total de las definiciones rondan los 3-4 digitos

# Patrones arquitectonicos

## ¿Que es?

En el contexto de la Arquitectura de Software (AS) según el estándar IEEE 1471-2000, se define como la organización fundamental de un sistema incorporando sus componentes, las relaciones entre ellos y el ambiente, y los principios que orientan su diseño y evolución.

Los patrones de arquitectura buscan abordar desafíos fundamentales en el diseño de sistemas. Estos patrones se enfocan en cuestiones de adaptabilidad de requerimientos, rendimiento, modularidad y acoplamiento de los componentes de una aplicación. A diferencia de los patrones de diseño, los patrones de arquitectura operan en un nivel más alto y están relacionados con la interacción de objetos.

Los patrones de arquitectura representan llamadas entre objetos, decisiones y criterios arquitectónicos, así como la manera de empaquetar funcionalidades de una aplicación. Estos patrones proveen un conjunto de subsistemas predefinidos, especifican responsabilidades y ofrecen reglas y guías para organizar las relaciones entre estos subsistemas.

Algunos ejemplos de patrones de arquitectura incluyen:

1. **Patrón Layers:** Este patrón descompone la aplicación en un conjunto de capas jerárquicas y autónomas. Estas capas colaboran para proporcionar servicios a la capa superior siguiente.

2. **Patrón Broker:** Utilizado en sistemas distribuidos, este patrón organiza componentes débilmente acoplados que interactúan entre sí invocando servicios remotos. Es particularmente útil en arquitecturas orientadas a servicios (SOA).

3. **Patrón MVC - Modelo Vista Controlador:** Este patrón mejora la interacción entre el usuario final de una aplicación y la forma en que se comunica con el servidor. MVC divide la aplicación en tres áreas: procesamiento, salida y entrada, utilizando las abstracciones modelo, vista y controlador.

Los patrones de arquitectura desempeñan un papel crucial en la creación de sistemas sólidos y flexibles.

## Top 10 patrones de arquitectura que se PUEDEN llegar a tratar en este documento

1. Modelo-vista-controlador
2. Patrón cliente-servidor
3. Patrón de bus de evento
4. Patrón de capas
5. Patrón de intérprete
6. Patrón de maestro-esclavo
7. Patrón de pizarra

### 1. Modelo-vista-controlador (MVC)

El Patrón Modelo-Vista-Controlador, comúnmente conocido como MVC, es una arquitectura que divide una aplicación interactiva en tres partes distintas:

1. **Modelo:** Contiene la funcionalidad y los datos básicos de la aplicación.
2. **Vista:** Muestra la información al usuario. Puede definirse más de una vista para presentar los datos de diferentes maneras.
3. **Controlador:** Gestiona la entrada del usuario y coordina la comunicación entre el modelo y la vista.

El propósito principal de esta división es separar las representaciones internas de la información de las formas en que se presenta y acepta la información del usuario. Este enfoque ayuda a desacoplar los componentes de la aplicación, lo que a su vez permite la reutilización eficiente del código y facilita el mantenimiento.

**Uso común:**

El patrón MVC se utiliza en una variedad de aplicaciones, especialmente en aquellas diseñadas para la World Wide Web. Es ampliamente adoptado en los principales lenguajes de programación y en marcos web como Django y Rails, donde facilita la construcción de aplicaciones robustas y escalables.

<center>

![Imagen de muestra(MVC)](https://miro.medium.com/v2/resize:fit:720/format:webp/1*OP0CS6O5Sb66jpc-H-IuRQ.png)

</center>

### 2. Patrón Cliente-Servidor

El Patrón Cliente-Servidor consiste en dos partes esenciales: un servidor y múltiples clientes. El componente del servidor ofrece servicios a múltiples componentes del cliente. Los clientes solicitan servicios al servidor, y este responde proporcionando servicios relevantes a esos clientes. Además, el servidor se mantiene en un estado de escucha constante para atender las solicitudes de los clientes.

**Uso Común:**

Este patrón se utiliza ampliamente en aplicaciones en línea, como correo electrónico, uso compartido de documentos y banca, donde la arquitectura cliente-servidor facilita la comunicación y la gestión de recursos de manera eficiente.

### 3. Patrón de Bus de Eventos

El Patrón de Bus de Eventos se centra principalmente en la gestión de eventos y consta de cuatro componentes principales: la fuente de evento, el escucha de evento, el canal y el bus de evento. En este patrón, las fuentes de eventos publican mensajes en canales específicos en el bus de eventos, mientras que los escuchas se suscriben a canales particulares. Los escuchas son notificados de los mensajes que se publican en los canales a los que se han suscrito previamente.

**Uso Común:**

Este patrón es ampliamente utilizado en el desarrollo de aplicaciones para Android y en servicios de notificación, donde la gestión de eventos y la comunicación asincrónica son fundamentales para la interacción eficiente y la notificación de eventos.

Este README explora el Patrón de Bus de Eventos y cómo se aplica en diversos contextos de desarrollo de software.

### 4. Patrón de Capas

El Patrón de Capas se utiliza para estructurar programas que pueden dividirse en grupos de subtareas, cada una ubicada en un nivel específico de abstracción. Cada capa proporciona servicios a la capa superior, lo que facilita la organización y el flujo de información dentro de la aplicación.

Las cuatro capas más comunes que se encuentran en un sistema de información general son las siguientes:

1. **Capa de Presentación (UI):** Responsable de la interfaz de usuario y la presentación de la información al usuario.

2. **Capa de Aplicación (Capa de Servicio):** Gestiona la lógica de la aplicación y coordina las acciones entre la capa de presentación y la capa de lógica de negocios.

3. **Capa de Lógica de Negocios (Capa de Dominio):** Contiene la lógica empresarial y las reglas del dominio de la aplicación.

4. **Capa de Acceso a Datos (Capa de Persistencia):** Se encarga de la interacción con la base de datos y la gestión de datos.

**Uso Común:**

Este patrón es ampliamente utilizado en aplicaciones de escritorio generales y aplicaciones web de comercio electrónico, donde la separación de las responsabilidades en capas facilita la mantenibilidad y la escalabilidad de la aplicación.

### 5. Patrón de Intérprete

El Patrón de Intérprete se emplea para diseñar un componente que interpreta programas escritos en un lenguaje específico. Su enfoque principal es definir cómo evaluar las líneas de programas, también conocidas como sentencias o expresiones escritas en un idioma particular. En esencia, este patrón implica la creación de una clase para cada símbolo del lenguaje.

**Uso Común:**

Este patrón se aplica con frecuencia en lenguajes de consulta de bases de datos como SQL, donde se interpretan y ejecutan consultas complejas. También se utiliza en idiomas utilizados para describir los protocolos de comunicación, permitiendo la interpretación y procesamiento de mensajes y comandos específicos del protocolo.

### 6. Patrón Maestro-Esclavo

El Patrón Maestro-Esclavo consta de dos partes esenciales: el maestro y los esclavos. El componente maestro tiene la responsabilidad de distribuir tareas entre los componentes esclavos, que son idénticos, y calcular el resultado final a partir de los resultados que devuelven los esclavos.

**Uso Común:**

Este patrón encuentra aplicación en diversos contextos, como:

- En la replicación de bases de datos, donde la base de datos maestra se considera la fuente autorizada y las bases de datos esclavas se sincronizan con ella.

- En sistemas informáticos que gestionan periféricos conectados a un bus, como unidades maestras y esclavas, donde el maestro coordina las operaciones y el flujo de datos entre los esclavos.

### 7 . Patrón de Pizarra

El Patrón de Pizarra es una estrategia útil para abordar problemas para los cuales no se conocen soluciones deterministas. Este patrón se compone de tres componentes principales:

1. **Pizarra:** Es una memoria global estructurada que contiene objetos del espacio de solución.

2. **Fuente de Conocimiento:** Son módulos especializados con su propia representación y conocimiento.

3. **Componente de Control:** Se encarga de seleccionar, configurar y ejecutar los módulos especializados.

Todos los componentes tienen acceso a la pizarra. Pueden producir nuevos objetos de datos que se agregan a la pizarra. Los componentes buscan tipos específicos de datos en la pizarra, y pueden encontrarlos a través de la coincidencia de patrones con la información en la fuente de conocimiento existente.

**Uso Común:**

Este patrón se aplica en diversos campos, incluyendo:

- Reconocimiento de voz, donde se requiere interpretar señales de audio y convertirlas en texto o comandos entendibles.

- Identificación y seguimiento de vehículos, como en sistemas de transporte o logística.

- Identificación de la estructura proteica en biología y química.

- Interpretación de señales de sonar en aplicaciones marítimas y submarinas.

Este README explora el Patrón de Pizarra y su aplicación en diferentes contextos de desarrollo y resolución de problemas.

# Que es un Patron de Diseño

Muy por "encima" un patron de diseño es :

Un patrón de diseño es una configuración repetitiva que aborda un desafío de diseño genérico dentro de un entorno específico.

**Características de los Patrones de Diseño**

- Tienen un alcance a nivel de mediana escala.
- Son independientes del lenguaje de programación utilizado.
- No alteran la estructura general del software.
- Ejercen su influencia en un módulo o subsistema específico.

_Nota: Los patrones de diseño fueron popularizados principalmente a través del libro "Design Patterns"_.

<center>

![Imagen de muestra(MVC)](https://scontent.fbga3-1.fna.fbcdn.net/v/t1.6435-9/117387421_183427829837460_6419369328557154213_n.png?_nc_cat=110&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=4OPYAPvsrk4AX8wE3D-&_nc_ht=scontent.fbga3-1.fna&oh=00_AfDNX2nPwV9m4NYpe9ZJtqUoKCYFkX8TYiaMlEngAw5YZg&oe=655A537B)

</center>

# Patrones de diseño y patrones arquitectónicos

<center>

![Imagen de muestra(MVC)](https://user-images.githubusercontent.com/31961588/273664281-a1926874-7e0c-4f35-bb59-eaa8c749eb65.png)

</center>

**Patrones de Diseño:**
Los patrones de diseño son modelos que sirven como ejemplos para resolver problemas comunes en el desarrollo de software, permitiendo la reutilización de código. Estos patrones organizan componentes o elementos de la aplicación y ofrecen soluciones probadas para desafíos recurrentes. Algunos patrones de diseño bien conocidos incluyen Singleton, Adapter, Builder y Factory.

**Arquitectura de Diseño:**
La arquitectura de diseño se refiere al proceso de diseñar, proyectar y construir la estructura y el funcionamiento del software. Define cómo interactúan las diferentes partes del sistema. Algunas arquitecturas de diseño ampliamente utilizadas incluyen MVC (Model-View-Controller), MVP (Model-View-Presenter) y MVVM (Model-View-ViewModel).

En conjunto, la combinación de patrones de diseño y una sólida arquitectura de diseño es esencial para el desarrollo exitoso de software en cualquier proyecto.

# ¿Que caracteriza a los patrones de diseño?

Los patrones arquitectónicos son fácilmente identificables ya que tienen un impacto a nivel global en la aplicación. Estos patrones dictan la forma en que los componentes trabajan y se comunican entre sí. Debido a esta influencia, cualquier modificación realizada en un patrón arquitectónico afectará directamente al componente en cuestión, pudiendo incluso tener repercusiones en los componentes relacionados.

Un ejemplo clásico de un patrón arquitectónico es la "Arquitectura en 3 capas". Este enfoque implica la separación de la aplicación en tres capas distintas: la capa de presentación, la capa de negocio y la capa de datos. Cada una de estas capas cumple un papel específico en la aplicación, lo que contribuye a su organización y eficiencia.

# Estilos arquitectonicos

Los patrones arquitectónicos son fácilmente discernibles, ya que ejercen una influencia de alcance global en la aplicación. Estos patrones establecen la manera en que los componentes interactúan y funcionan en conjunto. Dado su poder de influencia, cualquier ajuste realizado en un patrón arquitectónico repercutirá directamente en el componente correspondiente, pudiendo incluso tener efectos secundarios en los componentes relacionados.

Un ejemplo típico de un patrón arquitectónico es la "Arquitectura en 3 capas". Este enfoque consiste en dividir la aplicación en tres capas distintas: la capa de presentación, la capa de lógica de negocio y la capa de datos. Cada una de estas capas desempeña una función específica en la aplicación, lo que contribuye a su organización y eficiencia.

# Características de Calidad del Software

Un atributo de calidad se refiere a una característica medible de un sistema que evalúa qué tan bien el sistema cumple con las necesidades de las partes interesadas. Algunos atributos comunes incluyen:

- Desplegabilidad
- Escalabilidad
- Modificabilidad
- Rendimiento
- Seguridad
- Acoplamiento
- Cohesión

## Acoplamiento

El acoplamiento denota el nivel de dependencia que existe entre dos unidades de software, es decir, cuánto una unidad de software necesita de la otra para funcionar. Cuando la dependencia es alta, se dice que existe un alto acoplamiento entre ellas.

## Cohesión

La cohesión mide el grado de relación entre las unidades de software, buscando que todas ellas trabajen juntas para cumplir un único propósito o función. En la práctica, se busca que todos los componentes de software sean altamente cohesivos, es decir, que los módulos estén diseñados para abordar una única problemática.

## SOLID

SOLID representa una unión de cinco principios ampliamente considerados como los más importantes en el desarrollo de software. Este acrónimo fue presentado por primera vez a principios de la década de 2000 por Robert C. Martin, conocido por muchos como "el tío Bob". SOLID abarca los siguientes principios:

- (S) Principio de Responsabilidad Única
- (O) Principio de Abierto/Cerrado
- (L) Principio de Sustitución de Liskov
- (I) Principio de Segregación de Interfaces
- (D) Principio de Inversión de Dependencias

Estos principios son fundamentales para crear software de alta calidad y mantenible.

# Arquitectura Hexagonal

La comprensión de la **arquitectura hexagonal** implica asimilar su enfoque de diseño de software, que persigue el aislamiento del núcleo de una aplicación respecto al entorno externo y a los detalles de su implementación. La esencia de esta arquitectura reside en la consecución de una alta modularidad, flexibilidad y facilidad de pruebas en una aplicación.

## Componentes Clave

1. **Núcleo de la Aplicación:** Este elemento representa el epicentro de la arquitectura hexagonal, englobando la lógica de negocio de la aplicación. Aquí se definen los casos de uso y las reglas que rigen el funcionamiento de la aplicación.

2. **Puertos:** Los puertos determinan cómo se produce la interacción con el núcleo de la aplicación. Estos puertos únicamente establecen la interfaz, sin especificar una implementación concreta. Por ejemplo, pueden ser responsables de tareas como la creación o eliminación de un usuario, aunque no detallan cómo se lleva a cabo la ejecución de dichas tareas; esto se define en el bloque de código correspondiente.

3. **Adaptadores:** Los adaptadores desempeñan un papel fundamental al encargarse de la transformación de los datos provenientes del núcleo de la aplicación al formato requerido por los puertos.
   
