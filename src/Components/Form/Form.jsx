import React from "react";

export const Form = () => {
    return (
        <div>
        <h2>¡Hola soy un Formulario!</h2>
        <form>
            <label htmlFor="text" name="name">Name:
                <input type="text" name="name" />            
            </label>
            <label htmlFor="email">Email:
                <input type="email" name="email" />
            </label>
            <button style={{background: "gray"}} type="submit">Submit</button>
        </form>
    </div>
    );
}
