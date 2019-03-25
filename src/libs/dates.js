const formatDate = date => {
  const d = new Date(date);
  return `${d.getMonth() + 1}/${d.getDay()}/${d.getFullYear()}`;
};

export { formatDate };
