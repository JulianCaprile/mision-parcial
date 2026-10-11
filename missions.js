const levels = [
  {
    "title": "Git y GitHub",
    "desc": "Bajar el repo, registrar cambios y preparar la publicación.",
    "source": "Tu guía · Paso 1; U8 · Git y GitHub; Deploy en Vercel",
    "qs": [
      {
        "title": "¿Cómo traés el repositorio del profe a tu compu?",
        "code": "https://github.com/profe/parcial",
        "choices": [
          "git clone https://github.com/profe/parcial",
          "git push origin main",
          "npm install"
        ],
        "answer": 0,
        "explain": "clone descarga una copia del repositorio para trabajar localmente.",
        "hint": {
          "example": "git clone https://github.com/curso/biblioteca",
          "steps": [
            "Tenés un proyecto de biblioteca alojado en GitHub.",
            "clone recibe la dirección y crea una copia local.",
            "Después abrís la carpeta descargada en VS Code."
          ]
        }
      },
      {
        "title": "Iniciá Git en una carpeta nueva.",
        "code": "git ____",
        "choices": null,
        "answer": "init",
        "type": "fill",
        "explain": "git init inicia el repositorio local.",
        "hint": {
          "example": "cd biblioteca\ngit init",
          "steps": [
            "Entrás en la carpeta del proyecto.",
            "init comienza a registrar el proyecto con Git.",
            "Esto todavía no crea un repositorio remoto ni sube archivos."
          ]
        }
      },
      {
        "title": "¿Qué hace git add .?",
        "code": "git add .",
        "choices": [
          "Publica la aplicación.",
          "Instala las dependencias.",
          "Prepara los cambios para el próximo commit."
        ],
        "answer": 2,
        "explain": "add prepara cambios; commit los registra y push los envía.",
        "hint": {
          "example": "git add .\ngit commit -m \"agregar libros\"",
          "steps": [
            "Modificaste el listado de libros.",
            "add prepara los archivos modificados.",
            "commit registra esa versión con una descripción."
          ]
        }
      },
      {
        "title": "Registrá los cambios preparados.",
        "code": "git ____ -m \"agregar productos\"",
        "choices": null,
        "answer": "commit",
        "type": "fill",
        "explain": "commit guarda una versión en el repositorio local.",
        "hint": {
          "example": "git add .\ngit commit -m \"corregir autores\"",
          "steps": [
            "Corregís el nombre de un autor.",
            "Preparás el archivo con add.",
            "Registrás la corrección con un mensaje que explica el cambio."
          ]
        }
      },
      {
        "title": "¿Qué comando conecta el repo local con uno de GitHub?",
        "code": "Repo remoto: https://github.com/curso/productos",
        "choices": [
          "git init origin",
          "git remote add origin https://github.com/curso/productos",
          "npm install origin"
        ],
        "answer": 1,
        "explain": "remote add origin configura la dirección del repositorio remoto.",
        "hint": {
          "example": "git remote add origin https://github.com/curso/libros",
          "steps": [
            "Tenés una copia local y un repositorio remoto.",
            "origin es el nombre que le asignás al remoto.",
            "La URL indica adónde se enviarán los cambios."
          ]
        }
      },
      {
        "title": "Subí la rama main por primera vez, como en la guía.",
        "code": "git ____ -u origin main",
        "choices": null,
        "answer": "push",
        "type": "fill",
        "explain": "push envía los commits al remoto indicado.",
        "hint": {
          "example": "git push -u origin main",
          "steps": [
            "En un proyecto de turnos ya hiciste un commit.",
            "Elegís el remoto origin y la rama main.",
            "push envía los commits; no reemplaza el paso commit."
          ]
        }
      },
      {
        "title": "¿Qué archivo evita agregar dependencias y credenciales al repo?",
        "code": "node_modules/\n.env",
        "choices": [
          ".gitignore",
          "package.json",
          "index.js"
        ],
        "answer": 0,
        "explain": ".gitignore contiene patrones de archivos que Git debe ignorar si no están ya registrados.",
        "hint": {
          "example": ".gitignore de biblioteca:\nnode_modules/\n.env",
          "steps": [
            "Las dependencias se pueden volver a instalar.",
            "Las credenciales no deben publicarse.",
            "Esos nombres se agregan al archivo de exclusiones antes del primer commit."
          ]
        }
      },
      {
        "title": "Ya guardaste los cambios en VS Code. ¿Cuál es el orden de publicación de la guía?",
        "code": "Cambiaste productosService.js",
        "choices": [
          "git push; git add .; git commit",
          "git add .; git commit; git push",
          "npm install; git init; npm start"
        ],
        "answer": 1,
        "explain": "Primero preparás, luego registrás y finalmente enviás los cambios.",
        "hint": {
          "example": "Cambio: mostrar el autor de un libro",
          "steps": [
            "Prepará los archivos modificados.",
            "Registrá una versión con un mensaje.",
            "Enviá esa versión al repositorio conectado a Vercel."
          ]
        }
      },
      {
        "title": "¿Qué diferencia hay entre Git y GitHub?",
        "code": "Tu guía · Paso 1",
        "choices": [
          "GitHub ejecuta useState; Git dibuja pantallas.",
          "Son dos nombres de npm.",
          "Git registra versiones; GitHub aloja repositorios."
        ],
        "answer": 2,
        "explain": "Podés usar Git localmente y alojar el repositorio en GitHub.",
        "hint": {
          "example": "Proyecto de turnos: versiones locales y copia remota",
          "steps": [
            "En tu compu registrás cambios con Git.",
            "En GitHub alojás el repositorio remoto.",
            "push conecta el trabajo local con ese remoto."
          ]
        }
      },
      {
        "title": "¿Qué ocurre al hacer push en el flujo de Vercel configurado en clase?",
        "code": "Repositorio conectado a Vercel",
        "choices": [
          "Vercel detecta el cambio e inicia otro despliegue.",
          "Se crea una tabla en Supabase.",
          "Se instala Git en el celular."
        ],
        "answer": 0,
        "explain": "En el flujo conectado de la guía, Vercel despliega los cambios enviados al repo.",
        "hint": {
          "example": "Repo de biblioteca conectado a Vercel",
          "steps": [
            "Hacés un commit del nuevo endpoint.",
            "Lo enviás al repo conectado.",
            "Vercel usa ese cambio para generar otra versión desplegada."
          ]
        }
      }
    ]
  },
  {
    "title": "Arranque y publicación",
    "desc": "Preparar Node, leer scripts, arrancar y publicar como en la guía.",
    "source": "Tu guía · Paso 2; U8 · Tecnologías; Primer servidor; Deploy",
    "qs": [
      {
        "title": "Inicializá el proyecto Node con los valores predeterminados.",
        "code": "npm ____ -y",
        "choices": null,
        "answer": "init",
        "type": "fill",
        "explain": "npm init -y crea package.json con valores predeterminados.",
        "hint": {
          "example": "mkdir biblioteca\ncd biblioteca\nnpm init -y",
          "steps": [
            "Creás una carpeta para el backend.",
            "Entrás antes de ejecutar npm.",
            "Inicializás la información del proyecto en package.json."
          ]
        }
      },
      {
        "title": "Instalá Express.",
        "code": "npm install ____",
        "choices": null,
        "answer": "express",
        "type": "fill",
        "explain": "Express es la librería usada para crear las rutas del backend.",
        "hint": {
          "example": "npm install axios",
          "steps": [
            "Identificás el paquete que necesita tu proyecto.",
            "npm install recibe el nombre de ese paquete.",
            "En el ejemplo se instala Axios; aplicá lo mismo al paquete pedido."
          ]
        }
      },
      {
        "title": "¿Para qué se instala nodemon en desarrollo?",
        "code": "npm install -D nodemon",
        "choices": [
          "Guarda filas en Supabase.",
          "Dibuja componentes React Native.",
          "Reinicia el servidor al cambiar archivos."
        ],
        "answer": 2,
        "explain": "nodemon facilita el desarrollo reiniciando Node ante cambios.",
        "hint": {
          "example": "\"dev\": \"nodemon servidor.js\"",
          "steps": [
            "El script ejecuta servidor.js con nodemon.",
            "Mientras desarrollás, modificás ese archivo.",
            "nodemon vuelve a iniciar el proceso para usar el cambio."
          ]
        }
      },
      {
        "title": "¿Cómo ejecutás el script dev?",
        "code": "\"scripts\": { \"dev\": \"nodemon index.js\" }",
        "choices": [
          "npm run dev",
          "npm run web",
          "git dev"
        ],
        "answer": 0,
        "explain": "npm run usa el nombre de un script existente.",
        "hint": {
          "example": "\"scripts\": { \"inicio\": \"node servidor.js\" }\nnpm run inicio",
          "steps": [
            "Buscá el nombre a la izquierda de los dos puntos.",
            "Ese nombre va después de npm run.",
            "El valor a la derecha es el comando que se ejecuta."
          ]
        }
      },
      {
        "title": "¿Qué ejecuta npm start en este proyecto?",
        "code": "\"scripts\": { \"start\": \"node index.js\" }",
        "choices": [
          "nodemon package.json",
          "node index.js",
          "git push"
        ],
        "answer": 1,
        "explain": "El script start apunta al archivo de entrada index.js.",
        "hint": {
          "example": "\"start\": \"node biblioteca.js\"",
          "steps": [
            "Leé el valor del script start.",
            "node ejecuta el archivo que sigue.",
            "No confundas el archivo de entrada con package.json."
          ]
        }
      },
      {
        "title": "Hay dos package.json. ¿Dónde instalás las dependencias?",
        "code": "frontend/package.json\nbackend/package.json",
        "choices": [
          "Solo en una carpeta vacía externa.",
          "En .gitignore.",
          "En cada carpeta de proyecto."
        ],
        "answer": 2,
        "explain": "Cada parte tiene sus propias dependencias y scripts.",
        "hint": {
          "example": "cliente/package.json\nservidor/package.json",
          "steps": [
            "Identificá la carpeta de cada parte.",
            "Instalá sus dependencias dentro de ella.",
            "Arrancá cada parte con sus scripts en terminales separadas."
          ]
        }
      },
      {
        "title": "¿Qué archivo define las dependencias y scripts?",
        "code": "Tu guía · Arranque",
        "choices": [
          "package.json",
          ".env",
          "productosRoutes.js"
        ],
        "answer": 0,
        "explain": "package.json describe el proyecto y sus comandos.",
        "hint": {
          "example": "\"scripts\": { \"dev\": \"nodemon biblioteca.js\" }",
          "steps": [
            "Buscás cómo iniciar un backend nuevo.",
            "Leés scripts en package.json.",
            "Usás el nombre del comando definido, sin inventar otro."
          ]
        }
      },
      {
        "title": "¿Qué puerto escucha este servidor? Escribí el número.",
        "code": "app.listen(3000, () => console.log(\"Listo\"));",
        "choices": null,
        "answer": "3000",
        "type": "fill",
        "explain": "El primer argumento de listen es el puerto del servidor.",
        "hint": {
          "example": "app.listen(4000);\nhttp://localhost:4000/libros",
          "steps": [
            "Ubicá el número pasado a listen.",
            "Usá ese puerto en la URL local.",
            "La ruta se agrega después del puerto."
          ]
        }
      },
      {
        "title": "En la configuración de Vercel de la guía, ¿qué archivo recibe las rutas?",
        "code": "\"routes\": [{ \"src\": \"/(.*)\", \"dest\": \"index.js\" }]",
        "choices": [
          "package.json",
          ".gitignore",
          "index.js"
        ],
        "answer": 2,
        "explain": "En el ejemplo del profe, dest apunta al archivo de entrada del servidor.",
        "hint": {
          "example": "\"routes\": [{ \"src\": \"/(.*)\", \"dest\": \"servidor.js\" }]",
          "steps": [
            "src indica qué pedidos se capturan.",
            "dest indica a qué archivo se envían.",
            "Leé el valor de dest en el ejercicio."
          ]
        }
      },
      {
        "title": "¿Qué cambia al probar la API publicada?",
        "code": "Local: http://localhost:3000/api/productos",
        "choices": [
          "La URL base; conservás la ruta del endpoint.",
          "GET se convierte siempre en POST.",
          "JSON se convierte en JSX."
        ],
        "answer": 0,
        "explain": "Probás la URL publicada con la misma ruta y verificás estado y datos.",
        "hint": {
          "example": "http://localhost:3000/api/libros\nhttps://biblioteca.vercel.app/api/libros",
          "steps": [
            "Identificá el host local.",
            "Reemplazalo por el dominio desplegado.",
            "Conservá /api/libros y comprobá la respuesta."
          ]
        }
      }
    ]
  },
  {
    "title": "JavaScript y map",
    "desc": "Leer objetos y arrays; transformar listas con las operaciones de la guía.",
    "source": "Tu guía · Paso 3; U7 · JSON; map con API; Ejercicio 9",
    "qs": [
      {
        "title": "Leé el nombre del primer producto.",
        "code": "productos[0].____",
        "choices": null,
        "answer": "nombre",
        "type": "fill",
        "explain": "El índice 0 toma el primer objeto; nombre accede a la propiedad.",
        "hint": {
          "example": "const libros = [{ titulo: \"Sur\" }];\nlibros[0].titulo",
          "steps": [
            "El array contiene un objeto.",
            "[0] selecciona el primero.",
            "El punto accede a la propiedad del objeto elegido."
          ]
        }
      },
      {
        "title": "Seleccioná el segundo elemento.",
        "code": "const nombres = [\"Ana\", \"Luis\", \"Sol\"];\nnombres[____] // \"Luis\"",
        "choices": null,
        "answer": "1",
        "type": "fill",
        "explain": "Los índices empiezan en cero.",
        "hint": {
          "example": "const colores = [\"rojo\", \"azul\", \"verde\"];\ncolores[2] // \"verde\"",
          "steps": [
            "El primer elemento ocupa el índice 0.",
            "El segundo ocupa el 1 y el tercero el 2.",
            "Contá desde cero para ubicar el elemento pedido."
          ]
        }
      },
      {
        "title": "¿Qué resultado devuelve map?",
        "code": "[{ precio: 10 }, { precio: 20 }].map(p => p.precio)",
        "choices": [
          "[\"precio\", \"precio\"]",
          "30",
          "[10, 20]"
        ],
        "answer": 2,
        "explain": "Cada elemento aporta su propiedad precio al nuevo array.",
        "hint": {
          "example": "[{ edad: 8 }, { edad: 12 }].map(p => p.edad)",
          "steps": [
            "map visita el primer objeto y obtiene 8.",
            "Visita el segundo y obtiene 12.",
            "Reúne ambos resultados en [8, 12]."
          ]
        }
      },
      {
        "title": "¿Qué falta en la función con llaves?",
        "code": "productos.map(p => { p.nombre });",
        "choices": [
          "return antes de p.nombre",
          "await antes de productos",
          "require dentro de map"
        ],
        "answer": 0,
        "explain": "Un cuerpo con llaves necesita return para devolver un valor.",
        "hint": {
          "example": "libros.map(l => { return l.titulo; });",
          "steps": [
            "Las llaves abren un cuerpo de instrucciones.",
            "return indica qué aporta cada vuelta.",
            "Sin return, esa vuelta devuelve undefined."
          ]
        }
      },
      {
        "title": "¿Qué hace map con el array original?",
        "code": "const nombres = productos.map(p => p.nombre);",
        "choices": [
          "Reemplaza automáticamente productos por texto.",
          "Devuelve otro array con los resultados.",
          "Borra los objetos originales."
        ],
        "answer": 1,
        "explain": "map produce un nuevo array; esta expresión no modifica los objetos originales.",
        "hint": {
          "example": "const edades = personas.map(p => p.edad);",
          "steps": [
            "personas mantiene su referencia a la lista original.",
            "La función obtiene una edad por elemento.",
            "edades recibe el array de resultados."
          ]
        }
      },
      {
        "title": "Accedé a una propiedad anidada.",
        "code": "const data = { viento: { velocidad: 15 } };\ndata.viento.____",
        "choices": null,
        "answer": "velocidad",
        "type": "fill",
        "explain": "Primero entrás en viento y después leés velocidad.",
        "hint": {
          "example": "const libro = { autor: { nombre: \"Ana\" } };\nlibro.autor.nombre",
          "steps": [
            "libro contiene un objeto autor.",
            "Entrás con .autor.",
            "Luego leés .nombre dentro de ese objeto."
          ]
        }
      },
      {
        "title": "La descripción del clima está dentro de un array.",
        "code": "clima.weatherDesc[____].value",
        "choices": null,
        "answer": "0",
        "type": "fill",
        "explain": "En el ejemplo del profe, la descripción se toma del primer elemento.",
        "hint": {
          "example": "const datos = { etiquetas: [{ texto: \"Nuevo\" }] };\ndatos.etiquetas[0].texto",
          "steps": [
            "Entrás en etiquetas.",
            "Seleccionás el primer objeto con [0].",
            "Leés su propiedad texto."
          ]
        }
      },
      {
        "title": "¿Dónde está el array de personajes?",
        "code": "res.data = { results: [{ id: 1, name: \"Rick\" }] };",
        "choices": [
          "res.results.data",
          "res.data.results",
          "res.data.name"
        ],
        "answer": 1,
        "explain": "El body es un objeto y su propiedad results contiene el array.",
        "hint": {
          "example": "respuesta.data = { libros: [{ titulo: \"Sur\" }] };",
          "steps": [
            "data es el cuerpo de la respuesta.",
            "Dentro existe una propiedad libros.",
            "La lista a recorrer es respuesta.data.libros."
          ]
        }
      },
      {
        "title": "¿Qué operación permite filtrar como propone el ejercicio 9?",
        "code": "Mostrar solo personajes cuyo nombre coincida con la búsqueda.",
        "choices": [
          ".push()",
          ".listen()",
          ".filter()"
        ],
        "answer": 2,
        "explain": "filter devuelve los elementos que cumplen una condición.",
        "hint": {
          "example": "const mayores = personas.filter(p => p.edad > 18);",
          "steps": [
            "La condición se evalúa para cada persona.",
            "Si es verdadera, la persona permanece.",
            "El resultado contiene solo quienes pasan el filtro."
          ]
        }
      },
      {
        "title": "¿Cuántos elementos devuelve este map?",
        "code": "[1, 2, 3].map(n => n * 2)",
        "choices": [
          "3",
          "6",
          "1"
        ],
        "answer": 0,
        "explain": "Hay un resultado por cada elemento de entrada: [2, 4, 6].",
        "hint": {
          "example": "[4, 5].map(n => n + 1)",
          "steps": [
            "El 4 produce 5.",
            "El 5 produce 6.",
            "El resultado tiene dos elementos, igual que la entrada."
          ]
        }
      }
    ]
  },
  {
    "title": "Componentes y JSX",
    "desc": "Mostrar datos, listas y los tres estados de la pantalla.",
    "source": "Tu guía · Paso 4; U7 · App del clima; Loading; Ejercicio 9",
    "qs": [
      {
        "title": "¿Qué fragmento muestra una variable de texto?",
        "code": "const nombre = \"Mouse\";",
        "choices": [
          "<Text>{nombre}</Text>",
          "<Text>nombre</Text>",
          "<View>nombre</View>"
        ],
        "answer": 0,
        "explain": "Las llaves insertan el valor de JavaScript en JSX.",
        "hint": {
          "example": "const titulo = \"Sur\";\n<Text>{titulo}</Text>",
          "steps": [
            "Text es el componente de texto.",
            "Las llaves evalúan titulo.",
            "La pantalla muestra Sur, no la palabra titulo."
          ]
        }
      },
      {
        "title": "Identificá cada elemento con su id.",
        "code": "productos.map(p => <Text ____={p.id}>{p.nombre}</Text>)",
        "choices": null,
        "answer": "key",
        "type": "fill",
        "explain": "key permite identificar los elementos de la lista entre renders.",
        "hint": {
          "example": "libros.map(l => <Text key={l.id}>{l.titulo}</Text>)",
          "steps": [
            "Cada libro tiene un identificador.",
            "Ese id se asigna a key en el elemento retornado.",
            "El título es el contenido visible, no el identificador."
          ]
        }
      },
      {
        "title": "¿Cuál es el contenedor con desplazamiento del ejemplo?",
        "code": "Una lista de personajes más larga que la pantalla.",
        "choices": [
          "ActivityIndicator",
          "TextInput",
          "ScrollView"
        ],
        "answer": 2,
        "explain": "El ejemplo de map del profe coloca la lista en ScrollView.",
        "hint": {
          "example": "<ScrollView>\n  <Text>Libro 1</Text>\n  <Text>Libro 2</Text>\n</ScrollView>",
          "steps": [
            "Ponés los elementos dentro del contenedor.",
            "ScrollView permite desplazar el contenido.",
            "Los Text siguen encargándose de mostrar el texto."
          ]
        }
      },
      {
        "title": "Mostrá el indicador de carga.",
        "code": "if (cargando) return <____ />;",
        "choices": null,
        "answer": "ActivityIndicator",
        "type": "fill",
        "explain": "ActivityIndicator es el spinner usado durante el pedido.",
        "hint": {
          "example": "if (esperando) return <ActivityIndicator />;",
          "steps": [
            "El estado esperando indica que falta la respuesta.",
            "Mientras sea verdadero se muestra el indicador.",
            "Al finalizar se cambia el estado y se muestra el contenido."
          ]
        }
      },
      {
        "title": "¿Qué prop cambia el tamaño del spinner?",
        "code": "<ActivityIndicator ____=\"large\" />",
        "choices": [
          "title",
          "size",
          "onPress"
        ],
        "answer": 1,
        "explain": "size admite small o large en la guía.",
        "hint": {
          "example": "<ActivityIndicator size=\"small\" color=\"blue\" />",
          "steps": [
            "size controla el tamaño.",
            "color controla el color.",
            "Separá el aspecto que querés cambiar antes de elegir la prop."
          ]
        }
      },
      {
        "title": "Completá la prop que controla el color.",
        "code": "<ActivityIndicator size=\"large\" ____=\"#2563eb\" />",
        "choices": null,
        "answer": "color",
        "type": "fill",
        "explain": "color define el color del indicador.",
        "hint": {
          "example": "<ActivityIndicator color=\"green\" />",
          "steps": [
            "El spinner tiene un aspecto configurable.",
            "La prop color recibe el color.",
            "No modifica el estado de carga ni hace pedidos."
          ]
        }
      },
      {
        "title": "¿Qué significa animating={false}?",
        "code": "<ActivityIndicator animating={false} />",
        "choices": [
          "El indicador no está animándose.",
          "La petición HTTP se cancela.",
          "Se vacía la base de datos."
        ],
        "answer": 0,
        "explain": "animating controla la animación; no administra las peticiones.",
        "hint": {
          "example": "<ActivityIndicator animating={esperando} />",
          "steps": [
            "esperando es un booleano.",
            "Cuando es true el indicador anima.",
            "Cuando es false deja de animar; la lógica de datos es independiente."
          ]
        }
      },
      {
        "title": "¿Cómo pasás la función al botón Reintentar?",
        "code": "Función disponible: obtenerDatos",
        "choices": [
          "onPress={obtenerDatos()}",
          "onPress={obtenerDatos}",
          "onPress=\"obtenerDatos\""
        ],
        "answer": 1,
        "explain": "Se pasa la función para que se ejecute al presionar.",
        "hint": {
          "example": "<Button title=\"Actualizar libros\" onPress={cargarLibros} />",
          "steps": [
            "cargarLibros es la función a ejecutar.",
            "Se entrega su referencia sin paréntesis.",
            "El botón la llama cuando lo tocás."
          ]
        }
      },
      {
        "title": "¿Qué muestra este render si hay error?",
        "code": "if (error) return <Text>{error}</Text>;",
        "choices": [
          "Siempre la lista completa.",
          "El archivo package.json.",
          "El mensaje almacenado en error."
        ],
        "answer": 2,
        "explain": "El return condicional muestra la pantalla de error.",
        "hint": {
          "example": "if (fallo) return <Text>{fallo}</Text>;",
          "steps": [
            "Primero se comprueba si hay un mensaje.",
            "Si existe, se devuelve el Text.",
            "La función termina en ese return y no sigue al contenido normal."
          ]
        }
      },
      {
        "title": "¿Qué cumple la consigna de mostrar dos datos por personaje?",
        "code": "personajes.map(p => (...))",
        "choices": [
          "<View key={p.id}><Text>{p.name}</Text><Text>{p.status}</Text></View>",
          "<Text key={p.id}>{p.name}</Text>",
          "<Text>Dos datos</Text>"
        ],
        "answer": 0,
        "explain": "name y status son dos campos reales del personaje.",
        "hint": {
          "example": "<View key={l.id}><Text>{l.titulo}</Text><Text>{l.autor}</Text></View>",
          "steps": [
            "Elegís dos propiedades del objeto libro.",
            "Mostrás cada valor dentro de Text.",
            "El contenedor retornado lleva la key del elemento."
          ]
        }
      }
    ]
  },
  {
    "title": "useState",
    "desc": "Guardar los datos, la carga y el error como en las pantallas del profe.",
    "source": "Tu guía · Paso 5; U7 · Patrón base; App del clima",
    "qs": [
      {
        "title": "Prepará una lista vacía para map.",
        "code": "const [productos, setProductos] = useState(____);",
        "choices": null,
        "answer": "[]",
        "type": "fill",
        "explain": "[] es un array vacío y admite map desde el primer render.",
        "hint": {
          "example": "const [libros, setLibros] = useState([]);",
          "steps": [
            "La pantalla espera una lista.",
            "Antes del pedido no hay elementos.",
            "Un array vacío permite recorrer cero elementos sin fallar."
          ]
        }
      },
      {
        "title": "¿Cuál es la función que actualiza clima?",
        "code": "const [clima, setClima] = useState(null);",
        "choices": [
          "clima",
          "setClima",
          "useEffect"
        ],
        "answer": 1,
        "explain": "El segundo elemento retornado por useState es el setter.",
        "hint": {
          "example": "const [autor, setAutor] = useState(null);",
          "steps": [
            "autor guarda el valor actual.",
            "setAutor recibe el valor nuevo.",
            "Usás el setter para actualizar lo que muestra la pantalla."
          ]
        }
      },
      {
        "title": "Activá el estado de carga.",
        "code": "setCargando(____);",
        "choices": null,
        "answer": "true",
        "type": "fill",
        "explain": "true indica que el pedido está en curso.",
        "hint": {
          "example": "setEsperando(true);",
          "steps": [
            "Antes de consultar los libros falta una respuesta.",
            "Marcás esperando como verdadero.",
            "La pantalla puede mostrar el spinner."
          ]
        }
      },
      {
        "title": "Terminá el estado de carga.",
        "code": "finally { setCargando(____); }",
        "choices": null,
        "answer": "false",
        "type": "fill",
        "explain": "false señala que terminó el intento, con éxito o con error.",
        "hint": {
          "example": "finally { setEsperando(false); }",
          "steps": [
            "El pedido de autores ya terminó.",
            "finally ejecuta el cierre del intento.",
            "Desactivás el indicador poniendo el estado en falso."
          ]
        }
      },
      {
        "title": "¿Por qué el clima empieza en null?",
        "code": "const [clima, setClima] = useState(null);",
        "choices": [
          "null es el nombre de una ciudad.",
          "Todavía no llegaron los datos.",
          "null contiene todos los productos."
        ],
        "answer": 1,
        "explain": "El ejemplo espera los datos antes de leer las propiedades del clima.",
        "hint": {
          "example": "const [libro, setLibro] = useState(null);",
          "steps": [
            "Al montar no tenés el libro pedido.",
            "null representa esa ausencia inicial.",
            "Mostrás carga hasta recibir y guardar el objeto."
          ]
        }
      },
      {
        "title": "Limpiá el mensaje de un intento anterior.",
        "code": "setError(____);",
        "choices": null,
        "answer": "null",
        "type": "fill",
        "explain": "El ejemplo del clima borra el error antes de iniciar otro pedido.",
        "hint": {
          "example": "setFallo(null);\nsetEsperando(true);",
          "steps": [
            "Un intento anterior dejó un mensaje.",
            "Antes de reintentar quitás ese mensaje.",
            "Así el nuevo resultado no convive con un error viejo."
          ]
        }
      },
      {
        "title": "¿Qué se guarda en el estado personajes?",
        "code": "const res = await axios.get(URL);\n// res.data = { results: [...] }",
        "choices": [
          "setPersonajes(res.data.results)",
          "setPersonajes(res)",
          "setPersonajes(res.status)"
        ],
        "answer": 0,
        "explain": "El estado debe recibir el array que después se recorre con map.",
        "hint": {
          "example": "respuesta.data = { libros: [{ id: 1 }] };\nsetLibros(respuesta.data.libros);",
          "steps": [
            "Leé la forma del body.",
            "Identificá la propiedad con el array.",
            "Guardá ese array en el estado de la lista."
          ]
        }
      },
      {
        "title": "¿Qué provoca actualizar el estado de datos?",
        "code": "setClima(nuevoClima);",
        "choices": [
          "Git hace un commit automáticamente.",
          "React puede volver a renderizar usando los nuevos datos.",
          "Se reinicia Supabase."
        ],
        "answer": 1,
        "explain": "El setter permite reflejar el nuevo estado en la interfaz.",
        "hint": {
          "example": "setTitulo(\"Nuevo libro\");",
          "steps": [
            "El estado anterior tenía otro título.",
            "El setter solicita la actualización.",
            "El componente vuelve a mostrar el valor actualizado."
          ]
        }
      },
      {
        "title": "¿Cuál es la actualización correcta del estado?",
        "code": "const [nombre, setNombre] = useState(\"\");",
        "choices": [
          "nombre = \"Mouse\";",
          "useState = \"Mouse\";",
          "setNombre(\"Mouse\");"
        ],
        "answer": 2,
        "explain": "Se usa el setter para actualizar el estado.",
        "hint": {
          "example": "const [titulo, setTitulo] = useState(\"\");\nsetTitulo(\"Sur\");",
          "steps": [
            "La variable contiene el valor actual.",
            "El setter es la función de actualización.",
            "Llamalo con el próximo valor."
          ]
        }
      },
      {
        "title": "¿Cuáles son los tres estados del patrón de API?",
        "code": "Pantalla conectada del profe",
        "choices": [
          "Datos, cargando y error.",
          "Git, npm y Vercel.",
          "Router, carpeta y archivo."
        ],
        "answer": 0,
        "explain": "La pantalla distingue respuesta, espera y fallo.",
        "hint": {
          "example": "libros = []\nesperando = true\nfallo = null",
          "steps": [
            "Una variable almacena los libros.",
            "Otra indica si la consulta sigue pendiente.",
            "Otra contiene el mensaje cuando falla."
          ]
        }
      }
    ]
  },
  {
    "title": "useEffect",
    "desc": "Lanzar la carga al montar y reconocer cuándo se repite un efecto.",
    "source": "Tu guía · Paso 6; U7 · Axios + useEffect; App conectada",
    "qs": [
      {
        "title": "Importá el hook que ejecuta el efecto.",
        "code": "import { useState, ____ } from \"react\";",
        "choices": null,
        "answer": "useEffect",
        "type": "fill",
        "explain": "useEffect se importa de react junto con los otros hooks.",
        "hint": {
          "example": "import { useEffect } from \"react\";",
          "steps": [
            "Los hooks del componente provienen de React.",
            "Importás la función antes de usarla.",
            "Después la llamás dentro del componente para definir el efecto."
          ]
        }
      },
      {
        "title": "Completá las dependencias de la carga al montar del ejemplo.",
        "code": "useEffect(() => { obtenerClima(); }, ____);",
        "choices": null,
        "answer": "[]",
        "type": "fill",
        "explain": "El patrón del material usa [] para la carga al montar.",
        "hint": {
          "example": "useEffect(() => { cargarLibros(); }, []);",
          "steps": [
            "El efecto contiene el pedido inicial.",
            "El array de dependencias está vacío.",
            "No se vuelve a disparar por cambios en el estado de la lista."
          ]
        }
      },
      {
        "title": "¿Qué función se llama al montar?",
        "code": "useEffect(() => { obtenerClima(); }, []);",
        "choices": [
          "setError directamente",
          "app.listen",
          "obtenerClima"
        ],
        "answer": 2,
        "explain": "El cuerpo del efecto llama a obtenerClima.",
        "hint": {
          "example": "useEffect(() => { cargarAutores(); }, []);",
          "steps": [
            "Buscá el cuerpo de la función del efecto.",
            "Dentro aparece cargarAutores().",
            "Esa es la acción que se inicia al montar."
          ]
        }
      },
      {
        "title": "¿Qué viene después de montar en el patrón del profe?",
        "code": "Montaje de la pantalla",
        "choices": [
          "El efecto inicia la carga de datos.",
          "Se hace git push.",
          "Se crea un repositorio."
        ],
        "answer": 0,
        "explain": "El efecto llama a la función que consulta la API.",
        "hint": {
          "example": "Pantalla de libros recién abierta",
          "steps": [
            "La pantalla se monta.",
            "El efecto llama a cargarLibros.",
            "La función activa carga y hace el pedido."
          ]
        }
      },
      {
        "title": "¿Por qué no ponés el pedido directamente en cada render?",
        "code": "axios.get(URL) en el cuerpo del componente",
        "choices": [
          "Porque Axios solo funciona en .env.",
          "Porque podría iniciarse de nuevo cada vez que se renderiza.",
          "Porque map ejecuta Git."
        ],
        "answer": 1,
        "explain": "El efecto permite organizar cuándo iniciar la carga.",
        "hint": {
          "example": "Render de biblioteca tras setLibros(...)",
          "steps": [
            "El setter hace que el componente renderice de nuevo.",
            "Una llamada suelta en el cuerpo se ejecutaría otra vez.",
            "El patrón del profe coloca la carga inicial en useEffect."
          ]
        }
      },
      {
        "title": "¿Qué ocurre con este efecto al cambiar productos?",
        "code": "useEffect(() => { obtenerProductos(); }, [productos]);",
        "choices": [
          "Se elimina el componente.",
          "Solo se cambia el color del spinner.",
          "Se vuelve a ejecutar."
        ],
        "answer": 2,
        "explain": "productos está incluido como dependencia del efecto.",
        "hint": {
          "example": "useEffect(() => { cargarAutores(); }, [nombre]);",
          "steps": [
            "El array menciona nombre.",
            "Si nombre cambia, el efecto vuelve a ejecutarse.",
            "Revisá qué variable está en las dependencias del ejercicio."
          ]
        }
      },
      {
        "title": "¿Qué puede causar cargas repetidas?",
        "code": "useEffect(() => { obtenerProductos(); }, [productos]);\n// obtenerProductos actualiza productos",
        "choices": [
          "El efecto actualiza el mismo estado del que depende.",
          "La lista usa key.",
          "El texto está dentro de Text."
        ],
        "answer": 0,
        "explain": "La actualización puede volver a disparar el efecto y repetir el pedido.",
        "hint": {
          "example": "Un efecto depende de libros y cargarLibros guarda otro array.",
          "steps": [
            "El efecto lanza la consulta.",
            "La consulta cambia libros.",
            "Ese cambio vuelve a disparar el efecto por su dependencia."
          ]
        }
      },
      {
        "title": "¿Quién guarda el resultado en el patrón de la guía?",
        "code": "useEffect(() => { obtenerDatos(); }, []);",
        "choices": [
          "El array [] por sí mismo.",
          "La función obtenerDatos, usando el setter después de await.",
          "GitHub automáticamente."
        ],
        "answer": 1,
        "explain": "El efecto inicia la acción; la función organiza la consulta y sus estados.",
        "hint": {
          "example": "useEffect(() => { cargarLibros(); }, []);\n// cargarLibros usa setLibros(res.data)",
          "steps": [
            "El efecto llama a cargarLibros.",
            "La función espera la respuesta.",
            "Luego usa el setter para guardar los datos."
          ]
        }
      },
      {
        "title": "¿Cómo recargás manualmente sin volver a montar la pantalla?",
        "code": "La guía agrega un botón Actualizar.",
        "choices": [
          "Reinstalás Axios.",
          "Borrás useState.",
          "El botón llama a la misma función de carga."
        ],
        "answer": 2,
        "explain": "onPress puede reutilizar la función que usa el efecto inicial.",
        "hint": {
          "example": "<Button title=\"Actualizar autores\" onPress={cargarAutores} />",
          "steps": [
            "El efecto resuelve la carga inicial.",
            "El botón permite repetir la acción.",
            "Ambos llaman a cargarAutores sin duplicar la lógica."
          ]
        }
      },
      {
        "title": "¿Qué secuencia coincide con la guía?",
        "code": "Pantalla con datos remotos",
        "choices": [
          "Montaje, efecto, pedido, guardar datos, render actualizado.",
          "Pedido, git init, borrar tabla, efecto.",
          "Render, push, JSON.stringify, deploy."
        ],
        "answer": 0,
        "explain": "La respuesta se guarda en el estado y eso permite actualizar la pantalla.",
        "hint": {
          "example": "Pantalla de biblioteca",
          "steps": [
            "Se monta e inicia cargarLibros.",
            "Llega la respuesta y se guarda con setLibros.",
            "El nuevo render puede mostrar la lista."
          ]
        }
      }
    ]
  },
  {
    "title": "API, HTTP y JSON",
    "desc": "Interpretar pedidos, respuestas y estructuras de las APIs del material.",
    "source": "U7 · Conceptos; HTTP; JSON; APIs públicas",
    "qs": [
      {
        "title": "¿Qué define una API?",
        "code": "App del clima y servidor",
        "choices": [
          "Cómo pedir datos y qué formato de respuesta esperar.",
          "El color de la pantalla.",
          "El historial de commits."
        ],
        "answer": 0,
        "explain": "La API funciona como un contrato entre sistemas.",
        "hint": {
          "example": "API de biblioteca: GET /libros devuelve una lista.",
          "steps": [
            "El cliente conoce una ruta para pedir libros.",
            "El servidor responde con la estructura acordada.",
            "Ese contrato permite que ambas partes se comuniquen."
          ]
        }
      },
      {
        "title": "¿Qué método lee productos?",
        "code": "/api/productos",
        "choices": [
          "POST",
          "GET",
          "DELETE"
        ],
        "answer": 1,
        "explain": "GET se utiliza para obtener información.",
        "hint": {
          "example": "GET /api/autores",
          "steps": [
            "Querés consultar autores existentes.",
            "No enviás una orden de crearlos o borrarlos.",
            "Elegís el método de lectura de la API."
          ]
        }
      },
      {
        "title": "¿Qué método crea un producto en la API del profe?",
        "code": "Body: { \"nombre\": \"Monitor\", \"precio\": 85000 }",
        "choices": [
          "GET",
          "DELETE",
          "POST"
        ],
        "answer": 2,
        "explain": "POST envía los datos de un registro nuevo.",
        "hint": {
          "example": "POST /api/libros\n{ \"titulo\": \"Sur\" }",
          "steps": [
            "Todavía no existe el libro nuevo.",
            "Enviás sus datos en el body.",
            "El endpoint de creación recibe ese pedido."
          ]
        }
      },
      {
        "title": "¿Qué método actualiza un producto según la guía?",
        "code": "/api/productos/5",
        "choices": [
          "PUT",
          "GET",
          "POST"
        ],
        "answer": 0,
        "explain": "La API del profe utiliza PUT con el id en la ruta para actualizar.",
        "hint": {
          "example": "PUT /api/libros/7\n{ \"titulo\": \"Norte\" }",
          "steps": [
            "Elegís el libro existente con su id.",
            "Enviás los valores que querés cambiar.",
            "El método corresponde a la operación de actualización definida por esa API."
          ]
        }
      },
      {
        "title": "¿Qué método borra un producto?",
        "code": "/api/productos/5",
        "choices": [
          "POST",
          "DELETE",
          "GET"
        ],
        "answer": 1,
        "explain": "DELETE representa la operación de eliminación.",
        "hint": {
          "example": "DELETE /api/libros/7",
          "steps": [
            "Identificás el recurso con /7.",
            "Querés quitarlo, no consultarlo.",
            "Usás el método de eliminación."
          ]
        }
      },
      {
        "title": "¿Qué significa 201 en el ejemplo?",
        "code": "res.status(201).json(nuevo);",
        "choices": [
          "No existe el endpoint.",
          "Hubo un fallo del servidor.",
          "Se creó el registro."
        ],
        "answer": 2,
        "explain": "201 indica creación satisfactoria.",
        "hint": {
          "example": "POST /api/libros responde 201",
          "steps": [
            "El pedido contenía un nuevo libro.",
            "El servidor logró crearlo.",
            "El código confirma esa creación."
          ]
        }
      },
      {
        "title": "¿Cómo interpretás estos estados?",
        "code": "200 · 400 · 401 · 404 · 500",
        "choices": [
          "Éxito · pedido inválido · falta autenticación válida · no encontrado · error del servidor",
          "Todos indican éxito.",
          "Todos indican error en la base de datos."
        ],
        "answer": 0,
        "explain": "El estado orienta el diagnóstico. No alcanza por sí solo para saber qué línea falló.",
        "hint": {
          "example": "GET /api/autores/99 responde 404",
          "steps": [
            "Consultaste un recurso concreto.",
            "404 indica que no se encontró lo pedido.",
            "Revisás la ruta o el recurso antes de culpar a la base de datos."
          ]
        }
      },
      {
        "title": "¿Cuál es JSON válido?",
        "code": "Datos para crear un producto",
        "choices": [
          "{nombre:\"Mouse\",precio:15000}",
          "{\"nombre\":\"Mouse\",\"precio\":15000}",
          "{\"nombre\":\"Mouse\",}"
        ],
        "answer": 1,
        "explain": "JSON requiere claves con comillas dobles y no admite la coma final.",
        "hint": {
          "example": "{\"titulo\":\"Sur\",\"paginas\":120}",
          "steps": [
            "Las claves son strings entre comillas dobles.",
            "Los números se escriben sin comillas si son números.",
            "Los pares se separan con comas, sin una coma sobrante al final."
          ]
        }
      },
      {
        "title": "¿Qué hace JSON.stringify?",
        "code": "Objeto JavaScript para intercambio o almacenamiento",
        "choices": [
          "Convierte texto JSON a un objeto.",
          "Hace un GET automáticamente.",
          "Convierte un valor a texto JSON."
        ],
        "answer": 2,
        "explain": "stringify convierte a texto; parse interpreta texto JSON.",
        "hint": {
          "example": "JSON.stringify({ titulo: \"Sur\" })",
          "steps": [
            "Empezás con un objeto JavaScript.",
            "stringify lo convierte en texto JSON.",
            "JSON.parse permite interpretar ese texto nuevamente."
          ]
        }
      },
      {
        "title": "Antes de mostrar una API pública, ¿qué hacés según el ejercicio 9?",
        "code": "PokeAPI, Rick & Morty, Dog CEO, JSONPlaceholder u Open Brewery",
        "choices": [
          "Explorar su JSON para ubicar el array y los campos.",
          "Suponer que todas usan res.data.results.",
          "Escribir una clave secreta en la pantalla."
        ],
        "answer": 0,
        "explain": "Las APIs de la tabla tienen estructuras diferentes; primero se explora la respuesta.",
        "hint": {
          "example": "Una respuesta de libros tiene { items: [...] }.",
          "steps": [
            "Leés el JSON del endpoint.",
            "Descubrís que la lista se llama items.",
            "Usás esa ruta real, sin copiar results de otra API."
          ]
        }
      }
    ]
  },
  {
    "title": "Axios y async/await",
    "desc": "Consultar, esperar resultados y manejar carga, error y reintento.",
    "source": "U7 · Axios; Patrón base; try/catch/finally; App del clima",
    "qs": [
      {
        "title": "Instalá la librería usada para HTTP.",
        "code": "npm install ____",
        "choices": null,
        "answer": "axios",
        "type": "fill",
        "explain": "Axios es la librería de pedidos HTTP usada en el material.",
        "hint": {
          "example": "npm install express",
          "steps": [
            "Identificás el nombre del paquete necesario.",
            "npm install lo agrega al proyecto.",
            "Después lo importás desde el código que lo usa."
          ]
        }
      },
      {
        "title": "Importá Axios en la pantalla.",
        "code": "import axios from \"____\";",
        "choices": null,
        "answer": "axios",
        "type": "fill",
        "explain": "El import toma la librería instalada con ese nombre.",
        "hint": {
          "example": "import { View } from \"react-native\";",
          "steps": [
            "El nombre entre comillas indica el paquete.",
            "El import trae lo que usarás en el archivo.",
            "Usá el paquete correspondiente a la librería pedida."
          ]
        }
      },
      {
        "title": "Marcá la función que utiliza await.",
        "code": "const obtenerDatos = ____ () => {\n  const res = await axios.get(URL);\n};",
        "choices": null,
        "answer": "async",
        "type": "fill",
        "explain": "Una función que usa await en este patrón se declara async.",
        "hint": {
          "example": "const cargarLibros = async () => {\n  const respuesta = await axios.get(URL_LIBROS);\n};",
          "steps": [
            "El pedido entrega un resultado asíncrono.",
            "La función se declara async.",
            "Dentro podés esperar la respuesta con await."
          ]
        }
      },
      {
        "title": "Esperá el resultado del pedido.",
        "code": "const res = ____ axios.get(URL);",
        "choices": null,
        "answer": "await",
        "type": "fill",
        "explain": "await espera la resolución del pedido antes de continuar con res.",
        "hint": {
          "example": "const r = await axios.get(URL_AUTORES);\nsetAutores(r.data);",
          "steps": [
            "Iniciás la consulta de autores.",
            "Esperás su respuesta.",
            "Recién entonces accedés a data para guardarlo."
          ]
        }
      },
      {
        "title": "Obtené el cuerpo de la respuesta.",
        "code": "const productos = respuesta.____;",
        "choices": null,
        "answer": "data",
        "type": "fill",
        "explain": "En Axios, data contiene el body de la respuesta.",
        "hint": {
          "example": "const r = await axios.get(URL_LIBROS);\nconst libros = r.data;",
          "steps": [
            "r es el objeto de respuesta de Axios.",
            "Su propiedad data contiene el cuerpo.",
            "Ese contenido puede ser un array u objeto según la API."
          ]
        }
      },
      {
        "title": "¿Qué bloque recibe un error de la consulta?",
        "code": "try { await axios.get(URL); } ____ (e) { setError(\"Falló\"); }",
        "choices": [
          "finally",
          "map",
          "catch"
        ],
        "answer": 2,
        "explain": "catch maneja el error lanzado dentro de try.",
        "hint": {
          "example": "try { await cargarAutores(); } catch (e) { setFallo(\"No se pudo\"); }",
          "steps": [
            "La operación que puede fallar está en try.",
            "Si lanza un error, se entra a catch.",
            "Allí se muestra o guarda un mensaje para el usuario."
          ]
        }
      },
      {
        "title": "Cerrá la carga aunque el pedido falle.",
        "code": "try { /* pedido */ } catch(e) { /* mensaje */ }\n____ { setCargando(false); }",
        "choices": null,
        "answer": "finally",
        "type": "fill",
        "explain": "finally finaliza el intento tanto en éxito como en error.",
        "hint": {
          "example": "try { await cargarLibros(); }\ncatch (e) { setFallo(\"Falló\"); }\nfinally { setEsperando(false); }",
          "steps": [
            "El resultado puede ser correcto o fallar.",
            "En ambos casos ya terminó el intento.",
            "finally concentra esa tarea común de cierre."
          ]
        }
      },
      {
        "title": "¿Qué ocurre con una respuesta 500 usando Axios por defecto?",
        "code": "await axios.get(URL)",
        "choices": [
          "Siempre se muestra como éxito.",
          "El pedido es rechazado y puede manejarse en catch.",
          "Se transforma en key."
        ],
        "answer": 1,
        "explain": "Axios rechaza por defecto respuestas HTTP fuera del rango exitoso.",
        "hint": {
          "example": "Una consulta a /autores responde 404.",
          "steps": [
            "El servidor respondió con un estado de error.",
            "Axios rechaza el pedido con su configuración normal.",
            "El catch del patrón permite mostrar un mensaje."
          ]
        }
      },
      {
        "title": "¿Cómo cambia la lectura de JSON respecto de fetch en la guía?",
        "code": "Axios frente al ejemplo de fetch",
        "choices": [
          "Axios exige JSON.parse en todos los pedidos.",
          "Axios no recibe JSON.",
          "Axios entrega el contenido en data; no llamás a response.json()."
        ],
        "answer": 2,
        "explain": "El ejemplo de fetch usa response.json(); Axios procesa el JSON y lo entrega en data.",
        "hint": {
          "example": "const r = await axios.get(URL_LIBROS);\nsetLibros(r.data);",
          "steps": [
            "Esperás la respuesta de Axios.",
            "Leés data directamente.",
            "No mezclás los pasos de lectura del ejemplo de fetch."
          ]
        }
      },
      {
        "title": "¿Qué debería hacer el botón Reintentar después de un fallo?",
        "code": "obtenerClima() limpia error, activa carga y consulta la API.",
        "choices": [
          "Volver a ejecutar obtenerClima.",
          "Solo ocultar el Text del error.",
          "Hacer git init."
        ],
        "answer": 0,
        "explain": "Reintentar implica realizar otro intento de la consulta.",
        "hint": {
          "example": "Un botón llama de nuevo a cargarLibros.",
          "steps": [
            "La función limpia el mensaje anterior.",
            "Vuelve a activar el estado de carga.",
            "Repite el pedido y maneja su nuevo resultado."
          ]
        }
      }
    ]
  },
  {
    "title": "Node y Express",
    "desc": "Seguir el pedido desde el servidor hasta el servicio.",
    "source": "U8 · Node y Express; Primer servidor; Arquitectura",
    "qs": [
      {
        "title": "¿Qué permite Node.js?",
        "code": "Backend del proyecto",
        "choices": [
          "Ejecutar JavaScript fuera del navegador.",
          "Ejecutar únicamente JSX en un celular.",
          "Guardar automáticamente tablas en Excel."
        ],
        "answer": 0,
        "explain": "Node permite escribir el servidor en JavaScript.",
        "hint": {
          "example": "Un servidor de biblioteca escrito en JavaScript",
          "steps": [
            "El código recibe pedidos del cliente.",
            "Se ejecuta en el entorno del servidor.",
            "Node es el entorno que ejecuta ese JavaScript."
          ]
        }
      },
      {
        "title": "Creá la aplicación de Express.",
        "code": "const express = require(\"express\");\nconst app = ____();",
        "choices": null,
        "answer": "express",
        "type": "fill",
        "explain": "Llamar a express() crea la aplicación.",
        "hint": {
          "example": "const express = require(\"express\");\nconst servidor = express();",
          "steps": [
            "require importa Express.",
            "La función importada se invoca.",
            "La variable resultante se usa para registrar rutas."
          ]
        }
      },
      {
        "title": "¿Qué hace app.use(express.json())?",
        "code": "Pedidos POST o PUT con JSON",
        "choices": [
          "Crea un commit.",
          "Dibuja una lista.",
          "Permite interpretar el body JSON del pedido."
        ],
        "answer": 2,
        "explain": "Este middleware permite acceder al JSON del body desde req.body.",
        "hint": {
          "example": "POST /libros con { \"titulo\": \"Sur\" }",
          "steps": [
            "El cliente envía JSON en el cuerpo.",
            "express.json interpreta ese cuerpo.",
            "El controlador puede acceder a req.body.titulo."
          ]
        }
      },
      {
        "title": "¿Cuál es la URL completa de esta ruta?",
        "code": "app.use(\"/api/productos\", router);\nrouter.get(\"/:id\", ctrl.obtenerUno);",
        "choices": [
          "GET /api/productos/5",
          "POST /api/productos/5",
          "GET /5/api/productos"
        ],
        "answer": 0,
        "explain": "El prefijo se combina con la ruta del router y el método debe coincidir.",
        "hint": {
          "example": "app.use(\"/api/libros\", router);\nrouter.get(\"/:id\", ctrl.ver);",
          "steps": [
            "El prefijo es /api/libros.",
            "/:id se reemplaza con el identificador.",
            "Para id 7 se consulta GET /api/libros/7."
          ]
        }
      },
      {
        "title": "¿Qué responsabilidad tiene el router?",
        "code": "routes/productosRoutes.js",
        "choices": [
          "Renderizar el clima.",
          "Elegir el controlador según ruta y método.",
          "Guardar credenciales en la app móvil."
        ],
        "answer": 1,
        "explain": "El enrutador delega el pedido a la función del controlador.",
        "hint": {
          "example": "router.post(\"/\", ctrl.crearLibro);",
          "steps": [
            "Llega un pedido POST.",
            "La ruta coincide con la registrada.",
            "El router llama a crearLibro en el controlador."
          ]
        }
      },
      {
        "title": "¿Qué hace el controlador?",
        "code": "controllers/productosController.js",
        "choices": [
          "Solo cambia el color de Text.",
          "Instala Express.",
          "Recibe req/res, llama al servicio y arma la respuesta."
        ],
        "answer": 2,
        "explain": "El controlador conecta el pedido HTTP con el trabajo del servicio.",
        "hint": {
          "example": "const libros = await service.obtenerTodos();\nres.json(libros);",
          "steps": [
            "El controlador pide datos al servicio.",
            "Espera el resultado cuando es asíncrono.",
            "Devuelve esos datos como respuesta HTTP."
          ]
        }
      },
      {
        "title": "¿Dónde va la consulta de datos en esta arquitectura?",
        "code": "routes · controllers · services",
        "choices": [
          "En el servicio.",
          "En .gitignore.",
          "En el atributo key."
        ],
        "answer": 0,
        "explain": "El servicio concentra la lógica y el acceso a datos.",
        "hint": {
          "example": "services/librosService.js consulta la tabla libros.",
          "steps": [
            "La ruta elige una acción.",
            "El controlador organiza el pedido.",
            "El servicio realiza la consulta de datos."
          ]
        }
      },
      {
        "title": "Leé el id de /api/productos/:id.",
        "code": "const id = req.____.id;",
        "choices": null,
        "answer": "params",
        "type": "fill",
        "explain": "params contiene parámetros de la ruta.",
        "hint": {
          "example": "GET /api/libros/7\nreq.params.id // \"7\"",
          "steps": [
            "La ruta declara un espacio :id.",
            "El cliente envía 7 en ese lugar.",
            "Express lo deja disponible dentro de req.params."
          ]
        }
      },
      {
        "title": "Leé el JSON enviado por el cliente.",
        "code": "const nuevo = await service.crear(req.____);",
        "choices": null,
        "answer": "body",
        "type": "fill",
        "explain": "body contiene los datos enviados en el cuerpo del pedido.",
        "hint": {
          "example": "POST /api/libros\n{ \"titulo\": \"Sur\" }\nreq.body.titulo",
          "steps": [
            "El título no está en la ruta.",
            "Se envía en el cuerpo JSON.",
            "Tras interpretarlo, Express permite leerlo con req.body."
          ]
        }
      },
      {
        "title": "Exportá el router para usarlo desde index.js.",
        "code": "module.____ = router;",
        "choices": null,
        "answer": "exports",
        "type": "fill",
        "explain": "module.exports define qué recibe otro archivo al usar require.",
        "hint": {
          "example": "module.exports = { obtenerLibros };",
          "steps": [
            "El archivo define una función.",
            "La incluye en el valor exportado.",
            "Otro archivo puede importarla con require y llamarla."
          ]
        }
      }
    ]
  },
  {
    "title": "Supabase y .env",
    "desc": "Configurar el cliente y consultar la base de datos sin exponer la clave del servidor.",
    "source": "U8 · Clase 2: Variables de entorno; Supabase; Cliente SDK; Deploy",
    "qs": [
      {
        "title": "¿Por qué usar Supabase en lugar del array hardcodeado?",
        "code": "const productos = [...];",
        "choices": [
          "Para guardar los datos en una base persistente.",
          "Para evitar escribir componentes.",
          "Para reemplazar GitHub."
        ],
        "answer": 0,
        "explain": "Los cambios en el array del servidor se pierden al reiniciar; la base conserva los registros.",
        "hint": {
          "example": "Un array de libros se modifica y luego reiniciás Node.",
          "steps": [
            "El array estaba en memoria del proceso.",
            "Al reiniciar se vuelve a crear desde el código.",
            "Una base de datos permite conservar los cambios fuera de ese proceso."
          ]
        }
      },
      {
        "title": "¿Qué columnas crea la guía en productos?",
        "code": "Table Editor",
        "choices": [
          "titulo, autor y editorial.",
          "id, nombre y precio.",
          "request, response y status."
        ],
        "answer": 1,
        "explain": "El esquema de productos usa id int8, nombre text y precio float8.",
        "hint": {
          "example": "Una tabla libros podría tener id, titulo y paginas.",
          "steps": [
            "Definís qué representa cada fila.",
            "Elegís columnas para sus propiedades.",
            "Usás tipos acordes: identificador, texto y número."
          ]
        }
      },
      {
        "title": "Instalá el cliente de Supabase.",
        "code": "npm install ____",
        "choices": null,
        "answer": "@supabase/supabase-js",
        "type": "fill",
        "explain": "Ese es el paquete del SDK utilizado por el backend del profe.",
        "hint": {
          "example": "npm install dotenv",
          "steps": [
            "Identificás el paquete que requiere el código.",
            "Lo instalás con npm install seguido de su nombre.",
            "Después podés importarlo con require."
          ]
        }
      },
      {
        "title": "Cargá .env antes de importar el cliente.",
        "code": "require(\"dotenv\").____();",
        "choices": null,
        "answer": "config",
        "type": "fill",
        "explain": "config carga variables de .env para que puedan leerse desde process.env.",
        "hint": {
          "example": "require(\"dotenv\").config();\nconst servicio = require(\"./servicioLibros\");",
          "steps": [
            "Primero cargás la configuración.",
            "Luego importás módulos que la necesitan.",
            "Si la carga ocurre tarde, esos módulos pueden recibir valores ausentes."
          ]
        }
      },
      {
        "title": "Completá el acceso a las variables del servidor.",
        "code": "createClient(process.____.SUPABASE_URL, process.env.SUPABASE_KEY);",
        "choices": null,
        "answer": "env",
        "type": "fill",
        "explain": "process.env permite leer las variables de entorno.",
        "hint": {
          "example": "const url = process.env.URL_LIBROS;",
          "steps": [
            "La configuración está fuera del código.",
            "process.env contiene las variables del proceso.",
            "Leés el nombre exacto que configuraste."
          ]
        }
      },
      {
        "title": "Aparece “supabaseUrl is required”. ¿Qué revisás?",
        "code": "createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)",
        "choices": [
          "La prop color del spinner.",
          "La cantidad de componentes Text.",
          "Nombre, valor y carga de SUPABASE_URL antes de createClient."
        ],
        "answer": 2,
        "explain": "El cliente no recibió una URL válida en el valor requerido.",
        "hint": {
          "example": "Una función necesita process.env.URL_LIBROS y recibe undefined.",
          "steps": [
            "Comparás el nombre con el archivo de configuración.",
            "Comprobás que exista un valor.",
            "Revisás que la configuración se cargue antes de usarlo."
          ]
        }
      },
      {
        "title": "¿Dónde queda service_role en el esquema del profe?",
        "code": "SUPABASE_KEY",
        "choices": [
          "En el backend, nunca en React Native.",
          "En un Text visible.",
          "En un archivo público del frontend."
        ],
        "answer": 0,
        "explain": "La clave service_role es secreta y tiene privilegios elevados; el esquema la mantiene en el servidor.",
        "hint": {
          "example": "Una app de biblioteca consulta a su backend.",
          "steps": [
            "El celular envía pedidos a la API.",
            "El backend conserva la credencial secreta.",
            "El servicio usa esa credencial para consultar la base."
          ]
        }
      },
      {
        "title": "Elegí la tabla productos.",
        "code": "supabase.____(\"productos\").select(\"*\");",
        "choices": null,
        "answer": "from",
        "type": "fill",
        "explain": "from indica sobre qué tabla opera la consulta.",
        "hint": {
          "example": "supabase.from(\"libros\").select(\"*\");",
          "steps": [
            "Primero elegís la tabla libros.",
            "Después elegís la operación de lectura.",
            "El nombre debe coincidir con la tabla creada."
          ]
        }
      },
      {
        "title": "¿Qué hacés con error después de una consulta?",
        "code": "const { data, error } = await supabase.from(\"productos\").select(\"*\");",
        "choices": [
          "return error sin comprobarlo como si fueran productos;",
          "Ignorarlo siempre.",
          "if (error) throw error;"
        ],
        "answer": 2,
        "explain": "El servicio lanza el error para que el controlador lo maneje con try/catch.",
        "hint": {
          "example": "const { data, error } = await consultarLibros();\nif (error) throw error;\nreturn data;",
          "steps": [
            "La consulta informa datos y error.",
            "Comprobás si ocurrió un fallo.",
            "Si no hay error, devolvés los datos al controlador."
          ]
        }
      },
      {
        "title": "Funciona localmente, pero falta la configuración en Vercel. ¿Qué hacés según la guía?",
        "code": ".env está en .gitignore",
        "choices": [
          "Configurar las variables en Vercel y hacer otro despliegue.",
          "Subir .env al repositorio público.",
          "Mover service_role al celular."
        ],
        "answer": 0,
        "explain": "El .env local no se sube; el entorno publicado necesita su propia configuración.",
        "hint": {
          "example": "Backend de libros local y backend publicado",
          "steps": [
            "La configuración de tu compu no viaja con el repo.",
            "El servidor publicado necesita los mismos nombres de variables.",
            "Los cargás en su entorno y redesplegás para aplicar el cambio."
          ]
        }
      }
    ]
  },
  {
    "title": "CRUD completo",
    "desc": "Conectar métodos HTTP, controlador y consultas a Supabase.",
    "source": "U8 · Servicios; Controladores async; Probar CRUD con Postman",
    "qs": [
      {
        "title": "Leé todas las columnas.",
        "code": "supabase.from(\"productos\").____(\"*\");",
        "choices": null,
        "answer": "select",
        "type": "fill",
        "explain": "select realiza la lectura; * solicita todas las columnas.",
        "hint": {
          "example": "supabase.from(\"libros\").select(\"*\");",
          "steps": [
            "from selecciona la tabla.",
            "select indica lectura.",
            "El asterisco solicita todas las columnas."
          ]
        }
      },
      {
        "title": "Insertá el producto nuevo.",
        "code": "supabase.from(\"productos\").____(producto).select();",
        "choices": null,
        "answer": "insert",
        "type": "fill",
        "explain": "insert crea el registro y select pide los datos resultantes.",
        "hint": {
          "example": "supabase.from(\"libros\").insert({ titulo: \"Sur\" }).select();",
          "steps": [
            "Construís un objeto con los datos nuevos.",
            "insert lo envía para crear la fila.",
            "select permite recibir la fila creada."
          ]
        }
      },
      {
        "title": "Actualizá el precio.",
        "code": "supabase.from(\"productos\").____({ precio: 18000 }).eq(\"id\", id).select();",
        "choices": null,
        "answer": "update",
        "type": "fill",
        "explain": "update aplica los cambios a las filas seleccionadas por el filtro.",
        "hint": {
          "example": "supabase.from(\"libros\").update({ titulo: \"Norte\" }).eq(\"id\", 7);",
          "steps": [
            "Preparás los campos que cambian.",
            "update recibe esos campos.",
            "El filtro restringe el cambio al libro con id 7."
          ]
        }
      },
      {
        "title": "Borrá el producto seleccionado.",
        "code": "supabase.from(\"productos\").____().eq(\"id\", id);",
        "choices": null,
        "answer": "delete",
        "type": "fill",
        "explain": "delete elimina las filas que cumplen el filtro.",
        "hint": {
          "example": "supabase.from(\"libros\").delete().eq(\"id\", 7);",
          "steps": [
            "Elegís la tabla libros.",
            "Indicás la operación de borrar.",
            "El filtro selecciona el registro concreto."
          ]
        }
      },
      {
        "title": "Limitá la operación al id recibido.",
        "code": "supabase.from(\"productos\").delete().____(\"id\", id);",
        "choices": null,
        "answer": "eq",
        "type": "fill",
        "explain": "eq compara la columna con el valor indicado.",
        "hint": {
          "example": "supabase.from(\"libros\").update({ paginas: 200 }).eq(\"id\", 7);",
          "steps": [
            "El cambio no debería afectar todos los libros.",
            "El filtro compara id con 7.",
            "Solo la fila coincidente queda seleccionada."
          ]
        }
      },
      {
        "title": "¿Qué devuelve el servicio de creación del profe?",
        "code": "const { data, error } = await consulta;\nif (error) throw error;\nreturn data[0];",
        "choices": [
          "El primer carácter del nombre.",
          "El código HTTP 500.",
          "La primera fila retornada por la consulta."
        ],
        "answer": 2,
        "explain": "La consulta devuelve un array; data[0] toma el registro creado.",
        "hint": {
          "example": "data = [{ id: 7, titulo: \"Sur\" }];\nreturn data[0];",
          "steps": [
            "El resultado tiene forma de lista.",
            "La inserción esperada generó un libro.",
            "[0] toma ese objeto del array."
          ]
        }
      },
      {
        "title": "¿Cómo envía el frontend un cambio de precio?",
        "code": "Producto 5, nuevo precio 18000",
        "choices": [
          "axios.put(URL + \"/5\", { precio: 18000 })",
          "axios.get(URL + \"/5\")",
          "axios.delete(URL + \"/5\")"
        ],
        "answer": 0,
        "explain": "El id viaja en la ruta y los cambios en el body.",
        "hint": {
          "example": "axios.put(URL_LIBROS + \"/7\", { titulo: \"Norte\" })",
          "steps": [
            "Identificás el libro en la URL.",
            "Ponés el nuevo título en un objeto.",
            "PUT lleva la solicitud de actualización."
          ]
        }
      },
      {
        "title": "Esperá al servicio antes de responder.",
        "code": "const nuevo = ____ service.crear(req.body);\nres.status(201).json(nuevo);",
        "choices": null,
        "answer": "await",
        "type": "fill",
        "explain": "El controlador debe esperar una operación asíncrona del servicio.",
        "hint": {
          "example": "const libro = await service.crear(datosLibro);\nres.status(201).json(libro);",
          "steps": [
            "La base de datos tarda en responder.",
            "await espera la creación.",
            "Después se puede enviar la fila creada como JSON."
          ]
        }
      },
      {
        "title": "¿Qué mandás en Postman para crear un producto?",
        "code": "POST /api/productos",
        "choices": [
          "Solo un color hexadecimal.",
          "Un comando git push.",
          "Body, raw, JSON con nombre y precio."
        ],
        "answer": 2,
        "explain": "El cuerpo contiene los campos que espera el endpoint.",
        "hint": {
          "example": "POST /api/libros\nBody → raw → JSON\n{ \"titulo\": \"Sur\" }",
          "steps": [
            "Elegís el método y la ruta de creación.",
            "Configurás el cuerpo como JSON.",
            "Escribís un objeto con los campos del registro."
          ]
        }
      },
      {
        "title": "¿Cómo comprobás un DELETE completo?",
        "code": "DELETE /api/productos/5 respondió correctamente.",
        "choices": [
          "Volver a consultar y verificar la tabla en Supabase.",
          "Cambiar el texto del botón a “Borrado” sin consultar.",
          "Cerrar Postman sin mirar nada."
        ],
        "answer": 0,
        "explain": "La guía pide verificar los cambios en Table Editor; volver a consultar confirma lo que recibe el cliente.",
        "hint": {
          "example": "Borraste el libro 7.",
          "steps": [
            "Revisás la respuesta del pedido.",
            "Consultás nuevamente la lista.",
            "Comprobás que la fila ya no esté en la tabla."
          ]
        }
      }
    ]
  },
  {
    "title": "Simulacro y depuración",
    "desc": "Encontrar fallos usando únicamente los patrones del material y registrar la solución.",
    "source": "Tu guía · Paso 12; U7 · Ejercicio 9; U8 · Postman y verificación",
    "qs": [
      {
        "title": "La lista falla con map. ¿Qué corregís?",
        "code": "const res = await axios.get(URL);\nsetProductos(res);",
        "choices": [
          "Guardar res.data si el body es el array de productos.",
          "Cambiar GET por DELETE.",
          "Agregar git init."
        ],
        "answer": 0,
        "explain": "Se estaba guardando la respuesta completa de Axios en vez del array del body.",
        "hint": {
          "example": "respuesta.data = [{ id: 7, titulo: \"Sur\" }];\nsetLibros(respuesta.data);",
          "steps": [
            "map necesita un array.",
            "La respuesta de Axios contiene más información.",
            "Buscás el array real dentro de data antes de guardarlo."
          ]
        }
      },
      {
        "title": "Ahora la API devuelve results. ¿Qué corregís?",
        "code": "res.data = { results: [{ id: 1, name: \"Rick\" }] };\nsetPersonajes(res.data);",
        "choices": [
          "setPersonajes(res.results)",
          "setPersonajes(res.data.results)",
          "setPersonajes(res.status)"
        ],
        "answer": 1,
        "explain": "La lista está anidada dentro de results.",
        "hint": {
          "example": "respuesta.data = { autores: [{ id: 2, nombre: \"Ana\" }] };",
          "steps": [
            "El body es un objeto contenedor.",
            "El array vive en autores.",
            "Guardás respuesta.data.autores para recorrerlo."
          ]
        }
      },
      {
        "title": "La lista devuelve undefined. ¿Dónde está el error?",
        "code": "productos.map(p => { p.nombre });",
        "choices": [
          "Falta una clave secreta.",
          "El servidor usa puerto 3000.",
          "Falta return en el cuerpo con llaves."
        ],
        "answer": 2,
        "explain": "Con llaves, la función debe devolver explícitamente el valor.",
        "hint": {
          "example": "libros.map(l => { return l.titulo; });",
          "steps": [
            "map ejecuta una función por libro.",
            "El cuerpo con llaves necesita indicar su resultado.",
            "return entrega el título a la nueva lista."
          ]
        }
      },
      {
        "title": "La carga queda encendida si el pedido falla. ¿Qué movés?",
        "code": "try {\n  await axios.get(URL);\n  setCargando(false);\n} catch(e) { setError(\"Falló\"); }",
        "choices": [
          "setCargando(false) a finally.",
          "setError a .gitignore.",
          "axios.get a package.json."
        ],
        "answer": 0,
        "explain": "Si await falla, no se alcanza el setter dentro de try; finally cierra ambos caminos.",
        "hint": {
          "example": "Una consulta de libros falla antes de setEsperando(false).",
          "steps": [
            "El error interrumpe el bloque try.",
            "El flujo pasa a catch.",
            "Una tarea de cierre común debe ir en finally."
          ]
        }
      },
      {
        "title": "El botón consulta la API durante el render. ¿Qué corregís?",
        "code": "<Button title=\"Reintentar\" onPress={obtenerDatos()} />",
        "choices": [
          "onPress=\"obtenerDatos()\"",
          "onPress={obtenerDatos}",
          "onPress={null}"
        ],
        "answer": 1,
        "explain": "Los paréntesis ejecutan la función al evaluar JSX; se debe pasar la referencia.",
        "hint": {
          "example": "<Button title=\"Cargar autores\" onPress={cargarAutores} />",
          "steps": [
            "El botón necesita recibir una función.",
            "Sin paréntesis la función no se ejecuta todavía.",
            "Se llamará cuando la persona pulse el botón."
          ]
        }
      },
      {
        "title": "El servidor responde en /mensaje, pero no en /. ¿Qué comprobás?",
        "code": "app.get(\"/mensaje\", (req,res) => res.json({ mensaje: \"OK\" }));",
        "choices": [
          "Que todas las tablas estén vacías.",
          "Que GitHub tenga un color verde.",
          "Probar GET /mensaje, que es la ruta definida."
        ],
        "answer": 2,
        "explain": "Cannot GET / indica que esa ruta no fue atendida, no demuestra un fallo de Supabase.",
        "hint": {
          "example": "Un servidor solo define GET /saludo.",
          "steps": [
            "El navegador pide exactamente la ruta escrita.",
            "/ y /saludo son distintas.",
            "Probás el endpoint que efectivamente registraste."
          ]
        }
      },
      {
        "title": "El controlador devuelve antes de tener los datos. ¿Qué falta?",
        "code": "const obtener = async (req,res) => {\n  const data = service.obtenerTodos();\n  res.json(data);\n};",
        "choices": [
          "await antes de service.obtenerTodos().",
          "Un map alrededor de res.",
          "Borrar async."
        ],
        "answer": 0,
        "explain": "El servicio asíncrono necesita ser esperado antes de enviar su resultado.",
        "hint": {
          "example": "const autores = await service.listarAutores();\nres.json(autores);",
          "steps": [
            "La consulta no entrega los datos inmediatamente.",
            "await espera a que se resuelva.",
            "Luego res.json envía los datos resueltos."
          ]
        }
      },
      {
        "title": "La actualización puede afectar toda la tabla. ¿Qué falta?",
        "code": "supabase.from(\"productos\").update({ precio: 100 });",
        "choices": [
          "Un Text dentro de update.",
          "Un filtro .eq(\"id\", id) para el registro elegido.",
          "Un git commit dentro del servicio."
        ],
        "answer": 1,
        "explain": "El filtro limita qué filas modifica la actualización.",
        "hint": {
          "example": "supabase.from(\"libros\").update({ paginas: 300 }).eq(\"id\", 7);",
          "steps": [
            "El cambio debe ser de un solo libro.",
            "Elegís su id.",
            "El filtro evita aplicar la actualización a toda la tabla."
          ]
        }
      },
      {
        "title": "¿Qué criterio mínimo del ejercicio 9 falta?",
        "code": "Hay spinner, error con reintento y una lista de 3 personajes con nombre y estado.",
        "choices": [
          "Agregar pagos.",
          "Crear un sistema de usuarios.",
          "Mostrar al menos 10 elementos."
        ],
        "answer": 2,
        "explain": "El ejercicio 9 pide una lista de al menos 10 elementos y dos campos por elemento.",
        "hint": {
          "example": "Una lista de biblioteca tiene 12 libros con título y autor.",
          "steps": [
            "Contás cuántos elementos se muestran.",
            "Comprobás que cada elemento tenga dos datos.",
            "Contrastás ambas condiciones con la consigna."
          ]
        }
      },
      {
        "title": "¿Cuál es un registro útil para el parcial?",
        "code": "La API no terminaba de cargar ante un error.",
        "choices": [
          "Qué falló, dónde estaba, qué cambio hice y cómo lo comprobé.",
          "Solo “ahora anda”.",
          "Solo una captura sin explicación."
        ],
        "answer": 0,
        "explain": "El registro debe permitir entender y verificar la solución, como pide tu guía de preparación.",
        "hint": {
          "example": "Fallo: no se mostraban autores. Archivo: PantallaAutores. Cambio: guardar r.data.autores. Prueba: la lista muestra nombres.",
          "steps": [
            "Nombrás el síntoma observado.",
            "Ubicás el archivo y explicás el cambio.",
            "Anotás una prueba concreta y su resultado."
          ]
        }
      }
    ]
  }
];
