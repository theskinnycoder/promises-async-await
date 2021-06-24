import fetch from 'node-fetch';

function getTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then((res) => res.json())
    .then((todos) => console.log(todos))
    .catch((error) => {
      // console.log(error.message);
      throw error;
    })
    .finally(() => console.log('---------------Todos Done---------------'));
}

const getTodoByID = async ({ id }) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todos = await res.json();
    console.log(todos);
  } catch (error) {
    console.log(error.message);
    // throw error
  } finally {
    console.log('---------------Todo By ID Done---------------');
  }
};

// OPTION 0 : Use Promises to pipeline your calls
// getTodos().then(() => getTodoByID({ id: 9 }));
// getTodoByID({ id: 9 }).then(() => getTodos());

// OPTION 1 : Use Asynchronous IIFEs if you wanna use async-await (No more needed with NodeJS 14+ & type: "module" in the package.json file)
// (async () => {
try {
  await getTodos();
  await getTodoByID({ id: 9 });
} catch (error) {
  console.log(error.message);
}
// })();
