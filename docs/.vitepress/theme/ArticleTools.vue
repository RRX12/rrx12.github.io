<script setup>
import { ref } from 'vue'
const message = ref('')
async function copyLink() {
  try {
    await navigator.clipboard.writeText(window.location.href)
    message.value = '链接已复制'
  } catch {
    message.value = '未能复制，请从地址栏复制链接'
  }
}
function printArticle() { window.print() }
</script>

<template>
  <div class="article-tools">
    <p class="article-meta">5 个章节<span aria-hidden="true"> · </span>2 张图表</p>
    <div class="article-actions">
      <button type="button" @click="copyLink">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m10 13 4-4m-6 6-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 3 1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" transform="translate(1 1)"/></svg>
        复制链接
      </button>
      <button type="button" @click="printArticle">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 8V3h10v5M7 17H4V9h16v8h-3M7 14h10v7H7z"/><path d="M17 11h1"/></svg>
        打印
      </button>
    </div>
    <span class="article-status" role="status">{{ message }}</span>
  </div>
</template>

