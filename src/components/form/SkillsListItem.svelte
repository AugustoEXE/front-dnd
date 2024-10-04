<script lang="ts">
    export let name: string 
</script>
<li class="grid grid-cols-6 gap-10">
    <input type="checkbox" class="w-2/3 rounded-full">
    <input type="number" class="col-span-2 bg-zinc-800 border-b-red-600 border-b-2">
    <span class="col-span-3">{name}</span>
</li>