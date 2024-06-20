import React, { useState } from "react";
import Card from "./Card.jsx";

function Form(tags, categories, onCreate) {
  const initialData = {
    title: "",
    image: "",
    content: "",
    category: "",
    tags: [],
    published: false,
  };

  const [formData, setFormData] = useState(initialData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await axios.post(`${apiUrl}/posts`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    if (res.status < 400) {
      onCreate();
    }
  };

  const handleField = (name, value) => {
    setFormData((curr) => ({
      ...curr,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {Object.keys(initialData).map((name, index) => {
          const value = initialData[name];
          switch (typeof value) {
            case "boolean":
              return (
                <label key={`formElement${index}`}>
                  <input
                    type="checkbox"
                    name={name}
                    checked={formData[name]}
                    onChange={(e) => handleField(name, e.target.checked)}
                  />
                  {name}
                </label>
              );
            case "object":
              return (
                <div key={`formElement${index}`}>
                  <p>Tags:</p>
                  <ul>
                    {tags.map((tag, index) => (
                      <li key={`tag${index}`}>
                        <input
                          type="checkbox"
                          name={name}
                          value={tag.id}
                          checked={formData[name].includes(tag.id)}
                          onChange={(e) => {
                            const curr = formData.tags.includes(id);
                            const newTags = curr.includes(id)
                              ? curr.filter((el) => el != id)
                              : [...curr, id];
                            handleField("tags", newTags);
                          }}
                        />
                        {tag.name}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            default:
              if(name === 'categoryId') {
                return (
                  <div key={`formElement${index}`}>
                    <p>Categoria:</p>
                    <select 
                      name="categoryId" 
                      value={formData[name]}
                      onChange={(e) => handleField(name, Number(e.target.value))}

                    >
                      {categories.map((category, index) => (
                        <option key={`categoryId${index}`} value={category.id}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                )
              }

              if(name === 'image') {
                return (
                  <label key={`formElement${index}`}>
                    {name}
                    <input 
                      type="file" 
                      onChange={(e) => handleField(name, e.target.files[0])}
                    />

                  </label>
                )
              }

              return (
                <input
                    key={`formElement${index}`} 
                    required
                    name={name}
                    type={typeof value === 'number' ? 'number' : 'text'}
                    placeholder={name}
                    value={formData[name]}
                    onChange={(e) => handleField(name, typeof value === 'number' ? Number(e.target.value) : e.target.value)}
                />
            )
          }
        })}

        <button className="btn btnAdd" type="submit">
          Aggiungi
        </button>
      </form>
    </>
  );
}

export default Form;
