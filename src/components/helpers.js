let idCounter = {};

function getId(prefix = 'key') {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 1;
  }

  const id = `${prefix}_${idCounter[prefix]}`;
  idCounter[prefix] += 1;

  return id;
}

export default getId;