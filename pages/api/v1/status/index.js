function status(request, response) {
  response.status(200).json({ chave: "valor, ..., isso é um dicionario" });
}
export default status;
