# Notas del desarrollo

## 1. Arquitectura

Se implementó una arquitectura basada en **Clean Architecture**, dividida en tres capas: `data`, `domain` y `presentation`, con el objetivo de mantener el código desacoplado, organizado y facilitar su mantenimiento y escalabilidad.

- **Data:** contiene el archivo JSON que simula las respuestas de una API y permite realizar las consultas necesarias.
- **Domain:** contiene los modelos y tipos de datos relacionados con las cédulas y las pulseras.
- **Presentation:** contiene las páginas y componentes encargados de la interfaz de usuario.

## 2. Tareas realizadas

Las tareas 1 y 2 se completaron satisfactoriamente. Cada una cuenta con su respectivo hook y pantalla independiente, manteniendo separada la lógica de negocio de la presentación.

La tarea 3 no pudo completarse debido a limitaciones de tiempo.

## 3. Aspectos por mejorar

- **Separación de funcionalidades:** actualmente, el módulo de pulseras se encuentra dentro del feature de cédula. Esta organización no es adecuada, ya que las pulseras representan una funcionalidad independiente. Se debería crear un feature propio para pulseras, evitando dependencias innecesarias entre módulos.

- **Tamaño de los commits:** al realizar commits por cada tarea, algunos terminaron siendo demasiado extensos. Se recomienda dividir los cambios en commits más pequeños y específicos, utilizando mensajes descriptivos que faciliten el seguimiento del desarrollo y la revisión del historial.

- **Gestión del tiempo:** sería conveniente mejorar la planificación y estimación de las tareas para distribuir mejor el tiempo disponible y procurar completar todos los requerimientos establecidos.