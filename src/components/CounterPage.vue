<template>
    <div class="container">
      <h1> My Counter App</h1>
      <h3> Count: {{ count }} </h3>
      <div class="buttons">
        <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="setValue(25)">Set to 25</button>
      <button @click="setValue(50)">Set to 50</button>
      </div>
      <button @click="reset">Reset</button>
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
    .container {
      background-color: #012928ff;
    }
    .buttons {
      display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    grid-gap: 10px;
    }
    button {
      width: 8rem;
      background-color: #013d3bff;
    }
  </style>
  