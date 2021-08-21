import "./style.css";

function ItemCarrinho({
  imagemProduto,
  nomeProduto,
  quantidade,
  precoProduto,
}) {
  return (
    <div className="flex-row w-full margem-y">
      <div
        className="imagem-item"
        style={{
          backgroundImage: `url(${imagemProduto})`,
          backgroundPositio: "center center",
          backgroundSize: "cover",
        }}
      />
      <div className="flex-column">
        <h2 className="nome-produto">{nomeProduto}</h2>
        <p className="quantidade-produto">{quantidade} unidades</p>
        <p className="preco-produto">{precoProduto}</p>
      </div>
    </div>
  );
}

export default ItemCarrinho;
