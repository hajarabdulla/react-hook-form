import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { ProductFrom } from "./style";
import { Helmet, HelmetProvider } from "react-helmet-async";

function AddProductForm() {
  const [categories, setCategories] = useState([]);

  const url = "https://northwind.vercel.app/api/categories";

  const fetchCategories = async () => {
    await axios.get(url).then((res) => setCategories(res.data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Product</title>
      </Helmet>

      <ProductFrom>
        <h2>Add Product Form</h2>

        <Formik
          initialValues={{
            categories: undefined,
            name: "",
            unitPrice: undefined,
            unitStock: undefined,
            discontinued: undefined,
            quantityPerUnit: undefined,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.categories) {
              errors.categories = "Category is required";
            }
            if (!values.name) {
              errors.name = "Name is required";
            }
            if (!values.unitPrice) {
              errors.unitPrice = "Unit Price is required";
            }
            if (!values.unitStock) {
              errors.unitStock = "Unit Stock is required";
            }
            if (!values.discontinued) {
              errors.discontinued = "Discontinued is required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);

              const url = "https://northwind.vercel.app/api/products";
              const data = {
                categoryId: values.categories,
                name: values.name,
                unitPrice: values.unitPrice,
                unitsInStock: values.unitStock,
                discontinued: values.discontinued,
                quantityPerUnit: values.quantityPerUnit,
              };
              axios
                .post(url, data, {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                  },
                })
                .then(({ data }) => {
                  console.log(data);
                });
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <select
                name="categories"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.categories}
              >
                {categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <input
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Name"
              />
              {errors.name && touched.name && errors.name}
              <input
                type="number"
                name="unitPrice"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.unitPrice}
                placeholder="Unit Price"
              />
              {errors.unitPrice && touched.unitPrice && errors.unitPrice}
              <input
                type="number"
                name="unitStock"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.unitStock}
                placeholder="Unit Stock"
              />
              {errors.unitStock && touched.unitStock && errors.unitStock}
              <div>
                <input
                  type="checkbox"
                  name="discounted"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.discontinued}
                  placeholder="Discontinued"
                />
                <label>Discontinued</label>
              </div>
              {errors.discontinued &&
                touched.discontinued &&
                errors.discontinued}
              <input
                type="number"
                name="quantityPerUnit"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantityPerUnit}
                placeholder="Quantity Per Unit"
              />
              {errors.quantityPerUnit &&
                touched.quantityPerUnit &&
                errors.quantityPerUnit}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </ProductFrom>
    </HelmetProvider>
  );
}

export default AddProductForm;
