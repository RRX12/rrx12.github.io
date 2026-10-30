<script setup>
import { useData, withBase } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <main class="notebook-home">
    <section class="intro">
      <div class="eyebrow"><span class="status-dot"></span> A PERSONAL KNOWLEDGE BASE</div>
      <div class="hero-grid">
        <div>
          <p class="small-label">RRX12 的技术笔记</p>
          <h1>把新知识，<br>变成<span>自己的理解。</span></h1>
          <p class="hero-description">记录学习中的思考、实践与发现。<br>让每一次探索，都有迹可循。</p>
          <a class="primary-link" :href="withBase('/notes/')">翻开笔记 <span aria-hidden="true">↗</span></a>
        </div>
        <div class="notebook-art" aria-hidden="true">
          <div class="art-top"><span>FIELD NOTES</span><span>RR / 12</span></div>
          <div class="art-title">学 · 思 · 行</div>
          <div class="art-line"></div><div class="art-line short"></div>
          <div class="art-bottom"><span>LEARN<br>BUILD<br>REFLECT</span><span class="art-symbol">✳</span></div>
        </div>
      </div>
    </section>
    <section class="entries" aria-labelledby="entries-title">
      <div class="section-heading"><div><p class="eyebrow">THE NOTEBOOK</p><h2 id="entries-title">知识档案</h2></div><span class="archive-count">{{ String(frontmatter.notes.length).padStart(2, '0') }} 篇笔记</span></div>
      <a v-for="(note, i) in frontmatter.notes" :key="note.link" class="entry" :href="withBase(note.link)">
        <span class="entry-number">{{ String(i + 1).padStart(2, '0') }}</span>
        <div><span class="entry-category">TECHNICAL NOTES</span><h3>{{ note.text }}</h3></div>
        <span class="entry-arrow" aria-hidden="true">↗</span>
      </a>
      <p class="archive-note">一份持续生长的知识档案。</p>
    </section>
  </main>
</template>
