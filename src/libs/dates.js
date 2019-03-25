const formatDate = date => {
  const d = new Date(date);
  return `${d.getMonth()}/${d.getDay()}/${d.getFullYear()}`;
};

export { formatDate };
