import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './product.css';

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: '',
    price: 0,
    productType: '',
    brands: '',
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  // Additional state for managing the form fields during product update
  const [editingProduct, setEditingProduct] = useState({
    productName: '',
    price: 0,
    productType: '',
    brands: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const productsData = await response.json();
        setProducts(productsData || []);
      } catch (error) {
        console.error('Error fetching products:', error);
        notifyError('Failed to fetch products');
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setVisibleProducts(products.slice(0, 10));
  }, [products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const addProduct = async () => {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: newProduct.productName,
          price: newProduct.price,
          productType: newProduct.productType,
          brands: newProduct.brands,
        }),
      });

      if (response.ok) {
        fetchProducts();
        setNewProduct({ productName: '', price: 0, productType: '', brands: '' });
        notifySuccess('Product added successfully');
      } else if (response.status === 400) {
        const errorData = await response.json();
        notifyError(`Failed to add product: ${errorData.error}`);
      } else {
        console.error('Failed to add product');
        notifyError('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      notifyError('Error adding product');
    }
  };

  const updateProduct = async () => {
    if (!selectedProduct || !selectedProduct.productId) {
      console.error('Invalid product selected');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/products/${selectedProduct.productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingProduct), // Using the edited fields from editingProduct state
      });

      if (response.ok) {
        fetchProducts();
        setSelectedProduct(null);
        setEditingProduct({
          productName: '',
          price: 0,
          productType: '',
          brands: '',
        }); // Reset the editingProduct state after update
        notifySuccess('Product updated successfully');
      } else {
        console.error('Failed to update product');
        notifyError('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      notifyError('Error updating product');
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchProducts();
        notifySuccess('Product deleted successfully');
      } else {
        console.error('Failed to delete product');
        notifyError('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      notifyError('Error deleting product');
    }
  };

  const selectProductForUpdate = (product) => {
    setSelectedProduct(product);
    setEditingProduct({
      productName: product.productName,
      price: product.price,
      productType: product.productType,
      brands: product.brands,
    }); // Set the initial values for editingProduct when updating
    setShowUpdateForm(true);
  };

  const handleSeeMore = () => {
    const currentLength = visibleProducts.length;
    setVisibleProducts([...visibleProducts, ...products.slice(currentLength, currentLength + 10)]);
  };

  return (
    <main className='admin-product-management-page gap-xl'>
      <div className="admin-product-title">
        <h2 className='h2'>Products</h2>
      </div>
      <div className="admin-products-container flex-row gap-xl">
        <div className="new-product-form">
          <h3>Add New Product</h3>
          <form onSubmit={(e) => { e.preventDefault(); addProduct(); }}>
            <label>Product Name:</label>
            <input className='input-s' type="text" name="productName" value={newProduct.productName} onChange={handleInputChange} required />

            <label>Price:</label>
            <input className='input-s'type="number" name="price" value={newProduct.price} onChange={handleInputChange} required />

            <label>Product Type:</label>
            <input className='input-s'type="text" name="productType" value={newProduct.productType} onChange={handleInputChange} required />

            <label>Brands:</label>
            <input className='input-s'type="text" name="brands" value={newProduct.brands} onChange={handleInputChange} required />

            <button className='' type="submit">Add Product</button>
          </form>
        </div>

        <div className="existing-products-container">
          <h3>Existing Products</h3>
            <div className="existing-products flex-col">
              <ul>
                {visibleProducts.map((product) => (
                  <li className='body flex-col gap-xs' key={product.productId}>
                    <strong>{product.productName}</strong> - ${product.price} - {product.productType} - {product.brands}
                    <div className='li-button flex-row gap-xs'>
                      <button onClick={() => selectProductForUpdate(product)}>Update</button>
                      <button onClick={() => deleteProduct(product.productId)}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
              {products.length > visibleProducts.length && (
                <button className="see-more-button" onClick={handleSeeMore}>
                  See More
                </button>
              )}
          </div>
        </div>

        {showUpdateForm && selectedProduct && (
          <div className="update-product-form flex-left-align gap-xs">
            <h3>Update Product</h3>
            <form onSubmit={(e) => { e.preventDefault(); updateProduct(); }}>
              <div className="form-group">
                <label htmlFor="product-name">Product Name</label>
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  value={editingProduct.productName}
                  onChange={(e) => setEditingProduct({ ...editingProduct, productName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="product-price">Product Price</label>
                <input
                  type="number"
                  name="product-price"
                  id="product-price"
                  value={editingProduct.price}
                  onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                />
                <button className='Update-btn' type="submit">Update Product</button>
              </div>
            </form>
          </div>
        )}

        <ToastContainer />
      </div>
    </main>
  );
}

export default AdminProducts;
