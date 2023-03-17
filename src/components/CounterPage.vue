<template>
    <div class="container">
      <h1> My Counter App</h1>
      <h3> Count: </h3>
      <span> {{ count }} </span> 
      <div class="buttons">
        <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="setValue(25)">Set to 25</button>
      <button @click="setValue(50)">Set to 50</button>
      </div>
      <button class="reset" @click="reset">Reset</button>
    </div>
  </template>
  
  <script>
  import useCounter from '@/composables/useCounter'
  
  export default {
    setup() {
      const { count, increment, decrement, reset, setValue } = useCounter()
  
      return {
        count,
        increment,
        decrement,
        reset,
        setValue
      }
    }
  }
  </script>

  <style>
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200&family=Stardos+Stencil:wght@700&display=swap');

    .container {
      background-color: #012928ff;
    }
    .buttons {
      display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    grid-gap: 10px;
    margin-bottom: 15px;
    grid-gap: 13px;
    margin-bottom: 15px;
    margin-top: 20px;
    }
    button {
      width: 8rem;
      background-color: #013d3bff;
      height: 27px;
      border-color: #2c3e50;
      cursor: pointer;
      color: white;
    }
    button:hover {
      color: black;
    }
    .reset {
      width: 20em;
    } 
    span {
      font-family: 'Mulish', sans-serif;
      font-family: 'Stardos Stencil', cursive;
      color: white;
      font-size: 20px;
    }
    h3, h5 {
      margin: 5px 0 15px 0;
    }
  </style>
  