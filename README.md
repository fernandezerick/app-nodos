# app-nodos

* La app debe desplegarse en un entorno Docker sobre WSL2 

- Desde la carpeta base ejecutar en terminal 
    - docker-compose up --build

* Los contenedores del backend y el frontend reciben peticiones desde los puertos 3000 y 5173 respectivamente
    - localhost:3000/nodes
    - http://localhost:5173/

* En la ruta app-nodos/backend/src/data se encuentra el archivo nodes.json desde donde se toman los nodos a ordenar