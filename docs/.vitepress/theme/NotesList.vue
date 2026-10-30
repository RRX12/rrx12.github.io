<script setup>
import { useData, withBase } from 'vitepress'
const { frontmatter } = useData()
</script>
<template><ul><li v-for="note in frontmatter.notes" :key="note.link"><a :href="withBase(note.link)">{{ note.text }}</a></li></ul></template>
