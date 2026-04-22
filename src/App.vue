<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <div class="greeting-card">
      <h2>👋 Hello, Adelfa Guting!</h2>
      <p>Welcome to my Vue + Supabase App!</p>
    </div>
    <HelloWorld />
  </div>
</template>

<style scoped>
.greeting-card {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 30px;
  padding: 16px 24px;
  background-color: #f0f4ff;
  border: 1px solid #c3d0f5;
  border-radius: 10px;
  display: inline-block;
}

.greeting-card h2 {
  margin: 0 0 6px;
  color: #2c3e50;
}

.greeting-card p {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
}
</style>