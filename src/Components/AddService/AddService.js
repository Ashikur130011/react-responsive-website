import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit ,reset} = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
        .then(res => {
            if(res.data.insertedId) {
                alert('Service added successfully')
                reset();
            }
        })
    };

    return (
        <div>
            <h1>Add a Services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name", { required: true, maxLength: 20 })} placeholder="name" /> <br />
      <textarea {...register("description")} placeholder="description" /> <br />
      <input type="number" {...register("price")}  placeholder="price" />
      <input {...register("img")} placeholder="img-url" />
        <br />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;