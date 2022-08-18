const Product = ({ productData }) => {
  return (
    <div class="card h-100">
      {productData.isSale && (
        <div
          class="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>
      )}
      <img
        class="card-img-top"
        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="..."
      ></img>
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder">{productData.tittle}</h5>
          {productData.isStarts && (
            <div class="d-flex justify-content-center small text-warning mb-2">
            <i className="fa solid fa-star"></i>
            <i className="fa solid fa-star"></i>
            <i className="fa solid fa-star"></i>
            <i className="fa solid fa-star"></i>
            <i className="fa solid fa-star"></i>
            </div>
          )}
          $40.00 - $80.00
        </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a class="btn btn-outline-dark mt-auto" href="#2">
            {productData.btnName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
