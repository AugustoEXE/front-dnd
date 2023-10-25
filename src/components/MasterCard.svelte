<script lang="ts">
export let img;
export let legend;
export let route;
</script>

<a href="{route}" class="bg-zinc-900 grid gap-3 place-items-center hover:scale-105 hover:shadow-2xl transition">
    <img src="{img}" alt="" class="w-44 invert scale-95 m-2">
    <p class="text-center text-3xl font-bold my-3">Cadastrar {legend}</p>
</a>