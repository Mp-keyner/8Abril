# Clase del 8 de Abril (Principios SOLID)

El Principio de Responsabilidad Única __(Single Responsibility Principle, SRP)__ en React se refiere a la idea de que cada componente debería tener una única responsabilidad o propósito. Esto significa que un componente debería cambiar solo por una razón. Siguiendo este principio, se puede hacer que el código sea más fácil de entender y mantener.

Un ejemplo clásico de cómo aplicar el SRP en React es separar la lógica de un formulario de la lógica de manejo de estado y llamadas a API. En lugar de tener un componente que maneje todo (renderizar el formulario, realizar llamadas a API, y mostrar un spinner de carga o mensajes de error), se puede dividir en componentes más pequeños y enfocados.

Aquí hay un ejemplo de cómo se podría aplicar el SRP en una aplicación React:

### Componente de Formulario (AddItemForm)

Este componente se encarga únicamente de renderizar el formulario para agregar un nuevo elemento. No maneja la lógica de estado ni las llamadas a API.

```jsx
import React, { useState } from 'react';

function AddItemForm(props) {
 const [item, setItem] = useState('');

 const handleChange = (event) => {
    setItem(event.target.value);
 }

 const handleSubmit = (event) => {
    event.preventDefault();
    props.addItem(item);
    setItem('');
 }

 return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Item:
        <input type="text" value={item} onChange={handleChange} />
      </label>
      <button type="submit">Add</button>
    </form>
 );
}

export default AddItemForm;
```

### Contenedor del Formulario (AddItemFormContainer)

Este componente se encarga de la lógica de estado y las llamadas a API. Utiliza el componente `AddItemForm` para renderizar el formulario y manejar la entrada del usuario.

```jsx
import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
import { ApiService } from './Service/Api';

function AddItemFormContainer() {
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);

 const addItem = async (item) => {
    setIsLoading(true);
    try {
      await ApiService.SendItem({ item });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
 }

 return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <AddItemForm addItem={addItem} />
    </div>
 );
}

export default AddItemFormContainer;
```

En este ejemplo, `AddItemForm` se encarga de la interacción del usuario con el formulario, mientras que `AddItemFormContainer` maneja el estado y las operaciones asíncronas como las llamadas a la API. Esto hace que cada componente tenga una única responsabilidad, lo cual es una aplicación efectiva del Principio de Responsabilidad Única en React.
